let handler = async(m,{text, conn}) => {
let sipaa = 'https://api.zacros.my.id/asupan/hijaber'
conn.sendFile(m.chat, sipaa, null, 'Hijaber', m)
}
handler.help = ['hijaber']
handler.tags = ['asupan']
handler.command = /^(hijaber)$/i

module.exports = handler