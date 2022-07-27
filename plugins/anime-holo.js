let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/holo?apikey=Papah-Chan', '', '', m)
}
handler.help = ['holo']
handler.tags = ['anime']
handler.command = /^(holo)$/i
module.exports = handler