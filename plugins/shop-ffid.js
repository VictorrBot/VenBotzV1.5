let handler = async m => m.reply(`
╭════════════════════════════════
║                  〔  *List Dm*  〕
║      *LIST DM FF VIA LOGIN GMAIL/FB/VK*
║────────────────────────────────
║                *FF VIA ID [A] (OPEN)*
║   *Note : proses 3-20 menit max 24 jam (delay)*
║
║────────────────────────────────
║❉   70💎 = 8.900
║❉   140💎 = 17.800
║❉   210💎 = 26.700
║❉   355💎 = 44.500
║❉   425💎 = 53.400
║❉   495💎 = 62.300
║❉   710💎 = 88.500
║❉   1065💎 = 133.500
║❉   1420💎 = 178.000
║❉   2130💎 = 265.000
║❉   7100💎 = 880.000
║
║─────────────────────────────────────
║
║                *FF VIA ID [B] (OPEN)*
║   *Note : proses 3-20 menit max 24 jam (delay)*
║
║─────────────────────────────────────
║
║❉   5💎 = 850
║❉   20💎 = 2.900
║❉   50💎 = 6.800
║❉   70💎 = 9.350
║❉   100💎 = 13.450
║❉   140💎 = 18.500
║❉   150💎 = 20.180
║❉   210💎 = 27.720
║❉   250💎 = 33.320
║❉   355💎 = 46.200
║❉   425💎 = 55.440
║❉   500💎 = 65.520
║❉   720💎 = 92.400
║❉   860💎 = 110.880
║❉   1000💎 = 129.360
║❉   1075💎 = 138.600
║❉   1440💎 = 184.800
║❉   2000💎 = 252.000
║❉   2720💎 = 344.400
║❉   3440💎 = 436.800
║❉   4000💎 = 504.000
║❉   7290💎 = 924.000
║────────────────────────
║🎟️ *Membership Mingguan = 23.000*
║🎟️ *Membership Bulanan = 92.000*
╰─────────────────────────

`.trim()) // Tambah sendiri kalo mau
handler.help = ['ffid']
handler.tags = ['shope']
handler.command = /^(ffid)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
