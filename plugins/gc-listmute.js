import fs from 'fs';

let mutedUsers = new Set();

// Cargar usuarios muteados desde el archivo
try {
  const data = fs.readFileSync('./muted-users.json', 'utf-8');
  mutedUsers = new Set(JSON.parse(data));
} catch (e) {
  mutedUsers = new Set();
}

let handler = async (m, { conn, command, isAdmin, isBotAdmin }) => {
  if (!isBotAdmin) return conn.reply(m.chat, '🍭 El bot necesita ser administrador.', m);
  if (!isAdmin) return conn.reply(m.chat, '🍭 Solo los administradores pueden usar este comando.', m);

  if (command === "listmute") {
    if (mutedUsers.size === 0) {
      return conn.reply(m.chat, '🍭 No hay usuarios muteados en este grupo.', m);
    }

    let muteList = [...mutedUsers].map(user => `@${user.split('@')[0]}`).join('\n');
    conn.reply(m.chat, `🍭 *Usuarios muteados en este grupo:*\n${muteList}`, m, { mentions: [...mutedUsers] });
  }
};

handler.help = ['listmute'];
handler.tags = ['grupo'];
handler.command = /^(listmute)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;