let fs = require('fs')
let handler = async (m, { conn }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let name = conn.getName(m.sender)
    let thumbnail = fs.readFileSync('./media/bank.jpg')
    let user = global.db.data.users[who]
let anu = `-----------「 YOUR WALLET 」-----------

✨Exp : *${user.exp}* 
🏅Role : *${user.role}*
🎫Limit : *${user.limit}*
💵Money : *${user.money}* 
🏦Saldo Bank : *${user.name}*`
      conn.sendButtonImg(m.chat, thumbnail, anu, wm2, 'M E N U', '.menu', m) 
}
handler.help = ['bank', 'dompet', 'dompet @user']
handler.tags = ['xp', 'rpg']
handler.command = /^(my|dompet)$/i

module.exports = handler