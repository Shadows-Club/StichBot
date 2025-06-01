const handler = async (m, { conn, text, usedPrefix, command }) => {
  const emoji = '⚠️'; // Puedes personalizar esto
  const dReason = 'Sin motivo';
  const msgtext = text || dReason;
  const warntext = `${emoji} Etiquete a una persona o responda a un mensaje del grupo para advertir al usuario.`;

  let who;

  if (m.isGroup) {
    who = m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.quoted
      ? m.quoted.sender
      : null;
  } else {
    who = m.chat;
  }

  if (!who) {
    return m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext) });
  }

  // Asegurar existencia de datos del usuario
  global.db.data.users[who] ??= {};
  const user = global.db.data.users[who];

  // Inicializar warn si no existe
  if (typeof user.warn !== 'number') user.warn = 0;

  // Prevenir advertencias al owner
  const usuario = conn.user.jid.split('@')[0] + '@s.whatsapp.net';
  for (let i = 0; i < global.owner.length; i++) {
    const ownerNumber = global.owner[i][0];
    const ownerID = ownerNumber + '@s.whatsapp.net';
    if (who === ownerID) {
      await conn.reply(m.chat, `${emoji} No puedes advertir al propietario.`, m, { mentions: [ownerID] });
      return;
    }
  }

  // Incrementar advertencia
  user.warn += 1;

  const cleanReason = msgtext.replace(/@\d+-?\d* /g, '');

  await m.reply(
    `*@${who.split('@')[0]}* recibió una advertencia en este grupo!\n` +
    `*Motivo:* ${cleanReason}\n` +
    `*Advertencias:* ${user.warn}/3`,
    null,
    { mentions: [who] }
  );

  if (user.warn >= 3) {
    user.warn = 0;
    await m.reply(
      `${emoji} ¡Te lo advertí varias veces!\n*@${who.split('@')[0]}* superaste las *3* advertencias, ahora serás eliminado/a.`,
      null,
      { mentions: [who] }
    );
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
  }

  return true;
};

handler.command = ['advertir', 'advertencia', 'warn', 'warning'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;