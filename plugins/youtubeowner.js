let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Owner Kaga Punya Channels YouTube :( *${prefix}menu:
h
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Owner Kaga Punya Channels YouTube🗿*', 'status@broadcast') 
}
handler.help = ['chanel']
handler.tags = ['info']
handler.command = /^(chanel)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

module.exports = handler