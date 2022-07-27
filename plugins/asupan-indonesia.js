let handler = async(m,{text, conn}) => {
let sipaa = 'https://api.zacros.my.id/asupan/indonesia'
conn.sendFile(m.chat, sipaa, null, 'Girl From Indonesia', m)
}
handler.help = ['indonesia']
handler.tags = ['asupan']
handler.command = /^(indonesia)$/i

module.exports = handler