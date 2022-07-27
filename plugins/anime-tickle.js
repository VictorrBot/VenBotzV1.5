let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/tickle?apikey=Papah-Chan', '', '', m)
}
handler.help = ['tickle']
handler.tags = ['anime']
handler.command = /^(tickle)$/i
module.exports = handler