import fetch from 'node-fetch';
let handler = async (m, { conn }) => {

 await m.react('📑');

  const gdc = `
Fecha: ${fechaHora}
\`\`\`₊ PARTICIPACIÓN EN GUERRA DE CLANES🔥\`\`\`
Hora:
⏰🇲🇽: 6 PM
⏰🇨🇴: 7 PM

» `PARTICIPANTES`:
ㅤ
┊👑 ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊ 
┊👑 ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊
┊👑 ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊
┊👑 ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊ 
┊👑 ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊ 
┊👑 ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊ 
┊👑 ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊ 
┊👑 ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊ 
┊👑 ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊ 
┊👑 ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊⚜️ ➤ 
┊ 
┊ 
╰─────────────╯
                  ✨ *JOTA*✨`;

  if (m.isGroup) {
     conn.sendMessage(m.chat, { text: gdc });
  }
};

handler.help = ['guerra'];
handler.tags = ['freefire'];
handler.command = ['gdc', 'guerradeclanes'];
handler.admin = true;
handler.botAdmin = false;
handler.group = true;

export default handler;