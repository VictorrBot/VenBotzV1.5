let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/lewdk?apikey=Papah-Chan', '', '', m)
}
handler.help = ['lewdk']
handler.tags = ['nsfw']
handler.command = /^(lewdk)$/i
handler.limit = 1
module.exports = handler