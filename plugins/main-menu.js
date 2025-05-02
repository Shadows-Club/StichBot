import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, text, isPrems}) => {

  try {
    await m.react ('🐼');

    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);

    const videoUrl = 'https://files.catbox.moe/js58k4.mp4'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

    const str = `ㅤㅤ   ꒰꛱ ͜ ꛱|꛱ ꛱͜ |꛱ ꛱͜ |꛱ ͜ ꛱|꛱ ͜ |୨🫧୧꛱|꛱ ꛱͜ |꛱ ꛱͜ |꛱ ͜ ꛱|꛱ ꛱͜ |꛱ ͜ ꒱
Ꮺ *H𐐫l⍺᳟ ࣪ ᦷᩘ${taguser}*
*Bienvenido/a*  ࣪  ⿻   al   ࣭  ෨
࣭   ✿  *menú  de  JotaBot*  𓈒𓏸      ☁︎    
﹏͜͡ *${saludo}* ﹏͜͡

> ꒰꛱ ͜Desarrollado por *Dev.Criss* +51927238856

*𓈒𓏸🌹 \`Bot Name:\`* ${botname}
*𓈒𓏸🍮 \`Activo:\`* ${uptime}
*𓈒𓏸🥞 \`Usuarios:\`* ${totalreg}
*𓈒𓏸🍟 \`Versión:\`* 1.0.0

> 🍭 Si encuentra un comando con errores no dudes en reportarlo con el Creador
${readMore}

ㅤㅤ *乂 ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs 乂*

╭──•「 *Menús* 」🤍
│🤍${usedPrefix}menunsfw
│🤍 ${usedPrefix}menuowner
│🤍 ${usedPrefix}menulogos
╰──•

╭──•「 *Info* 」☁️
│☁️ ${usedPrefix}totalf
│☁️ ${usedPrefix}grupos
│☁️ ${usedPrefix}sugerir
│☁️ ${usedPrefix}report
│☁️ ${usedPrefix}owner
│☁️ ${usedPrefix}ping
│☁️ ${usedPrefix}uptime
│☁️‎ ${usedPrefix}horario
│☁️‎ ${usedPrefix}precios
╰──•

╭──•「 *Config* 」⚙️
│⚙️ ${usedPrefix}enable *opción*
│⚙️ ${usedPrefix}disable *opción*
│⚙️ ${usedPrefix}on *opción*
│⚙️ ${usedPrefix}off *opción*
│⚙️ ${usedPrefix}manual
╰──•

╭──•「 *Download* 」🫧
│🫧 ${usedPrefix}play *texto*
│🫧 ${usedPrefix}ytmp4doc *texto*
│🫧 ${usedPrefix}ytmp3doc *texto*
│🫧 ${usedPrefix}apk *texto*
│🫧 ${usedPrefix}pinterest *texto*
│🫧 ${usedPrefix}pinvid *url*
│🫧 ${usedPrefix}ytv *url*
│🫧 ${usedPrefix}ytmp3 *url*
│🫧 ${usedPrefix}tiktok *url*
│🫧 ${usedPrefix}instagram *url*
│🫧 ${usedPrefix}facebook *url*
│🫧 ${usedPrefix}mediafire *url*
│🫧 ${usedPrefix}mega *url*
│🫧 ${usedPrefix}playstore *url*
│🫧 ${usedPrefix}xnxxdl *url*
│🫧 ${usedPrefix}xvideosdl *url*
╰──•

╭──•「 *Search* 」🍵
│🍵 ${usedPrefix}aplaysearch *texto*
│🍵 ${usedPrefix}ttsearch *texto*
│🍵 ${usedPrefix}ttsearch2 *texto*
│🍵 ${usedPrefix}ytsearch *texto*
│🍵 ${usedPrefix}spotifysearch *texto*
│🍵 ${usedPrefix}playstoresearch *texto*
│🍵 ${usedPrefix}xnxxsearch *texto*
│🍵 ${usedPrefix}xvsearch *texto*
│🍵 ${usedPrefix}gnula *texto*
│🍵 ${usedPrefix}mercadolibre *texto*
╰──•

╭──•「 *Menús* 」📜
│📜 ${usedPrefix}v4fem *hr + p*
│📜 ${usedPrefix}v4masc *hr + p*
│📜 ${usedPrefix}v4mixto *hr + p*
│📜 ${usedPrefix}v6fem *hr + p*
│📜 ${usedPrefix}v6masc *hr + p*
│📜 ${usedPrefix}v6mixto *hr + p*
╰──•

╭──•「 *Frases* 」💞
│💞 ${usedPrefix}piropo
│💞 ${usedPrefix}consejo
│💞 ${usedPrefix}fraseromantica
╰──•

╭──•「 *Converters* 」🌷
│🌷 ${usedPrefix}tourl *img*
│🌷 ${usedPrefix}tourl *aud*
│🌷 ${usedPrefix}toptt *aud*
│🌷 ${usedPrefix}toptt *vid*
│🌷 ${usedPrefix}tourl *vid*
│🌷 ${usedPrefix}tomp3 *vid*
│🌷 ${usedPrefix}toimg *sticker*
╰──•

╭──•「 *Tools* 」🛠️
│🛠️ ${usedPrefix}clima *texto*
│🛠️ ${usedPrefix}readmore *texto*
│🛠️ ${usedPrefix}read *texto*
│🛠️ ${usedPrefix}fake *texto + user + texto*
│🛠️ ${usedPrefix}traducir *idioma + texto*
│🛠️ ${usedPrefix}hd *img*
│🛠️ ${usedPrefix}whatmusic *aud*
│🛠️ ${usedPrefix}whatmusic *vid*
│🛠️ ${usedPrefix}flag *país*
│🛠️ ${usedPrefix}inspect *link*
│🛠️ ${usedPrefix}inspeccionar *link*
│🛠️ ${usedPrefix}nuevafotochannel
│🛠️ ${usedPrefix}nosilenciarcanal
│🛠️ ${usedPrefix}silenciarcanal
│🛠️ ${usedPrefix}seguircanal
│🛠️ ${usedPrefix}avisoschannel
│🛠️ ${usedPrefix}resiviravisos
│🛠️ ${usedPrefix}eliminarfotochannel
│🛠️ ${usedPrefix}reactioneschannel
│🛠️ ${usedPrefix}reaccioneschannel
│🛠️ ${usedPrefix}nuevonombrecanal
│🛠️ ${usedPrefix}nuevadescchannel
╰──•

╭──•「 *Groups* 」🌿
│🌿 ${usedPrefix}add *número*
│🌿 ${usedPrefix}grupo *abrir / cerrar*
│🌿 ${usedPrefix}grouptime *tiempo*
│🌿 ${usedPrefix}notify *texto*
│🌿 Aviso *texto*
│🌿 Admins *texto*
│🌿 ${usedPrefix}todos *texto*
│🌿 ${usedPrefix}setwelcome *texto*
│🌿 ${usedPrefix}groupdesc *texto*
│🌿 ${usedPrefix}setbye *texto*
│🌿 ${usedPrefix}promote *@tag*
│🌿 ${usedPrefix}demote *@tag*
│🌿 ${usedPrefix}kick *@tag*
│🌿 ${usedPrefix}mute *@tag*
│🌿 ${usedPrefix}inactivos *opción*
│🌿 ${usedPrefix}tagnum *prefix*
│🌿 ${usedPrefix}link
│🌿 ${usedPrefix}fantasmas
╰──•

↷✦; \`EFFECTS\` ❞ 🍃︵᷼ 
⠞🍃੭‎ ${usedPrefix}bass *vid*
⠞🍃੭‎ ${usedPrefix}blown *vid*
⠞🍃੭‎ ${usedPrefix}deep *vid*
⠞🍃੭‎ ${usedPrefix}earrape *vid*
⠞🍃੭‎ ${usedPrefix}fast *vid*
⠞🍃੭‎ ${usedPrefix}smooth *vid*
⠞🍃੭‎ ${usedPrefix}tupai *vid*
⠞🍃੭‎ ${usedPrefix}nightcore *vid*
⠞🍃੭‎ ${usedPrefix}reverse *vid*
⠞🍃੭‎ ${usedPrefix}robot *vid*
⠞🍃੭‎ ${usedPrefix}slow *vid*
⠞🍃੭‎ ${usedPrefix}squirrel *vid*
⠞🍃੭‎ ${usedPrefix}chipmunk *vid*
⠞🍃੭‎ ${usedPrefix}reverb *vid*
⠞🍃੭‎ ${usedPrefix}chorus *vid*
⠞🍃੭‎ ${usedPrefix}flanger *vid*
⠞🍃੭‎ ${usedPrefix}distortion *vid*
⠞🍃੭‎ ${usedPrefix}pitch *vid*
⠞🍃੭‎ ${usedPrefix}highpass *vid*
⠞🍃੭‎ ${usedPrefix}lowpass *vid*
⠞🍃੭‎ ${usedPrefix}underwater *vid*

↷✦; \`FUN\` ❞ 🥥︵᷼ 
⠞🥥੭‎ ${usedPrefix}gay *@tag*
⠞🥥੭‎ ${usedPrefix}lesbiana *@tag*
⠞🥥੭‎ ${usedPrefix}pajero *@tag*
⠞🥥੭‎ ${usedPrefix}pajera *@tag*
⠞🥥੭‎ ${usedPrefix}puto *@tag*
⠞🥥੭‎ ${usedPrefix}puta *@tag*
⠞🥥੭‎ ${usedPrefix}manco *@tag*
⠞🥥੭‎ ${usedPrefix}manca *@tag*
⠞🥥੭‎ ${usedPrefix}rata *@tag*
⠞🥥੭‎ ${usedPrefix}prostituto *@tag*
⠞🥥੭‎ ${usedPrefix}prostituta *@tag*
⠞🥥੭‎ ${usedPrefix}doxear *@tag*
⠞🥥੭‎ ${usedPrefix}jalamela *@tag*
⠞🥥੭‎ ${usedPrefix}simi *texto*
⠞🥥੭‎ ${usedPrefix}pregunta *texto*
⠞🥥੭‎ ${usedPrefix}genio *texto*
⠞🥥੭‎ ${usedPrefix}top
⠞🥥੭‎ ${usedPrefix}sorteo
⠞🥥੭‎ ${usedPrefix}piropo
⠞🥥੭‎ ${usedPrefix}chiste
⠞🥥੭‎ ${usedPrefix}facto
⠞🥥੭‎ ${usedPrefix}verdad
⠞🥥੭‎ ${usedPrefix}pareja
⠞🥥੭‎ ${usedPrefix}parejas
⠞🥥੭‎ ${usedPrefix}love
⠞🥥੭‎ ${usedPrefix}personalidad

↷✦; \`GAME\` ❞ 🎋︵᷼ 
⠞🎋੭‎ ${usedPrefix}pregunta *texto*
⠞🎋੭‎ ${usedPrefix}ttt *texto*
⠞🎋੭‎ ${usedPrefix}ptt *opción*
⠞🎋੭‎ ${usedPrefix}delttt
⠞🎋੭‎ ${usedPrefix}acertijo

↷✦; \`ANIME\` ❞ 🌾︵᷼ 
⠞🌾੭‎ ${usedPrefix}messi
⠞🌾੭‎ ${usedPrefix}cr7

↷✦; \`GIFS NSFW\` ❞ 🔥︵᷼ 
⠞🔥੭‎ ${usedPrefix}violar *@tag*
⠞🔥੭‎ ${usedPrefix}follar *@tag*
⠞🔥੭‎ ${usedPrefix}anal *@tag*
⠞🔥੭‎ ${usedPrefix}coger *@tag*
⠞🔥੭‎ ${usedPrefix}coger2 *@tag*
⠞🔥੭‎ ${usedPrefix}penetrar *@tag*
⠞🔥੭‎ ${usedPrefix}sexo *@tag*
⠞🔥੭‎ ${usedPrefix}rusa *@tag*
⠞🔥੭‎ ${usedPrefix}sixnine *@tag*
⠞🔥੭‎ ${usedPrefix}pies *@tag*
⠞🔥੭‎ ${usedPrefix}mamada *@tag*
⠞🔥੭‎ ${usedPrefix}lickpussy *@tag*
⠞🔥੭‎ ${usedPrefix}grabboobs *@tag*
⠞🔥੭‎ ${usedPrefix}suckboobs *@tag*
⠞🔥੭‎ ${usedPrefix}cum *@tag*
⠞🔥੭‎ ${usedPrefix}fap *@tag*
⠞🔥੭‎ ${usedPrefix}manosear *@tag*
⠞🔥੭‎ ${usedPrefix}lesbianas *@tag*

↷✦; \`STICKERS\` ❞ 🦋︵᷼ 
⠞🦋੭‎ ${usedPrefix}sticker *img*
⠞🦋੭‎ ${usedPrefix}sticker *vid*
⠞🦋੭‎ ${usedPrefix}brat *texto*
⠞🦋੭‎ ${usedPrefix}qc *texto*
⠞🦋੭‎ ${usedPrefix}dado

↷✦; \`RPG\` ❞ 💸︵᷼ 
⠞💸੭‎ ${usedPrefix}minar
⠞💸੭‎ ${usedPrefix}cofre
⠞💸੭ ${usedPrefix}slut
⠞💸੭ ${usedPrefix}nivel
⠞💸੭ ${usedPrefix}ruleta

↷✦; \`REGISTRO\` ❞ ☁️︵᷼ 
⠞☁️੭ ${usedPrefix}perfil
⠞☁️੭ ${usedPrefix}reg
⠞☁️੭ ${usedPrefix}unreg

↷✦; \`OWNER\` ❞ 👑︵᷼ 
⠞👑੭ ${usedPrefix}salir
⠞👑੭ ${usedPrefix}update
⠞👑੭ ${usedPrefix}blocklist
⠞👑੭ ${usedPrefix}grouplist
⠞👑੭ ${usedPrefix}restart
⠞👑੭ ${usedPrefix}join
⠞👑੭ ${usedPrefix}chetar
⠞👑੭ ${usedPrefix}unbanuser`.trim();

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

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.fail = null;

export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}