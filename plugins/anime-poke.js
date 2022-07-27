let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/poke?apikey=Papah-Chan', '', '', m)
}
handler.help = ['poke']
handler.tags = ['anime']
handler.command = /^(poke)$/i
module.exports = handler