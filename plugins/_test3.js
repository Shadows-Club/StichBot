import axios from 'axios';

const handler = async (m, { conn, text }) => {
  if (!text) return m.reply('Por favor, ingresa un nombre de usuario para buscar.');

  try {
    await m.react('👁️');
    const { data } = await axios.get(`https://api.vreden.my.id/api/igstalk?query=${encodeURIComponent(text)}`);
    const user = data?.result;

    if (!data.status || !user || !user.username) {
      throw 'No se encontró el usuario o la API no respondió correctamente.';
    }

    const caption = `
\`\`\`乂 INSTAGRAM STALKER\`\`\`
*◦ Nombre:* ${user.full_name || 'Desconocido'}
*◦ Usuario:* @${user.username}
*◦ Biografía:* ${user.biography || 'Sin biografía'}
*◦ Publicaciones:* ${user.posts ?? 'No disponible'}
*◦ Seguidores:* ${user.followers ?? 'No disponible'}
*◦ Siguiendo:* ${user.following ?? 'No disponible'}
*◦ Privado:* ${user.is_private ? '🔒 Sí' : '🔓 No'}
*◦ Verificado:* ${user.is_verified ? '✅ Sí' : '❌ No'}
`.trim();

    await conn.sendMessage(m.chat, {
      image: { url: user.profile_pic || 'https://files.catbox.moe/z9klun.jpg' },
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