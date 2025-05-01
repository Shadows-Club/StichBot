import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, text, isPrems}) => {

  try {
    await m.react ('🐼');

    const videoUrl = 'https://files.catbox.moe/js58k4.mp4'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

    const str = `> 👋🏻 ¡Hola!, ${taguser}

\`\`\`${fechaHora}\`\`\`
`.trim();

    await conn.sendMessage(m.chat, {
      video: { url: videoUrl },
      caption: str,
      mentions: [m.sender],
      gifPlayback: true,
      contextInfo: global.rcanal.contextInfo  // Aquí se pasa directamente el contextInfo
    });
  } catch (e) {
    conn.reply(m.chat, `*🍂 Error al enviar el video.*\n${e}`, m);
  }
};

/*
      await conn.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: str,
            mentions: [m.sender],
            gifPlayback: true
        }, { quoted: rcanal })

//await conn.sendMessage(m.chat, { react: { text: '😇', key: m.key } });

  } catch (e) {
    conn.reply(m.chat,`*🍂 Error al enviar el video.*\n${e}`, m);
  }
};*/

handler.command = /^(xyz)$/i;
handler.fail = null;

export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}