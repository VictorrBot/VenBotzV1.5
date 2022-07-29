let handler = async m => m.reply(`
╭═══════════════════════
║╭──❉ 〔  *Top Up*  〕 ❉──────
║│➸ *.fflog* (Top Up Ff Via Login Gmail/Fb/Vk⚠️)
║│➸ *.ffid* (Top Up Ff Via Id
║│➸ *.publogin* (Top Up Pb Via Login⚠️)
║│➸ *.shoppay* (Untuk Melihat Metode Pembayaran)
║╰─────────────────────
║ Chat Owner Untuk Lebih Lanjut
║ : 081248537085 Or .owner
╰═══════════════════════
`.trim()) // Tambah n kalo mau
handler.help = ['gamshop']
handler.tags = ['shope']
handler.command = /^gamshop$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
