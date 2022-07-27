let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/art?apikey=Papah-Chan', '', '', m)
}
handler.help = ['art']
handler.tags = ['anime']
handler.command = /^(art)$/i
module.exports = handler