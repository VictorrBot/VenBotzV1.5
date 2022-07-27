let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/tits?apikey=Papah-Chan', '', '', m)
}
handler.help = ['tits']
handler.tags = ['nsfw']
handler.command = /^(tits)$/i
handler.limit = 1
module.exports = handler