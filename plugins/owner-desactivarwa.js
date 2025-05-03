import axios from "axios";

let handler = async (m, { conn, usedPrefix, command }) => {
    const comprar = 'https://files.catbox.moe/6911v7.jpg';

    const buttons = [
        {
            buttonId: `.vendedor`,
            buttonText: { displayText: "Comprar 🛍️" },
            type: 1
        }
    ];

    await conn.sendMessage(
        m.chat,
        {
            image: { url: comprar },
            caption: "*JOTA BOT*",
            footer: dev,
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

/*


        await conn.sendMessage(m.chat, {
            image: thumbnail,
            caption: messageText,
            footer: 'Code by Cristian Escobar',
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true
            },
            buttons: [
                {
                    buttonId: `${usedPrefix}ytmp3 ${video.url}`,
                    buttonText: { displayText: 'Audio' },
                    type: 1,
                },
                {
                    buttonId: `${usedPrefix}ytmp4 ${video.url}`,
                    buttonText: { displayText: 'Vídeo' },
                    type: 1,
                }
            ],
            headerType: 1,
            viewOnce: true
        }, { quoted: m });
*/
