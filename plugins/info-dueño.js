let handler = async (m, { conn }) => {
  await m.react('🕷️');

  // Crear contacto VCARD
  let list = [{
    displayName: "Ignacio",
    vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Garu\nitem1.TEL;waid=56964656014:56964656014\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET:team.sunflare@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.instagram.com/nee\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Chile 🇨🇱;;;;\nitem4.X-ABLabel:País\nEND:VCARD`
  }];

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: `${list.length} Contacto`,
      contacts: list
    }
  }, { quoted: m });
};

handler.help = ['owner', 'creador'];
handler.tags = ['info'];
handler.command = /^(owner|dueño)$/i;

export default handler;