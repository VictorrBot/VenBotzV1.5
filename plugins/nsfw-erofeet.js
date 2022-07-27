let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/erofeet?apikey=Papah-Chan', '', '', m)
}
handler.help = ['erofeet']
handler.tags = ['nsfw']
handler.command = /^(erofeet)$/i
handler.limit = 1
module.exports = handler