let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/anal?apikey=Papah-Chan', '', '', m)
}
handler.help = ['anal']
handler.tags = ['nsfw']
handler.command = /^(anal)$/i
handler.limit = 1
module.exports = handler