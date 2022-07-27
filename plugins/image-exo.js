let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/exo?apikey=Papah-Chan', '', '', m)
}
handler.help = ['exo']
handler.tags = ['image']
handler.command = /^(exo)$/i

module.exports = handler