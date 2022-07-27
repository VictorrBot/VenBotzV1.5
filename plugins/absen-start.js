let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `*「📝」Masih Ada Absen Di Chat Ini*\n\n*${usedPrefix}hapusabsen* - Untuk Menghapus Absen`
    }
    conn.absen[id] = [
        conn.sendBut(m.chat, `*「✅」Berhasil Memulai Absen*\n\n*${usedPrefix}absen* - Untuk Absen\n*${usedPrefix}cekabsen* - Untuk Mengecek Absen\n*${usedPrefix}hapusabsen* - Untuk Menghapus Data Absen`, wm, 'Absen', '.absen', m),
        [],
        text
    ]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai)absen$/i
handler.group = true
handler.admin = true
handler.register = true
module.exports = handler
