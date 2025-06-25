import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true

  const chat = global.db.data.chats[m.chat]
  const jid = m.messageStubParameters?.[0]
  if (!chat?.bienvenida || !jid) return

  let pp = 'https://files.catbox.moe/hmyrqs.jpg'
  try {
    pp = await conn.profilePictureUrl(jid, 'image')
  } catch {}
  const img = await (await fetch(pp)).buffer()

  const userTag = '@' + jid.split('@')[0]
  const group = groupMetadata?.subject || 'este grupo'

  const bienvenida = `┌─★ *${global.botname}* \n│「 Bienvenido 」\n└┬★ 「 ${userTag} 」\n   │✑  Bienvenido a\n   │✑  ${group}\n   └───────────────┈ ⳹\n\n${global.club}`
  const bye = `┌─★ *${global.botname}* \n│「 ADIOS 👋 」\n└┬★ 「 ${userTag} 」\n   │✑  Se fue\n   │✑ Jamás te quisimos aquí\n   └───────────────┈ ⳹`

  if (m.messageStubType === WAMessageStubType.ADD) {
    await conn.sendLuffy(m.chat, global.botname, global.textbot, bienvenida, img, img, global.canal, global.estilo)
  }

  if ([WAMessageStubType.REMOVE, WAMessageStubType.LEAVE].includes(m.messageStubType)) {
    await conn.sendLuffy(m.chat, global.botname, global.textbot, bye, img, img, global.canal, global.estilo)
  }
}