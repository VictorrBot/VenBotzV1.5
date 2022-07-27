let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/cum?apikey=Papah-Chan', '', '', m)
}
handler.help = ['cum']
handler.tags = ['nsfw']
handler.command = /^(cum)$/i
handler.limit = 1
module.exports = handler