
import { execSync } from 'child_process'

let handler = async (m, { conn, text }) => {
  await m.react('🕓') // Reacción inicial

  try {
    let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : '')).toString().trim() // Ejecuta git pull y limpia espacios
    let mensaje = stdout.includes('Already up to date') 
      ? '*☁️ El repositorio del bot está actualizado.*' 
      : '*☕ \`Repositorio Fixed\`*\n\n' + stdout

    await conn.reply(m.chat, mensaje, m) // Envía el mensaje con el resultado
    await m.react('✅') // Reacción de éxito
  } catch (err) {
    await conn.reply(m.chat, `❌ Error al actualizar:\n${err.message}`, m) // Manejo de error
  }
}

handler.help = ['update']
handler.tags = ['owner']
handler.command = ['update', 'actualizar', 'fix', 'fixed'] 
handler.rowner = true

export default handler