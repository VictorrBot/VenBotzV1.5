let handler = async(m,{text, conn}) => {
let sipaa = 'https://api.zacros.my.id/asupan/japan'
conn.sendFile(m.chat, sipaa, null, 'Girl From Japan', m)
}
handler.help = ['jepang']
handler.tags = ['asupan']
handler.command = /^(jepang)$/i

module.exports = handler
