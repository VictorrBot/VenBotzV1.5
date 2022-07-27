let handler = async(m,{text, conn}) => {
let sipaa = 'https://api.zacros.my.id/asupan/cecan'
conn.sendFile(m.chat, sipaa, null, 'Beautiful Girl Photos', m)
}
handler.help = ['cecan']
handler.tags = ['asupan']
handler.command = /^(cecan)$/i

module.exports = handler