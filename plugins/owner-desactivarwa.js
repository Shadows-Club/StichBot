/*import axios from "axios";

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

import axios from "axios";

let handler = async (m, { conn, command }) => {
    const comprar = 'https://files.catbox.moe/6911v7.jpg';

    // Reacción según comando
    await m.react(command === 'vendedor' ? '🤍' : '🛒');

    if (command === 'vendedor') {
        let username = await conn.getName(m.sender);

        // Mensaje explicativo
        await conn.sendMessage(m.chat, {
            text: `👤 *Hola ${username}*\n\nAquí tienes el contacto del creador para adquirir el bot *JOTA BOT*.\nPuedes escribirle para más detalles o contratar tu propio bot personalizado.`
        }, { quoted: m });

        // Enviar contacto
        let list = [{
            displayName: "Cristian Escobar",
            vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: Cristian Escobar\nitem1.TEL;waid=51927238856:51927238856\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET: cristianescobar.vx@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.instagram.com/dev.criss_vx\nitem3.X-ABLabel:Instagram\nitem4.ADR:;; Perú;;;;\nitem4.X-ABLabel:Región\nEND:VCARD`,
        }];

        await conn.sendMessage(m.chat, {
            contacts: {
                displayName: `${list.length} Contacto`,
                contacts: list
            }
        }, { quoted: m });

        return;
    }

    // Enviar imagen con botón si el comando es .precios
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
            footer: "By Cristian Escobar",
            buttons: buttons,
            viewOnce: true
        },
        { quoted: m }
    );
};

handler.help = ["precios", "vendedor"];
handler.tags = ["info"];
handler.command = /^(precios|vendedor)$/i;

export default handler;