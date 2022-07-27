let fetch = require('node-fetch')
let timeout = 120000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) return conn.reply(m.chat, '*Tolong Selesaikan Soal Ini Terlebih Dahulu*', conn.tekateki[id][0])
    let res = await fetch(API('amel', '/tekateki', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let caption = `*❮ TEKA TEKI ❯*\n
*${json.soal}*

⏱️Timeout *${(timeout / 1000).toFixed(2)} detik*
🔍Ketik ${usedPrefix}tete untuk bantuan
🎁Bonus: ${poin} XP
`.trim()
    conn.tekateki[id] = [
        await conn.sendBut(m.chat, caption, wm, '🔍 HELP', `.tete`, m),
        json, poin,
        setTimeout(() => {
            if (conn.tekateki[id]) conn.sendBut(m.chat, `「⏱️」Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'Teka Teki', `.tekateki`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^tekateki/i

handler.game = true

module.exports = handler