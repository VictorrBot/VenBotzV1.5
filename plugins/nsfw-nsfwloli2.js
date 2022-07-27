let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/chiisaihentai?apikey=Papah-Chan', '', '', m)
}
handler.help = ['nsfwloli2']
handler.tags = ['nsfw']
handler.command = /^(nsfwloli2)$/i
handler.limit = 1
module.exports = handler