import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
  ['927238856', 'Owner 🜲', true],
  ['527461177130',  'Jota', true]
  ['5216631079388', ' Jota 🜲', true],
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['524181450063'] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.vs = '2.2.0'
global.nameqr = 'JotaMD'
global.namebot = 'Jota Bot - MD'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.JotaJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = 'Jota'
global.botname = 'Jota MX'
global.wm = 'Sun'
global.author = 'Y𝖔'
global.dev = 'NovaSpark'
global.textbot = 'Jota • Sunflare'
global.etiqueta = 'Jota'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = 'Diamantes'
global.welcom1 = '❍ Edita Con El Comando setwelcome'
global.welcom2 = '❍ Edita Con El Comando setbye'
global.banner = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwEyPc2ZcSJLv1nKjMoNcqTD_PZl1Zk9ujraVrJSEw_efKhnurC6XGA6VOj73W-ygzfgfou1-g_3EzCX41BCiLXPvTjcIUy4BL78F9l9MuQlWAIg4E3DjO-Kx-qO-yIIhkOyeYaqDeyx8MW4EusFhzDUqID_Pk2RRUWhDfHErCquK71DBo9v4BhRjtXBNt/s736/b63bb3b9-7464-494f-937f-9aa4394cb124.jpg'
global.avatar = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwEyPc2ZcSJLv1nKjMoNcqTD_PZl1Zk9ujraVrJSEw_efKhnurC6XGA6VOj73W-ygzfgfou1-g_3EzCX41BCiLXPvTjcIUy4BL78F9l9MuQlWAIg4E3DjO-Kx-qO-yIIhkOyeYaqDeyx8MW4EusFhzDUqID_Pk2RRUWhDfHErCquK71DBo9v4BhRjtXBNt/s736/b63bb3b9-7464-494f-937f-9aa4394cb124.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.repobot = 'https://github.com/NovaSpark-Community/JotaBot'
global.grupo = 'https://chat.whatsapp.com/Caj518FwPjHLVmGn48GvhW'
global.comu = 'https://chat.whatsapp.com/Er5zgBnAW9A8rfGaXGIvhI'
global.channel = 'https://whatsapp.com/channel/0029VauTE8AHltY1muYir31n'
global.insta = 'https://www.instagram.com/dev.criss_vx'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./media/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "543876577197-120363317332020195@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'SUNFLARE 乂 TEAM', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.multiplier = 70

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
