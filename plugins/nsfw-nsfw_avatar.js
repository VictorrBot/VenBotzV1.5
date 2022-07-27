let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/nsfw_avatar?apikey=Papah-Chan', '', '', m)
}
handler.help = ['nsfw_avatar']
handler.tags = ['nsfw']
handler.command = /^(nsfw_avatar)$/i
handler.limit = 1
module.exports = handler