let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/bts?apikey=Papah-Chan', '', '', m)
}
handler.help = ['bts']
handler.tags = ['image']
handler.command = /^(bts)$/i
module.exports = handler