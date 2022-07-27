let xfar = require('xfarr-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Masukkan Link\n\nContoh: .ytv720 https://youtube.com/xxxxxx'
  let res = await xfar.Youtube(text)
m.reply('*「❗」Sedang Di Unduh*')
conn.sendFile(m.chat,res.medias[2].url, '', `Youtube Downloader
720p
Jika Masih Blur Berarti Videonya Yang Bermasalah
Atau Bisa Jadi Faktor *MUKA*`, m)

}
handler.help = ['ytv720 <url>']
handler.tags = ['internet']
handler.command = /^ytv720$/i


module.exports = handler
