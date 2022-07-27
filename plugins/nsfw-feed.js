let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/feed?apikey=Papah-Chan', '', '', m)
}
handler.help = ['feed']
handler.tags = ['nsfw']
handler.command = /^(feed)$/i
handler.limit = 1
module.exports = handler