const handler = async (m, { conn }) => {
  if (!m.isGroup) throw '🚫 Este comando solo se puede usar en grupos.'

  const metadata = await conn.groupMetadata(m.chat)
  const lid = metadata?.lid || null

  const texto = lid
    ? `🕵️ *Privacidad LID Activa*\n\n✅ En este grupo los números de los participantes están ocultos.`
    : `🔓 *Privacidad LID Inactiva*\n\n❌ Los números de teléfono son visibles para los participantes.`

  await conn.sendMessage(m.chat, { text: texto }, { quoted: m })
}

handler.command = /^lid$/i
handler.group = true
handler.register = true

export default handler