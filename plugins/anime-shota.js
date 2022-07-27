let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/shota?apikey=Papah-Chan', '', '', m)
}
handler.help = ['shota']
handler.tags = ['anime']
handler.command = /^(shota)$/i
module.exports = handler