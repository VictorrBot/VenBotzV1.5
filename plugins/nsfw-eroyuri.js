let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/eroyuri?apikey=Papah-Chan', '', '', m)
}
handler.help = ['eroyuri']
handler.tags = ['nsfw']
handler.command = /^(eroyuri)$/i
handler.limit = 1
module.exports = handler