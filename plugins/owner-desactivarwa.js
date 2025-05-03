import axios from "axios";

let handler = async (m, { conn, usedPrefix, command }) => {
    const maria = 'https://files.catbox.moe/6911v7.jpg';
    const buttons = [
        {
            buttonId: `.owner`,
            buttonText: { displayText: "Comprar 🛍️" },
            type: 1
        }
    ];

    await conn.sendMessage(
        m.chat,
        {
            image: { url: maria },
            caption: "*JOTA BOT*",
            buttons: buttons,
            viewOnce: true
        },
        { quoted: m }
    );
};

handler.help = ["precios"];
handler.tags = ["info"];
handler.command = /^(precios)$/i;

export default handler;