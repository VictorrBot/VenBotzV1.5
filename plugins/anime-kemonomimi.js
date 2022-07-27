let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/kemonomimi?apikey=Papah-Chan', '', '', m)
}
handler.help = ['kemonomimi']
handler.tags = ['anime']
handler.command = /^(kemonomimi)$/i
module.exports = handler