let handler = async m => m.reply(`
╭═══════════════════════
║                  〔  *List Dm*  〕
║      *LIST DM PUBG VIA LOGIN GMAIL/FB/DLL*
║────────────────────────
║❉   60  ($1) = 11.500
║❉   300+25  ($5) = 57.500
║❉   600+60  ($10) = 115.000
║❉   1500+300  ($25) = 287.500
║❉   3000+850  ($50) = 575.000
║❉   6000+2100  ($100) = 1.150.000
║────────────────────────
║🎟️ *Membership Mingguan = ---*
║🎟️ *Membership Bulanan = ---*
╰─────────────────────────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['pubglog']
handler.tags = ['bisnis']
handler.command = /^(pubglog)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
