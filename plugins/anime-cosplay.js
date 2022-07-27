let handler = async (m, { conn, command }) => {
let nyenye = `https://api.zacros.my.id/randomimg/cosplay`
    conn.sendButtonImg(m.chat, nyenye, '*Success Getting Pictures*', wm2, 'N E X T', `.${command}`, m) 
}
handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^cosplay$/i
//buatan hyzer, jgn hapus ðŸ—¿
module.exports = handler