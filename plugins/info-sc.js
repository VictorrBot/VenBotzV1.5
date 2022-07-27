/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 👎🗿
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
*Nih Sc Nya Bang!!* ${ye} 

   *SOURCECODE*   
 *
 *Sc Ori* : https://youtu.be/AXPzjQ5jxx8 *Hyzerr Official*
 *Sc Rocode* : https://VenBotz/VenBotzV2.5 *VenBotz*
 *MediaFire* : ------
 *Github Ven* : https://github.com/venbotz
 *Donasi* : https://trakteer.id/venbotz/tip



_*Jangan Lupa Kasih Start Biar Owner Semangat Untuk
Update Sc Nya Yh!!!, Jangan Asal Main Ambil Aja!!*_`
conn.sendBut(m.chat, esce, wm3, 'Thanks', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
