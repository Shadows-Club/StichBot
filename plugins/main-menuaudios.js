let handler = async (m, { conn, command, args }) => {
  const sections = [
    {
      title: "Opciones Disponibles",
      rows: [
        { title: "Información del Bot", description: "Ver detalles sobre el bot", rowId: ".infobot" },
        { title: "Estado del Bot", description: "Ver estado actual", rowId: ".estado" },
        { title: "Dueño", description: "Información del propietario", rowId: ".owner" },
      ]
    }
  ];

  const listMessage = {
    text: "Hola, selecciona una opción del menú:",
    footer: "Bot de prueba | Lista interactiva",
    title: "Menú Principal",
    buttonText: "Ver opciones",
    sections
  };

  await conn.sendMessage(m.chat, listMessage, { quoted: m });
};

handler.command = /^botones$/i;

export default handler;