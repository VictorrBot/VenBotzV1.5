let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Silahkan masukan query', m)
let tetete = `https://api.zacros.my.id/search/alphacoders?query=${text}`
conn.sendButtonImg(m.chat, tetete, `*「🔍」Hasil Dari ${text}*`, wm2, 'DONE', 'thanks', m) 
}
handler.help = ['alphacoders'].map(v => v + ' <query>')
handler.tags = ['anime', 'internet']
handler.command = /^(alphacoders)$/i

module.exports = handler