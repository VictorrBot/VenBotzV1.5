let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/cuddle?apikey=Papah-Chan', '', '', m)
}
handler.help = ['cuddle']
handler.tags = ['anime']
handler.command = /^(cuddle)$/i
module.exports = handler