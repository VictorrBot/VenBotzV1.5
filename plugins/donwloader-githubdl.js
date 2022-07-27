let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw '*「❗」Masukkan Username-nya*'
if (!args[1]) throw '*「❗」Masukkan Repository-nya*'
if (!args[2]) throw '*「❗」Masukkan Branch-nya'
let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/${args[2]}.zip`
//F
m.reply(`*「⏳」Compressing Data To File Zip*`)
conn.sendFile( m.chat, url, `${args[1]} ${args[2]}.zip`, null, m)

}
handler.help = ['githubdl']
handler.tags = ['github']
handler.command = /githubdl/i

handler.limit = true

module.exports = handler
