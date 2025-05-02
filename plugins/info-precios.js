const handler = async (m, { conn }) => {
const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

  conn.sendMessage(m.chat, {
text: `🍒 ¡Bienvenido! ${taguser}\n\n¿Deseas tener Bot Permanente o Personalizado?\n¡Nosotros te podemos a ayudar hacerlo realidad!\nSomos la comunidad Nova Spark & estamos aquí para ofrecerte el mejor servicio & calidad.\nPersonaliza tu experiencia de WhatsApp como nunca antes con el mejor bot \`Shadow Ultra\` oficial de la comunidad.\n\n*\`PRECIOS DEL BOT\`*\n\n\`\`\`PERMAMENTE\`\`\`\n> *ᴜɴ ɢʀᴜᴘᴏ:*\n- 𝟦 🇵🇪/𝟣𝟥𝟢𝟢 🇦🇷\n> *ᴛʀᴇs ɢʀᴜᴘᴏs:*\n- 𝟪 🇵🇪/𝟤𝟨𝟢𝟢 🇦🇷\n> *sᴇɪs ɢʀᴜᴘᴏs:*\n- 𝟣𝟧 🇵🇪/𝟧𝟢𝟢𝟢 🇦🇷\n\n\`\`\`MENSUAL\`\`\`\n- 𝟤 🇵🇪/𝟫𝟢𝟢 🇦🇷\n\n\`\`\`PERSONALIZADO\`\`\`\n- 𝟥𝟧 🇵🇪/𝟣𝟢𝟢𝟢𝟢 🇦🇷\n\n\`\`\`PRUEBA & COMPRA\`\`\`\nhttps://chat.whatsapp.com/FCS6htvAmlT7nq006lxU4I\n\n> ${dev}`,
mentions: [m.sender]
}, { quoted: fkontak });
};
handler.command = ['precios2', 'comprar2', 'adquirir2', 'personalizado'];
export default handler;