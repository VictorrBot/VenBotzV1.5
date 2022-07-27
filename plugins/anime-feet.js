let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/feet?apikey=Papah-Chan', '', '', m)
}
handler.help = ['feet']
handler.tags = ['anime']
handler.command = /^(feet)$/i
handler.limit = 1
module.exports = handler