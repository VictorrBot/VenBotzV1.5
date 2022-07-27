let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Money Tidak Terbatas!
│• Level Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│• Dapat Menambahkan Bot Ke Grup!
│
│ > Bonus :
│• Kaga Ada!!!
│
│ > Harga :
│• 5K / 1 Minggu (7 Hari)
│• 10K / 2 Minggu (14 Hari)
│• 15K / Bulan (4 Minguu)
│• 30K / Tahun (12 Bulan)
│• 40K / VIP (Permanen)
│
│ > Pembayaran :
│• PULSA TELKOMSEL : 081248537085
│• DANA : 081248537085
│• OVO : 081248537085
│• GOPAY : 081248537085
│• SHOPEPAY : 081248537085
╰────
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
} 
handler.help = ['premium']
handler.tags = ['premium', 'info']
handler.command = /^(premium)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler