import axios from 'axios';

let handler = async (m, { usedPrefix, command, conn, text }) => {
  if (!text) {
    return m.reply(`*❌ Por favor, ingresa un nombre de usuario de Instagram.*\n\n*Ejemplo:* ${usedPrefix + command} cristiano`);
  }

  try {
    await m.react('⏳');

    const { data } = await axios.get(`https://api.vreden.my.id/api/igstalk?query=${encodeURIComponent(text)}`);
    const user = data?.result;

    if (!data.status || !user || !user.username) {
      throw 'No se encontró el usuario o la API no respondió correctamente.';
    }

    const caption = `
\`\`\`乂 INSTAGRAM STALKER\`\`\`
*◦ Nombre:* ${user.fullName || 'Desconocido'}
*◦ Usuario:* @${user.username}
*◦ Biografía:* ${user.biography || 'Sin biografía'}
*◦ Publicaciones:* ${user.posts ?? 'No disponible'}
*◦ Seguidores:* ${user.followers ?? 'No disponible'}
*◦ Siguiendo:* ${user.following ?? 'No disponible'}
*◦ Privado:* ${user.isPrivate ? '🔒 Sí' : '🔓 No'}
*◦ Verificado:* ${user.isVerified ? '✅ Sí' : '❌ No'}
`.trim();

    await conn.sendMessage(m.chat, {
      image: { url: user.profilePic || 'https://i.imgur.com/3e3u1mL.png' },
      caption,
    }, { quoted: m });

    await m.react('✅');
  } catch (err) {
    console.error(err);
    await m.react('❌');
    m.reply('*❌ Ocurrió un error al obtener los datos. Asegúrate de que el usuario existe o intenta más tarde.*');
  }
};

handler.help = ['igstalk *<usuario>*'];
handler.tags = ['stalk'];
handler.command = /^(igstalk|igstalker|stalkig)$/i;

export default handler;