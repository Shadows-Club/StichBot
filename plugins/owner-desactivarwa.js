import axios from "axios";

let handler = async (m, { conn, usedPrefix, command }) => {
    const maria = 'https://files.catbox.moe/6911v7.jpg';
    const buttons = [
        {
            buttonId: `.owner`,
            buttonText: { displayText: "Ver más Marías" },
            type: 1
        }
    ];

    await conn.sendMessage(
        m.chat,
        {
            image: { url: maria },
            caption: "*MARIA 🫦*",
            buttons: buttons,
            viewOnce: true
        },
        { quoted: m }
    );
};

handler.help = ["señoritamaria"];
handler.tags = ["negra"];
handler.command = /^(mariatest)$/i;

export default handler;