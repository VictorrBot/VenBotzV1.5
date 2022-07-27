let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/tag.webp')
conn.fakeReply(m.chat, stc, '6281248537085@s.whatsapp.net', '*Kenapa Tag Owner Saya?*')
}
handler.customPrefix = /^(@6281248537085)$/i
handler.command = new RegExp

module.exports = handler
