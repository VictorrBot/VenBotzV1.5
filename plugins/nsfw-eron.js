let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/eron?apikey=Papah-Chan', '', '', m)
}
handler.help = ['eron']
handler.tags = ['nsfw']
handler.command = /^(eron)$/i
handler.limit = 1
module.exports = handler