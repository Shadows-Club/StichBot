export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `*‼️ Tiempo de permanencia finalizado* ⏱️ 
> Contacta a mí propietario para adquirir nuevamente 🐼
> Wa.me//+573155227977*`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}