let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/estetic?apikey=Papah-Chan', '', '', m)
}
handler.help = ['aesthetic']
handler.tags = ['image']
handler.command = /^(aesthetic)$/i

module.exports = handler