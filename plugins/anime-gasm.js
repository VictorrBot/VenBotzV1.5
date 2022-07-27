let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/gasm?apikey=Papah-Chan', '', '', m)
}
handler.help = ['gasm']
handler.tags = ['anime']
handler.command = /^(gasm)$/i
module.exports = handler