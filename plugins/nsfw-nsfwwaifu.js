let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=Papah-Chan', '', '', m)
}
handler.help = ['nsfwwaifu']
handler.tags = ['nsfw']
handler.command = /^(nsfwwaifu)$/i
handler.limit = 1
module.exports = handler