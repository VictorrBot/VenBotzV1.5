let handler = async(m,{text, conn}) => {
let sipaa = 'https://api.zacros.my.id/asupan/malaysia'
conn.sendFile(m.chat, sipaa, null, 'Girl From Malaysia', m)
}
handler.help = ['malaysia']
handler.tags = ['asupan']
handler.command = /^(malaysia)$/i

module.exports = handler