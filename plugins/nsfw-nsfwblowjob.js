let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=Papah-Chan', '', '', m)
}
handler.help = ['nsfwblowjob']
handler.tags = ['nsfw']
handler.command = /^(nsfwblowjob)$/i
handler.limit = 1
module.exports = handler