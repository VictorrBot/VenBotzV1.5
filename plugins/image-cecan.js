let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/cecan?apikey=Papah-Chan', '', '', m)
}
handler.help = ['cecan']
handler.tags = ['image','random']
handler.command = /^(cecan)$/i
module.exports = handler