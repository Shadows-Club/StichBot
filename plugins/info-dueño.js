let handler = async (m, { conn }) => {
  await m.react('🐼');

  // Crear contacto VCARD
  let list = [{
    displayName: "Jota",
    vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Jota\nitem1.TEL;waid=573011624434:573011624434\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET:cristianescobar.vx@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.instagram.com/dev.criss_vx\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Perú;;;;\nitem4.X-ABLabel:País\nEND:VCARD`
  }];

  // Enviar solo el contacto, sin adornos
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