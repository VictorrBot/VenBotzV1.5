let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/femdom?apikey=Papah-Chan', '', '', m)
}
handler.help = ['femdom']
handler.tags = ['nsfw']
handler.command = /^(femdom)$/i
handler.limit = 1
module.exports = handler