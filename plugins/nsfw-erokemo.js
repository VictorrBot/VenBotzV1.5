let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/erokemo?apikey=Papah-Chan', '', '', m)
}
handler.help = ['erokemo']
handler.tags = ['nsfw']
handler.command = /^(erokemo)$/i
handler.limit = 1
module.exports = handler