let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/holoero?apikey=Papah-Chan', '', '', m)
}
handler.help = ['holoero']
handler.tags = ['nsfw']
handler.command = /^(holoero)$/i
handler.limit = 1
module.exports = handler