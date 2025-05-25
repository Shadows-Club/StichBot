import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, text}) => {

  try {
    await m.react ('🖼️');
    const videoUrl = ''
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

    const str = `*Hola ${taguser} este es el Menú Logos*

╭──•「 *Logos* 」📑
ര ׄ 🖼️˚ .balogo *texto*
ര ׄ 🖼️˚ .logocorazon *texto*
ര ׄ 🖼️˚ .logochristmas  *texto*
ര ׄ 🖼️˚ .logopareja *texto*
ര ׄ 🖼️˚ .logoglitch *texto*
ര ׄ 🖼️˚ .logosad *texto*
ര ׄ 🖼️˚ .logogaming *texto*
ര ׄ 🖼️˚ .logosolitario *texto*
ര ׄ 🖼️˚ .logodragonball *texto*
ര ׄ 🖼️˚ .logoneon *texto*
ര ׄ 🖼️˚ .logogatito *texto*
ര ׄ 🖼️˚ .logochicagamer *texto*
ര ׄ 🖼️˚ .logonaruto *texto*
ര ׄ 🖼️˚ .logofuturista *texto*
ര ׄ 🖼️˚ .logonube *texto*
ര ׄ 🖼️˚ .logoangel *texto*
ര ׄ 🖼️˚ .logomurcielago *texto*
ര ׄ 🖼️˚ .logocielo *texto*
ര ׄ 🖼️˚ .logograffiti3d *texto*
ര ׄ 🖼️˚ .logomatrix *texto*
ര ׄ 🖼️˚ .logohorror *texto*
ര ׄ 🖼️˚ .logoalas *texto*
ര ׄ 🖼️˚ .logoarmy *texto*
ര ׄ 🖼️˚ .logopubg *texto*
ര ׄ 🖼️˚ .logopubgfem *texto*
ര ׄ 🖼️˚ .logolol *texto*
ര ׄ 🖼️˚ .logoamon *texto*gus
ര ׄ 🖼️˚ .logovideopubg *texto*
ര ׄ 🖼️˚ .logovideotiger *texto*
ര ׄ 🖼️˚ .logovideointro *texto*
ര ׄ 🖼️˚ .logovideogaming *texto*
ര ׄ 🖼️˚ .logoguerrero *texto*
ര ׄ 🖼️˚ .logoportadaplayer *texto*
ര ׄ 🖼️˚ .logoportadaff *texto*
ര ׄ 🖼️˚ .logoportadapubg *texto*
ര ׄ 🖼️˚ .logoportadacounter *texto*

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