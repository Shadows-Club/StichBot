import axios from 'axios';

const handler = async (m, { conn, text, usedPrefix, command }) => {
    const input = text || m.quoted?.text;
    if (!input) throw `✏️ Usa: *${usedPrefix + command} tu texto* o responde a un mensaje.`;

    const url = `https://fastrestapis.fasturl.cloud/maker/animbrat?text=${encodeURIComponent(input)}&mode=image`;

    try {
        const { data } = await axios.get(url, { responseType: 'arraybuffer' });
        await conn.sendMessage(m.chat, {
            sticker: { url }, // O usa buffer: data si tu bot acepta buffers
        }, { quoted: m });
    } catch (e) {
        throw '❌ Error al generar el sticker.';
    }
};

handler.help = ['animbrat <texto>'];
handler.tags = ['sticker'];
handler.command = ['animbrat'];

export default handler;