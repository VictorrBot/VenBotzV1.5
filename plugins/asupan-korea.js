let handler = async(m,{text, conn}) => {
let sipaa = 'https://api.zacros.my.id/asupan/korea'
conn.sendFile(m.chat, sipaa, null, 'Girl From Korea', m)
}
handler.help = ['korea']
handler.tags = ['asupan']
handler.command = /^(korea)$/i

module.exports = handler