let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/les?apikey=Papah-Chan', '', '', m)
}
handler.help = ['les']
handler.tags = ['nsfw']
handler.command = /^(les)$/i
handler.limit = 1
module.exports = handler