import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, text, isPrems}) => {

  try {
    //const img = './media/menus/Menu2.jpg';
    const videoUrl = 'https://files.catbox.moe/js58k4.mp4'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

    const str = `> 👋🏻 ¡Hola!, ${taguser}

\`\`\`${fechaHora}\`\`\`
`.trim();
/*
    conn.sendMessage(m.chat, { image: { url: img }, caption: str, mentions: [m.sender] }, { quoted: fkontak });

await conn.sendMessage(m.chat, { react: { text: '🐼', key: m.key } });*/

      await conn.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: str,
            mentions: [m.sender],
            gifPlayback: true
        }, { quoted: fkontak })

//await conn.sendMessage(m.chat, { react: { text: '😇', key: m.key } });

  } catch {
    conn.reply(m.chat,'*🍂 Error al enviar el video.*\n\n${e}', m);
  }
};

handler.command = /^(xyz)$/i;
handler.fail = null;

export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}