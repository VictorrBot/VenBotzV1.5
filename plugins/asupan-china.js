let handler = async(m,{text, conn}) => {
let sipaa = 'https://api.zacros.my.id/asupan/china'
conn.sendFile(m.chat, sipaa, null, 'Girls from China', m)
}
handler.help = ['china']
handler.tags = ['asupan']
handler.command = /^(china)$/i

module.exports = handler