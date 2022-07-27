let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/futanari?apikey=Papah-Chan', '', '', m)
}
handler.help = ['futanari']
handler.tags = ['nsfw']
handler.command = /^(futanari)$/i
handler.limit = 1
module.exports = handler