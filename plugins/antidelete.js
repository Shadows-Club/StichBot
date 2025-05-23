const tempMessages = {}

// Cargar mensaje guardado
function loadMessage(jid, id = null) {
  if (jid && !id) {
    // Se pasó solo el ID
    id = jid
    for (const msgs of Object.values(tempMessages)) {
      const found = msgs.find(m => m.key?.id === id)
      if (found) return found
    }
  } else {
    jid = jid?.decodeJid?.()
    if (!tempMessages[jid]) return null
    return tempMessages[jid].find(m => m.key.id === id) || null
  }
  return null
}

export default function antideletePlugin(conn) {
  // Guardar mensajes entrantes si está activo el antidelete
  conn.ev.on('messages.upsert', ({ messages }) => {
    for (const msg of messages) {
      const chatId = msg.key.remoteJid
      const chatSettings = global.db.data.chats[chatId] || {}

      if (chatSettings.delete) {
        if (!tempMessages[chatId]) tempMessages[chatId] = []

        // Evitar duplicados
        if (!tempMessages[chatId].some(m => m.key.id === msg.key.id)) {
          tempMessages[chatId].push(msg)
          if (tempMessages[chatId].length > 50) tempMessages[chatId].shift()
        }
      }
    }
  })

  // Manejar eliminaciones de mensajes
  conn.ev.on('messages.update', async updates => {
    for (const update of updates) {
      if (update.update?.messageStubType !== 0x08) continue // Eliminación

      const { key } = update
      if (!key || key.fromMe) continue

      const msg = conn.serializeM(loadMessage(key.id))
      if (!msg) continue

      const chat = global.db.data.chats[msg.chat] || {}
      if (!chat.delete || !msg.isGroup) continue

      const participant = key.participant || msg.sender
      const antideleteMessage = `╭•┈•〘❌ 𝗔𝗡𝗧𝗜 𝗗𝗘𝗟𝗘𝗧𝗘 ❌〙•┈• ◊
│❒ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢:
│• @${participant.split`@`[0]}
│
│❒ 𝗔𝗰𝗮𝗯𝗮 𝗱𝗲 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝘂𝗻 𝗺𝗲𝗻𝘀𝗮𝗷𝗲
│𝗿𝗲𝗲𝗻𝘃𝗶𝗮𝗻𝗱𝗼... ⏱️
╰•┈•〘❌ 𝗔𝗡𝗧𝗜 𝗗𝗘𝗟𝗘𝗧𝗘 ❌〙•┈• ◊`.trim()

      await conn.sendMessage(msg.chat, { text: antideleteMessage, mentions: [participant] }, { quoted: msg })
      await conn.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))

      // Eliminar de la caché temporal
      tempMessages[msg.chat] = tempMessages[msg.chat].filter(m => m.key.id !== key.id)
    }
  })

  // Limpieza automática de mensajes antiguos (más de 10 minutos)
  setInterval(() => {
    const now = Date.now()
    for (const chatId in tempMessages) {
      tempMessages[chatId] = tempMessages[chatId].filter(msg => {
        const timestamp = msg.messageTimestamp ? msg.messageTimestamp.low * 1000 : now
        return (now - timestamp) < 1000 * 60 * 10
      })
    }
  }, 1000 * 60 * 5)
}