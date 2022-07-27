/**
* jangan ganti ya kakak kakak sekalian
* ini cuma buat ninggalin credit gw doang :)
* jangan dihilangin, boleh di tambahin 🐦
**/

let handler = async (m, { conn }) => {
bear = "Source Code"
let esce = 'Terima Kasih Untuk\n\n⎔ Tuhanku\n⎔ Ortuku\n⎔ Penyedia Apikey\n⎔ Nurutomo\n⎔ Adiwajshing\n⎔ RendyCraft\n⎔ Ibnu NR\n⎔ Baka Botz\n⎔ Ariffb25\n⎔ AtenaBot\n⎔ BakaTeam\n⎔ Clara\n⎔ Elyasn\n⎔ Hyzer Official\n⎔ KannaBot\n⎔ VenBotz\n⎔ Dimas Dev\n⎔ User Bot\n\nYang Telah Membantu Berkembangnya Bot Ini.'
conn.sendButtonImg(m.chat, fla + 'Thanks To', esce, wm2, 'Menu', '.menu', m) 
}
handler.help = ['tqto', 'team']
handler.tags = ['info']
handler.command = /^(tqto|team)$/i

module.exports = handler
