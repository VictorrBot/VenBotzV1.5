let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let src
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, '*Tolong Selesaikan Soal Ini Terlebih Dahulu*', conn.caklontong[id][0])
        throw false
    }
    if (!src) src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*❮ CAK LONTONG ❯*\n
*${json.soal}*\n
⏱️Timeout ${(timeout / 1000).toFixed(2)} Detik
🔍Ketik ${usedPrefix}calo Untuk Bantuan
🎁Bonus ${poin} XP
`.trim()
    conn.caklontong[id] = [
        await conn.sendBut(m.chat, caption, author, '🔍 HELP', '.calo', m),
        json, poin,
        setTimeout(async () => {
            if (conn.caklontong[id]) conn.sendBut(m.chat, `⏱️ Waktu Habis!\nJawabannya Adalah *${json.jawaban}*\n${json.deskripsi}`, wm, 'Cak Lontong', '.caklontong', conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i

module.exports = handler