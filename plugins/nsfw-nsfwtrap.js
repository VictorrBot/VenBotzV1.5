let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=Papah-Chan', '', '', m)
}
handler.help = ['nsfwtrap']
handler.tags = ['nsfw']
handler.command = /^(nsfwtrap)$/i
handler.limit = 1
module.exports = handler