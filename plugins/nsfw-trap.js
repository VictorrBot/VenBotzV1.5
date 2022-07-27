let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/trap?apikey=Papah-Chan', '', '', m)
}
handler.help = ['trap']
handler.tags = ['nsfw']
handler.command = /^(trap)$/i
handler.limit = 1
module.exports = handler