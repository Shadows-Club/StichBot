import fetch from 'node-fetch';

let handler = async (m, { conn, command, isAdmin, isBotAdmin }) => {
    const emojis = '🚫';
    const chatId = m.chat;

    if (!isBotAdmin) return conn.reply(chatId, `${emojis} El bot necesita ser administrador.`, m);
    if (!isAdmin) return conn.reply(chatId, `${emojis} Solo los administradores pueden usar este comando.`, m);

    let muted = loadMuted(chatId);

    if (command === 'listmute') {
        if (muted.length === 0) return conn.reply(chatId, `${emojis} No hay usuarios muteados en este grupo.`, m);
        let list = muted.map(u => `• @${u.split('@')[0]}`).join('\n');
        return conn.reply(chatId, `📄 *Usuarios muteados en este grupo:*\n\n${list}`, m, { mentions: muted });
    }

    let user;
    if (m.quoted) {
        user = m.quoted.sender;
    } else {
        return conn.reply(chatId, `${emojis} Responde al mensaje del usuario que quieres mutear/desmutear.`, m);
    }

    const ownerBot = global.owner[0][0] + '@s.whatsapp.net';
    if (user === ownerBot) return conn.reply(chatId, `${emojis} No puedo mutear al propietario del bot.`, m);

    if (command === 'mute') {
        if (muted.includes(user)) return conn.reply(chatId, `⚠️ El usuario ya está muteado.`, m);
        muted.push(user);
        saveMuted(chatId, muted);
        conn.reply(chatId, `✅ *Usuario muteado:* @${user.split('@')[0]}`, m, { mentions: [user] });
    } else if (command === 'unmute') {
        if (!muted.includes(user)) return conn.reply(chatId, `⚠️ El usuario no está muteado.`, m);
        muted = muted.filter(u => u !== user);
        saveMuted(chatId, muted);
        conn.reply(chatId, `✅ *Usuario desmuteado:* @${user.split('@')[0]}`, m, { mentions: [user] });
    }
};

handler.before = async (m, { conn }) => {
    let muted = loadMuted(m.chat);
    if (muted.includes(m.sender) && m.mtype !== 'stickerMessage') {
        try {
            await conn.sendMessage(m.chat, { delete: m.key });
        } catch (e) {
            console.error(e);
        }
    }
};

handler.help = ['mute', 'unmute', 'listmute'];
handler.tags = ['grupo'];
handler.command = /^(mute|unmute|listmute)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;