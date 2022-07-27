let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/kuni?apikey=Papah-Chan', '', '', m)
}
handler.help = ['kuni']
handler.tags = ['anime']
handler.command = /^(kuni)$/i
handler.limit = 1
module.exports = handler