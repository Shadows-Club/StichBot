const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `*\`AVISO:\`* ${pesan}`;
  let teks = `*INVOQUEISHON* 🫩\n*GAYS:* ${participants.length}\n\n ${oi}\n\nෆ *@LID*\n`;
  for (const mem of participants) {
    teks += `🐀 @${mem.id.split('@')[0]}\n`;
  }
  teks += `> ${dev}`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)},
{quoted: rcanal});
};
handler.help = ['todos *<txt>*'];
handler.tags = ['gc'];
handler.command = /^(tex)$/i;
handler.admin = true;
handler.group = true;
export default handler;