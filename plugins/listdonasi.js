let { getBuffer } = require('../lib/functions')
let fetch = require('node-fetch')

let handler = async(m, { conn }) => {

 let thumb = await getBuffer(`https://widget.trakteer.id/top-supporter-retro.html?ts_font=ABeeZee&ts_count=10&ts_theme=retro&ts_sortby=nominal&ts_interval=30&key=trstream-Qjj8Jxu5UpG2c1eC90C0`)
 let caption = 'Terimah Kasih Yang Sudah Mau Donasi!'

  conn.sendFile(m.chat, thumb, 'Logo.jpg', caption, m)
}
handler.help = ['listdonasi']
handler.tags = ['info']
handler.command = /^(listdona(te|si)|ld)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 100
handler.limit = false

module.exports = handler
