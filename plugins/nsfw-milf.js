let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/milf?apikey=Papah-Chan', '', '', m)
}
handler.help = ['milf']
handler.tags = ['nsfw']
handler.command = /^(milf)$/i
handler.limit = 1
module.exports = handler