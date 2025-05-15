const { Sticker, StickerTypes } = require("wa-sticker-formatter");

module.exports = {
    name: "animbrat",
    aliases: ["sanimbrat"],
    category: "maker",
    code: async (ctx) => {
        let text = ctx.args.join(" ") 
                  || ctx.quoted?.text 
                  || ctx.quoted?.caption 
                  || null;

        if (!text) return ctx.reply("✏️ Ingresa o responde un texto para generar el sticker.");

        if (text.length > 10000) return ctx.reply("❌ El texto es demasiado largo (máx 10000 caracteres).");

        try {
            const apiUrl = `https://fastrestapis.fasturl.cloud/maker/animbrat?text=${encodeURIComponent(text)}&mode=image`;

            const sticker = new Sticker(apiUrl, {
                pack: "Shadow Bot",
                author: "Cristian Escobar",
                type: StickerTypes.FULL,
                quality: 70
            });

            return await ctx.reply(await sticker.toMessage());
        } catch (e) {
            console.error(e);
            return ctx.reply("❌ Error al generar el sticker.");
        }
    }
};