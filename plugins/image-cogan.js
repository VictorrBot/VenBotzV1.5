let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/cogan?apikey=Papah-Chan', '', '', m)
}
handler.help = ['cogan']
handler.tags = ['image','random']
handler.command = /^(cogan)$/i
module.exports = handler