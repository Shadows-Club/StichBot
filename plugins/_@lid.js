/*const handler = async (m, { conn }) => {
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

export default handler*/

import enableLogCapture, { logs, disable } from '../lib/logs.js';

enableLogCapture(200); // Captura hasta 200 logs por defecto

let handler = async (m, { conn, usedPrefix, command }) => {
  // Solo propietarios pueden usar el comando
  if (!global.owner.includes(m.sender)) {
    return m.reply('⛔ Este comando es solo para el creador del bot.');
  }

  let output = logs().toString();
  if (!output.trim()) {
    return m.reply('📭 No hay logs registrados todavía.');
  }

  // Limitar a los últimos 4000 caracteres (máx recomendados por WhatsApp)
  if (output.length > 4000) output = output.slice(-4000);

  await m.reply(`📄 Últimos logs capturados:\n\n${output}`);
};

handler.help = ['logs'];
handler.tags = ['owner'];
handler.command = /^logs$/i;
handler.rowner = true; // Solo dueño real

export default handler;