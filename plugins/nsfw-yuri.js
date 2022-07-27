let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/yuri?apikey=Papah-Chan', '', '', m)
}
handler.help = ['yuri']
handler.tags = ['nsfw']
handler.command = /^(yuri)$/i
handler.limit = 1
module.exports = handler