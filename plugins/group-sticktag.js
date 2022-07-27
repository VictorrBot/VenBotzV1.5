/*
by hyzer 
cuman tes doang 🥶🙏
*/
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw '*「❗」Reply Sticker-nya*'
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw 'Stiker Invalid'
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  conn.sendImageAsSticker(m.chat, out, m, { packname: "⌬ VenBotz", author: "©Reza" }, mentions: participants.map(a => a.id))
  })
}
handler.help = ['stickertag', 'sticktag']
handler.tags = ['group']
handler.command = /^(stickertag|sticktag)$/i
module.exports = handler
