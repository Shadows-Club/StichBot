const handler = async (m, { conn }) => {

  conn.sendMessage(m.chat, {
text: `https://chat.whatsapp.com/DXA0VmYf3p9GDMjJUz8Mik`,
}, { quoted: fkontak });
};
handler.command = ['comprar'];
export default handler;