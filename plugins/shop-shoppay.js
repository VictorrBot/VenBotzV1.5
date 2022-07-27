let handler = async m => m.reply(`
╭════════════════════════════════
║╭──❉ 〔  *METODE PEMBAYARAN*  〕 ❉──────
║│➸ *Dana* : 081248537085
║│➸ *Ovo* : 081248537085
║│➸ *GoPay* : 081248537085
║│➸ *Pulsa Telkomsel* : 081248537085
║│➸ *ShopePay* : 081248537085
║╰───────────────────────────────
╰════════════════════════════════
`.trim()) // Tambah sendiri kalo mau
handler.help = ['shoppay']
handler.tags = ['shop']
handler.command = /^(shoppay)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
