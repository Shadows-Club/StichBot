let handler = async (m, { conn }) => {

  await conn.sendMessage(m.chat, {
    react: {
      text: '⛅',
      key: m.key
    }
  });

  // Que miras causa gaaaa
  let groupName = '';
  if (m.isGroup) {
    try {
      const metadata = await conn.groupMetadata(m.chat);
      groupName = metadata.subject || 'GRUPO';
    } catch (e) {
      groupName = 'GRUPO';
    }
  }

  const fecha = new Date().toLocaleDateString('es-PE', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

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
┊ 
╰─────────────╯
✨ *${groupName.toUpperCase()}* ✨`;

  // Enviar el mensaje
  if (m.isGroup) {
    await conn.sendMessage(m.chat, { text: gdc }, { quoted: fkontak });
  }
};

handler.help = ['guerra'];
handler.tags = ['freefire'];
handler.command = ['gdc', 'guerradeclanes'];
handler.admin = true;
handler.botAdmin = false;
handler.group = true;

export default handler;