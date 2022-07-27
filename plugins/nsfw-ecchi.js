let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=Papah-Chan', '', '', m)
}
handler.help = ['ecchi']
handler.tags = ['nsfw']
handler.command = /^(ecchi)$/i
handler.limit = 1
module.exports = handler