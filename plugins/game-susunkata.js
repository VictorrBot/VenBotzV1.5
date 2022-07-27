let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, '*Tolong Selesaikan Soal Ini Terlebih Dahulu*', conn.susunkata[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
    if (!res.ok) throw eror
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `*❮ ASAH OTAK ❯*\n
*${json.soal}*

📌Tipe: ${json.tipe}

⏱️Timeout ${(timeout / 1000).toFixed(2)} detik
🔍Ketik ${usedPrefix}suka Untuk Bantuan
🎁Bonus: ${poin} XP
`.trim()
    conn.susunkata[id] = [
        await conn.sendBut(m.chat, caption, wm, '🔍 HELP', '.suka'),
        json, poin,
        setTimeout(async () => {
            if (conn.susunkata[id]) await conn.sendBut(m.chat, `「⏱️」Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, wm, 'Susun Kata', '.susunkata')
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i

module.exports = handler
