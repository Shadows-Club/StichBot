import axios from 'axios'

let handler = async (m, { usedPrefix, command, conn, text }) => {
  if (!text) return m.reply(`*❌ Por favor, ingresa un usuario de Instagram para stalkear.*\n> *\`Ejemplo:\`* ${usedPrefix + command} dev.criss_vx`);

  try {
    await m.react('⏳');

    const res = await axios.get(`https://api.vreden.my.id/api/igstalk?query=${encodeURIComponent(text)}`);
    const result = res.data?.result;

    if (!result) throw 'No se encontró el usuario o ocurrió un error.';

    const caption = `\`\`\`乂 STALKER - INSTAGRAM\`\`\`\n
*◦ NOMBRE :* ${result.fullName}
*◦ USUARIO :* @${result.username}
*◦ BIOGRAFÍA :* ${result.biography || 'Sin biografía'}
*◦ PUBLICACIONES :* ${result.posts}
*◦ SEGUIDORES :* ${result.followers}
*◦ SIGUIENDO :* ${result.following}
*◦ PRIVADO :* ${result.isPrivate ? '🔒 Sí' : '🔓 No'}
*◦ VERIFICADO :* ${result.isVerified ? '✅ Sí' : '❌ No'}
`.trim();

    await conn.sendMessage(m.chat, { image: { url: result.profilePic }, caption }, { quoted: m });
    await m.react('✅');

  } catch (err) {
    console.error(err);
    m.reply('*❌ Error: No se encontró el usuario o la API falló. Intenta nuevamente.*');
  }
};

handler.help = ['igstalk *<usuario>*'];
handler.tags = ['stalk'];
handler.command = /^(igstalk|igstalker|stalkig)$/i;

export default handler;