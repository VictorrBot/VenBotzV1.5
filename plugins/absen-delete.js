let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) conn.sendBut(m.chat, `*「❗」Tidak Ada Absen Berlangsung Digrup Ini*\n\n*${usedPrefix}mulaiabsen* - Untuk Memulai Absen`, wm, 'Mulai Absen', '.mulaiabsen', m)
    delete conn.absen[id]
    m.reply(`*「✅」Successfully Remove Absence*`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
handler.register = true
module.exports = handler
