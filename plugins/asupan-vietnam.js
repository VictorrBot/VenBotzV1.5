let handler = async(m,{text, conn}) => {
let sipaa = 'https://api.zacros.my.id/asupan/vietnam'
conn.sendFile(m.chat, sipaa, null, 'Girl From Vietnam', m)
}
handler.help = ['vietnam']
handler.tags = ['asupan']
handler.command = /^(vietnam)$/i

module.exports = handler