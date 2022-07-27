let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/hololewd?apikey=Papah-Chan', '', '', m)
}
handler.help = ['hololewd']
handler.tags = ['nsfw']
handler.command = /^(hololewd)$/i
handler.limit = 1
module.exports = handler