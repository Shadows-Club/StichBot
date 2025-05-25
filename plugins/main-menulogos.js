import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, text}) => {

  try {
    await m.react ('🖼️');
    const videoUrl = ''
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

    const str = `*Hola ${taguser} este es el Menú Logos*

╭──•「 *Logos* 」📑
╰──•
`.trim();

      await conn.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: str,
            mentions: [m.sender],
            gifPlayback: true
        }, { quoted: fkontak })

  } catch (e) {
    conn.reply(m.chat,`*❌ Error al enviar el menú.*\n${e}`, m);
  }
};

handler.command = /^(menulogos|menu2)$/i;
handler.fail = null;

export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}