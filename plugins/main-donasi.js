let handler = async m => m.reply(`
╭═══════════════════════
║╭──❉ 〔  *DONASI*  〕 ❉──────
║│➸ *Dana* : 081248537085
║│➸ *Ovo* : 081248537085
║│➸ *GoPay* : 081248537085
║│➸ *Pulsa Telkomsel*: 081248537085
║│➸ *Trakteer*: https://trakteer.id/venBotz/tip
║╰─────────────────────
╰═══════════════════════
*Donasi Se Ikhlas Nya, Gk Maksa!*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
