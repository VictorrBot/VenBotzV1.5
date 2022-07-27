//=============『 Utama 』================== //
global.owner = ['6281248537085','6283153491281'] 
global.mods = ['6281248537085','6282155152869'] 
global.prems = ['6281248537085','6283153491281','6282155152869'] 

//=============『 Info Owner 』============== //
global.nameowner = 'Reza'
global.numberowner = '6281248537085'
global.instagram = 'https://instagram.com'
global.github = 'https://github.com/Venbotz'
global.dana = '081248537085'
global.pulsa = '081248537085'
global.gopay = '081248537085'

//=============『 Info Bot 』=================//
global.namebot = '⌬ VenBotz'
global.gc = 'https://chat.whatsapp.com/HW45rEJc3x2IS76JRP4I4Y'
global.web = 'https://github.com/Venbotz' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = '◩─────〔 *SEWA*〕──────◩\n1 Ketik .sewa Untuk Menyewa Bot\n◩────────────────────◩'

//=======『 Tampilan Dan Lainnya 』============//
global.fotonya1 = 'https://telegra.ph/file/65f657f477c5f0aa8f203.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/9e8adf8492e3c2b949d0b.jpg' //ini juga ganti 
global.lolkey = 'lolhuman' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = '⌬ VenBotz'
global.watermark = wm
global.wm2 = '「 VEN-BOTZ 」'
global.wm3 = '⌬ Reza'
global.htki = '╼┅━━┅╾『' 
global.htka = '』╼┅━━┅╾'
global.media = 'https://telegra.ph/file/ac3c203cee12bf217d0c9.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '*Memuat Data📂*\n*■□□□□□□□□□ 10%*'
global.eror = '*[❗] Servers Error*'
global.benar = '*「✅」BENAR*\n'
global.salah = '*「❌」SALAH*\n'
global.stiker_wait = '*[⏳]  Stickers In Progress*'
global.packname = 'VenBotz-md'
global.author = '©VenBotz 🗿©Reza'

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Papah-Chan',
}

//=============『 RPG GAMES 』================== //
global.multiplier = 110 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 Jangan Di Ubah 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
