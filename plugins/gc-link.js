/*var handler = async (m, { conn, args }) => {

let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
conn.reply(m.chat, '🔗\v' + link, m, { detectLink: true })

}
handler.help = ['link']
handler.tags = ['gc']
handler.command = ['link','linkgroup']

handler.group = true
handler.botAdmin = true

export default handler*/

const { generateWAMessageFromContent } = (await import('@whiskeysockets/baileys')).default;
const { randomBytes } = await import("crypto");

var handler = async (m, { conn }) => {
    try {
        let group = m.chat;
        let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);

        const messageContent = {
            interactiveMessage: {
                body: { text: `*Aquí tienes el enlace del grupo:*\nhttps://chat.whatsapp.com/K3w2klfOUfBCAvv6ZWr5sf` },
                footer: { text: dev },
                header: {
                    title: 'Enlace de Grupo',
                    hasMediaAttachment: false
                },
                nativeFlowMessage: {
                    buttons: [
                        {
                            buttonParamsJson: JSON.stringify({
                                display_text: 'Copiar enlace',
                                id: 'copiar_enlace',
                                copy_code: link
                            }),
                            name: "cta_copy"
                        }
                    ],
                    messageParamsJson: "{}",
                    messageVersion: 1
                }
            },
            messageContextInfo: {
                messageSecret: randomBytes(32)
            }
        };

        const msg = generateWAMessageFromContent(m.chat, messageContent, { userJid: conn.user.id });
        await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } catch (e) {
        m.reply('Error al generar el enlace del grupo.');
        console.error(e);
    }
};

handler.help = ['link'];
handler.tags = ['gc'];
handler.command = ['link', 'linkgroup'];

handler.group = true;
handler.botAdmin = true;

export default handler;