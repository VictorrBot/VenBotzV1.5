let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/wallnime?apikey=Papah-Chan', '', '', m)
}
handler.help = ['wallpaperanime']
handler.tags = ['internet']
handler.command = /^(wallpaperanime)$/i

module.exports = handler