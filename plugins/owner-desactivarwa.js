/*import axios from "axios";

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

let handler = async (m, { conn }) => {
    const precios = 'https://files.catbox.moe/6911v7.jpg'; // imagen de precios
    const numero = '51999999999'; // tu número con código de país (sin +)
    const mensaje = encodeURIComponent("Hola, quiero información para comprar el bot.");

    const buttons = [
        {
            buttonText: { displayText: "Contactar por WhatsApp" },
            type: 2,
            url: `https://wa.me/${numero}?text=${mensaje}`
        }
    ];

    await conn.sendMessage(
        m.chat,
        {
            image: { url: precios },
            caption: "*JOTA BOT - Lista de Precios*\n\nExplora nuestros paquetes y obtén acceso premium.",
            footer: "Presiona el botón para iniciar el chat con el vendedor.",
            buttons: buttons,
            viewOnce: true
        },
        { quoted: m }
    );
};

handler.help = ["precios"];
handler.tags = ["info"];
handler.command = /^(precios2)$/i;

export default handler;