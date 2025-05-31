import axios from 'axios';
const { proto, generateWAMessageContent, generateWAMessageFromContent } = (await import('@whiskeysockets/baileys')).default;

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return conn.reply(m.chat, `❗ Ingresa palabras clave para buscar.\nEjemplo: ${usedPrefix + command} anime girl | 5`, m);
  }

  await conn.reply(m.chat, '🔎 Buscando imágenes en Pinterest, por favor espera...', m);

  const [query, cantidadStr] = text.split('|').map(v => v.trim());
  const cantidad = Math.max(1, Math.min(parseInt(cantidadStr) || 5, 10)); // mínimo 1, máximo 10

  try {
    const { data } = await axios.get(`https://api.vreden.my.id/api/pinterest?query=${encodeURIComponent(query)}`);
    const resultados = Array.isArray(data?.result) ? data.result : [];

    if (!resultados.length) return conn.reply(m.chat, '❌ No se encontraron imágenes para esa búsqueda.', m);

    // Mezclar resultados
    resultados.sort(() => Math.random() - 0.5);

    // Limitar cantidad
    const seleccionados = resultados.slice(0, cantidad);

    // Crear mensajes de imagen
    const tarjetas = [];

    for (let i = 0; i < seleccionados.length; i++) {
      const url = seleccionados[i];

      const { imageMessage } = await generateWAMessageContent({ image: { url } }, {
        upload: conn.waUploadToServer
      });

      tarjetas.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({ text: null }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: '🔸 Pinterest Search - Moon Force' }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          hasMediaAttachment: true,
          imageMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              name: "cta_url",
              buttonParamsJson: JSON.stringify({
                display_text: "Ver en Pinterest",
                url: `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(query)}`
              })
            }
          ]
        })
      });
    }

    const carrusel = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({ text: `✨ Resultados de búsqueda para: *${query}*` }),
            footer: proto.Message.InteractiveMessage.Footer.create({ text: '' }),
            header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: tarjetas })
          })
        }
      }
    }, { quoted: m });

    await conn.relayMessage(m.chat, carrusel.message, { messageId: carrusel.key.id });

  } catch (e) {
    console.error(e);
    await conn.reply(m.chat, `❌ Ocurrió un error al obtener los datos.\nError: ${e.message}`, m);
  }
};

handler.help = ['pinterest <consulta> | <número>'];
handler.tags = ['internet'];
handler.command = /^pin|pinterest|pintes$/i;
handler.premium = false;
handler.limit = false;

export default handler;