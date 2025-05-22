let handler = async (m, { conn, text, isROwner, isOwner }) => {

if (text) {
global.db.data.chats[m.chat].sWelcome = text
conn.reply(m.chat, '*✅ La bienvenida del grupo ha sido configurada*', m)

} else {
    conn.reply(m.chat, `*${xgc} ¡Escribe el mensaje de bienvenida!*\n✎ *Puedes usar:*\n\n- *\`@user\`* (Mención al Usuario)\n- *\`@group\`* (Nombre del Grupo)\n- *\`@desc\`* (Descripción del Grupo)\n\n> 👁️ Los @ son opcionales`)
}
}
handler.help = ['setwelcome @user + texto']
handler.tags = ['group']
handler.command = ['setwelcome', 'bienvenida'] 
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler