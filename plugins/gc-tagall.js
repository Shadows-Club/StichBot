const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `*\`AVISO:\`* ${pesan}`;
  let teks = `𝗗𝗘𝗦𝗣𝗜𝗘𝗥𝗧𝗘𝗡 𝗣𝗟𝗔𝗡𝗧𝗔𝗦 🌱\n*INTEGRANTES:* ${participants.length}\n\n ${oi}\n\nෆ *ETIQUETAS*\n`;
  for (const mem of participants) {
    teks += `🐻 @${mem.id.split('@')[0]}\n`;
  }
  teks += `> ${dev}`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['todos *<txt>*'];
handler.tags = ['gc'];
handler.command = /^(tagall|t|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;