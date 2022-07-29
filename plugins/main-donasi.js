let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
╭═══════════════════════
║╭──❉ 〔  *DONASI*  〕 ❉──────
║│➸ *Dana* : 081248537085
║│➸ *Ovo* : 081248537085
║│➸ *GoPay* : 081248537085
║│➸ *Pulsa Telkomsel*: 081248537085
║│➸ *Trakteer*: https://Trakteer/VenBotz/Tip
║╰─────────────────────
╰═══════════════════════
*Donasi Se Ikhlas Nya, Gk Maksa!*

Contact person Owner:
wa.me/${numberowner} (Owner)
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
