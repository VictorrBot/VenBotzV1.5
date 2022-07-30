let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=eaaf1291f2a82f005d8aad20', '', '', m)
}
handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = /^(hentai)$/i
handler.limit = 1
module.exports = handler
