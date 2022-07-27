const fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
  let id = m.chat
  if (id in conn.tebakbendera) {
    conn.reply(m.chat, '*Tolong Selesaikan Soal Ini Terlebih Dahulu*', conn.tebakbendera[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `*❮ TEBAK BENDERA ❯*\n
❓BENDERA APAKAH INI?
⏱️Timeout *${(timeout / 1000).toFixed(2)} detik*
🔍Ketik ${usedPrefix}tebe Untuk Bantuan
🎁Bonus: ${poin} XP
    `.trim()
  conn.tebakbendera[id] = [
    await conn.sendButtonImg(m.chat, json.img, caption, wm3, '🔍 HELP', '.tebe', m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakbendera[id]) await conn.sendBut(m.chat, `「⏱️」Waktu Habis!\nJawabannya adalah *${json.name}*`, '', 'Tebak Bendera', '.tebakbendera', conn.tebakbendera[id][0])
      delete conn.tebakbendera[id]
    }, timeout)
  ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i

module.exports = handler
