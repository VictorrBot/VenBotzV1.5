/**
* jangan ganti ya kakak kakak sekalian
* ini cuma buat ninggalin credit gw doang :)
* jangan dihilangin, boleh di tambahin š¦
**/

let handler = async (m, { conn }) => {
bear = "Source Code"
let esce = 'Terima Kasih Untuk\n\nā Tuhanku\nā Ortuku\nā Penyedia Apikey\nā Nurutomo\nā Adiwajshing\nā RendyCraft\nā Ibnu NR\nā Baka Botz\nā Ariffb25\nā AtenaBot\nā BakaTeam\nā Clara\nā Elyasn\nā Hyzer Official\nā KannaBot\nā VenBotz\nā Dimas Dev\nā User Bot\n\nYang Telah Membantu Berkembangnya Bot Ini.'
conn.sendButtonImg(m.chat, fla + 'Thanks To', esce, wm2, 'Menu', '.menu', m) 
}
handler.help = ['tqto', 'team']
handler.tags = ['info']
handler.command = /^(tqto|team)$/i

module.exports = handler
