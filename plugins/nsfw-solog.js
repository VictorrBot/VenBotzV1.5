let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/solog?apikey=Papah-Chan', '', '', m)
}
handler.help = ['solog']
handler.tags = ['nsfw']
handler.command = /^(solog)$/i
handler.limit = 1
module.exports = handler