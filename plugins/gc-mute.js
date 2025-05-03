/*import fetch from 'node-fetch';

const handler = async (m, { conn, command, text, isAdmin, participants }) => {
    const userId = m.mentionedJid && m.mentionedJid[0] 
                    ? m.mentionedJid[0] 
                    : m.quoted 
                        ? m.quoted.sender 
                        : text;

    if (!isAdmin) throw '🙀 *Solo un administrador puede ejecutar este comando*';
    if (!userId) throw '🐈 *Menciona a la persona que deseas mutear o desmutear*';

    const user = global.db.data.users[userId] || {};
    user.mute = user.mute || false;

    if (command === 'mute') {
        if (user.mute) throw '🐈 *Este usuario ya ha sido muteado*';
        user.mute = true;
        await conn.reply(m.chat, '🐈 *Este usuario ha sido muteado y sus mensajes serán eliminados*', m);
    }

    if (command === 'unmute') {
        if (!user.mute) throw '🐈 *Este usuario no está muteado*';
        user.mute = false;
        await conn.reply(m.chat, '🐈 *Este usuario ha sido desmuteado*', m);
    }

    // Guardar el estado en la base de datos
    global.db.data.users[userId] = user;
};

// Escuchar y eliminar los mensajes de usuarios muteados en el mismo handler
handler.before = async (m, { conn }) => {
    const sender = m.sender;
    const isMuted = global.db.data.users[sender]?.mute;

    if (isMuted && !m.key.fromMe) {
        try {
            await conn.sendMessage(m.chat, { delete: m.key });
        } catch (e) {
            console.error('Error al eliminar mensaje:', e);
        }
    }
};

handler.command = ['mute', 'unmute'];
handler.admin = true;
handler.botAdmin = true;
handler.rowner = true;

export default handler;*/

let mutedUsers = new Set();

let handler = async (m, { conn, usedPrefix, command, isAdmin, isBotAdmin }) => {
    if (!isBotAdmin) return conn.reply(m.chat, `${emojis} El bot necesita ser administrador.', m);
    if (!isAdmin) return conn.reply(m.chat, `${emojis} Solo los administradores pueden usar este comando.`, m);

    let user;
    if (m.quoted) {
        user = m.quoted.sender;
    } else {
        return conn.reply(m.chat, `${emojis} Responde al mensaje del usuario que quieres mutear.`, m);
    }

    const ownerBot = global.owner[0][0] + '@s.whatsapp.net';

    if (user === ownerBot) {
        return conn.reply(m.chat, '${emojis} No puedo mutar al propietario del bot.', m);
    }

    if (command === "mute") {
        mutedUsers.add(user);
        conn.reply(m.chat, `✅ *Usuario muteado:* @${user.split('@')[0]}`, m, { mentions: [user] });
    } else if (command === "unmute") {
        mutedUsers.delete(user);
        conn.reply(m.chat, `✅ *Usuario desmuteado:* @${user.split('@')[0]}`, m, { mentions: [user] });
    }
};

handler.before = async (m, { conn }) => {
    if (mutedUsers.has(m.sender) && m.mtype !== 'stickerMessage') {
        try {
            await conn.sendMessage(m.chat, { delete: m.key });
        } catch (e) {
            console.error(e);
        }
    }
};

handler.help = ['mute', 'unmute'];
handler.tags = ['grupo'];
handler.command = /^(mute|unmute)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;