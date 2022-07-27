let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/feetg?apikey=Papah-Chan', '', '', m)
}
handler.help = ['feetg']
handler.tags = ['nsfw']
handler.command = /^(feetg)$/i
handler.limit = 1
module.exports = handler