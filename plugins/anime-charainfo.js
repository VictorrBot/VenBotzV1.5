//Sc Ori Dari Hyzeer Recode Ven Botz Jangan Di Hapus Anjg//
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, type } = json.results[0]
let charaingfo = `*💬 Name:* ${name}
*💭 Nickname:* ${alternative_names}
*🔗 Link*: ${url}
*👤 Character Type*: ${type}`
  const ftroli = {
    key : {
    remoteJid: '6281248537085@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Character ${name}`, 
    orderTitle: `Reza`,
    thumbnail: 'https://telegra.ph/file/65f657f477c5f0aa8f203.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
  conn.sendFile(m.chat, image_url, '', charaingfo, ftroli)
}
handler.help = ['character <nama>']
handler.tags = ['anime']
handler.command = /^(chara|character)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
// Command - Re Edited -- TOXIC-DEVIL == || Character Type ||
module.exports = handler
