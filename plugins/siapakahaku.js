let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, '*Tolong Selesaikan Soal Ini Terlebih Dahulu*', conn.siapakahaku[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*❮ SIAPAKAH AKU ❯*\n
*${json.soal}*

⏱️Timeout *${(timeout / 1000).toFixed(2)} detik*
🔍Ketik ${usedPrefix}who Untuk Bantuan
🎁Bonus: ${poin} XP
`.trim()
    conn.siapakahaku[id] = [
        await conn.sendBut(m.chat, caption, wm, '🔍 HELP', '.who'),
        json, poin,
        setTimeout(async () => {
            if (conn.siapakahaku[id]) await conn.sendBut(m.chat, `⏱️Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'Siapakah Aku', '.siapaaku')
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i

module.exports = handler