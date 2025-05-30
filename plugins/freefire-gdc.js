let handler = async (m, { conn }) => {

  await conn.sendMessage(m.chat, {
    react: {
      text: '📑',
      key: m.key
    }
  });

  const fecha = new Date().toLocaleDateString('es-PE', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  // Mensaje de guerra de clanes
  const gdc = `
Fecha: ⚘ ${fecha}
\`\`\`₊ PARTICIPACIÓN EN GUERRA DE CLANES🔥\`\`\`
Hora:
⏰🇲🇽: 6 PM
⏰🇨🇴: 7 PM
⚘
» PARTICIPANTES:
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
    await conn.sendMessage(m.chat, { text: gdc, mentions: [] }, { quoted: m });
  }
};

handler.help = ['guerra'];
handler.tags = ['freefire'];
handler.command = ['gdc', 'guerradeclanes'];
handler.admin = true;
handler.botAdmin = false;
handler.group = true;

export default handler;