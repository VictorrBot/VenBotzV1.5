let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/elf?apikey=Papah-Chan', '', '', m)
}
handler.help = ['elf']
handler.tags = ['anime']
handler.command = /^(elf)$/i
module.exports = handler