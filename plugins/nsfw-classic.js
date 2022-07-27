let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/classic?apikey=Papah-Chan', '', '', m)
}
handler.help = ['classic']
handler.tags = ['nsfw']
handler.command = /^(classic)$/i
handler.limit = 1
module.exports = handler