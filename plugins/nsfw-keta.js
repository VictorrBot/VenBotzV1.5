let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/keta?apikey=Papah-Chan', '', '', m)
}
handler.help = ['keta']
handler.tags = ['nsfw']
handler.command = /^(keta)$/i
handler.limit = 1
module.exports = handler