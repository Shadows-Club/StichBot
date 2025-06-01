const dReason = 'Sin motivo';
const msgtext = text || dReason;
const sdms = msgtext.replace(/@[^ ]+/g, '').trim() || dReason;

if (!user.warn) user.warn = 0;
user.warn += 1;

await m.reply(`*@${who.split`@`[0]}* Recibió una advertencia en este grupo!\nMotivo: ${sdms}\n*Advertencias: ${user.warn}/3*`, null, {
  mentions: [who]
});

if (user.warn >= 3) {
  user.warn = 0;
  await m.reply(`${emoji} ¡Te lo advertí varias veces!\n*@${who.split`@`[0]}* superaste las *3* advertencias, ahora serás eliminado/a.`, null, {
    mentions: [who]
  });
  await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
}