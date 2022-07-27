let handler = async(m,{text, conn}) => {
let sipaa = 'https://api.zacros.my.id/asupan/thailand'
conn.sendFile(m.chat, sipaa, null, 'Girl From Thailand', m)
}
handler.help = ['thailand']
handler.tags = ['asupan']
handler.command = /^(thailand)$/i

module.exports = handler