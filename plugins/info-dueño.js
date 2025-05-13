import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  await m.react('🐼');

  // Descargar miniatura
  let res = await fetch('https://files.catbox.moe/8an9fs.jpg');
  let thumb = await res.buffer();

  // Lista de contactos
  let list = [{
    displayName: "Jota",
    vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Jota\nitem1.TEL;waid=573011624434:573011624434\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET:cristianescobar.vx@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.instagram.com/dev.criss_vx\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Perú;;;;\nitem4.X-ABLabel:País\nEND:VCARD`
  }];

  // Enviar el contacto (sin preview)
  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: `${list.length} Contacto`,
      contacts: list
    }
  }, { quoted: m });

  // Enviar mensaje de texto con vista enriquecida
  await conn.sendMessage(m.chat, {
    text: '👤 *Este es el contacto de mi creador*',
    contextInfo: {
      externalAdReply: {
        title: 'Hola soy el dueño de Jota Bot',
        body: 'Jota',
        thumbnail: thumb,
        sourceUrl: 'https://wa.me/51927238856?text=¡Hola!,+Vengo+por+los+precios+del+bot.',
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
};

handler.help = ['owner', 'creador'];
handler.tags = ['info'];
handler.command = /^(owner|dueño)$/i;

export default handler;