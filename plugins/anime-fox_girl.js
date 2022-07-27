let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/fox_girl?apikey=Papah-Chan', '', '', m)
}
handler.help = ['fox_girl']
handler.tags = ['anime']
handler.command = /^(fox_girl)$/i
module.exports = handler