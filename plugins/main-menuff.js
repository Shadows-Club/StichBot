import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, text}) => {

  try {
    await m.react ('🎮');
    const videoUrl = 'https://files.catbox.moe/6ftr4u.mp4'
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

    const str = `*Hola ${taguser} este es el menú Free Fire*

╭──•「 *Listas* 」📑
│📑 ${usedPrefix}v4fem
│📑 ${usedPrefix}v6fem
│📑 ${usedPrefix}v4masc
│📑 ${usedPrefix}v6masc
│📑 ${usedPrefix}v4mixto
│📑 ${usedPrefix}v6mixto
│📑 ${usedPrefix}inmasc4
│📑 ${usedPrefix}infem4
│📑 ${usedPrefix}inmixto4
│📑 ${usedPrefix}inmasc6
│📑 ${usedPrefix}infem6
│📑 ${usedPrefix}inmixto6
│📑 ${usedPrefix}gdc
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

handler.command = /^(menuff|comandosff|ffmenu)$/i;
handler.fail = null;

export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}