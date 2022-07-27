let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/solo?apikey=Papah-Chan', '', '', m)
}
handler.help = ['solo']
handler.tags = ['nsfw']
handler.command = /^(solo)$/i
handler.limit = 1
module.exports = handler