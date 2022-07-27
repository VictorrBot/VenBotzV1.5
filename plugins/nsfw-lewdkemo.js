let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/lewdkemo?apikey=Papah-Chan', '', '', m)
}
handler.help = ['lewdkemo']
handler.tags = ['nsfw']
handler.command = /^(lewdkemo)$/i
handler.limit = 1
module.exports = handler