let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/lewd?apikey=Papah-Chan', '', '', m)
}
handler.help = ['lewd']
handler.tags = ['nsfw']
handler.command = /^(lewd)$/i
handler.limit = 1
module.exports = handler