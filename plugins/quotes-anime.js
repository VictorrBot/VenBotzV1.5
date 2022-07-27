let fs = require('fs')
let handler = async (m, { conn } ) => {    
let anu =`
─────〔 *Quote Anime* 〕─────

${pickRandom(global.quoteanime)}
`
conn.reply(m.chat, anu, m) 
}
handler.help = ['quoteanime']
handler.tags = ['anime','quote']
handler.command = /^(quoteanime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.quoteanime = [
'"Di dunia ini, di mana ada cahaya, di situ pasti ada bayangan. Selama konsep dan kata pemenang itu ada, pasti akan ada kata pecundang. Egois dalam hal perdamaian menyebabkan perang, dan kebencian lahir untuk melindungi rasa cinta." - Madara Uchiha (Naruto)',
'"Luka akan membuat seseorang berubah." - Kaneki Ken (Tokyo Ghoul)',
'"Sebenarnya aku tak ingin membunuh mereka, tapi Tomura-kun akan menghancurkan semua yang tidak kusukai." - Toga Himiko (My Hero Academia)',
'"Kehidupan normal? apa itu? - Toga Himiko (My Hero Academia)',
'"Kalau itu adalah kenangan yang berarti, jangan dilupakan. Sebab jika manusia mati, mereka hanya bisa hidup dalam kenangan orang lain." - Takagi (Detective Conan)',
'"Bagaimana kamu bisa bergerak maju kalau kamu teris menyesali masa lalu?" - Edward Elric (Fullmetal Alchemist: Brotherhood)',
'"Perbedaan antara pemula dan master adalah bahwa master telah gagal lebih dari yang telah dicoba pemula." - Koro-sensei (Ansatsu Kyoushitsu)',
'"Kita harus menjalani hidup kita sepenuhnya. Kamu tidak pernah tahu, kita mungkin sudah mati besok." - Kaori Miyazono (Shigatsu wa Kimi no Uso)',
'"Kamu tidak akan mampu menghentikan orang yang sedang jatuh cinta kepada orang yang dia cintai." - Ako (Kiss X Sis)',
'"Cinta itu bisa mengubah seseorang jadi buruk atau baik." - Misawa (Tonari no Kaibutsu-Kun)',
'"Kau tidak bisa membeli cinta dan kedamaian dengan uang." - Misa Amane (Death Note)',
'"Cinta membuat orang menjadi kuat dan cinta itu juga yang dapat membuat orang menjadi lemah." - Makarov (Fairy Tail)',
'"Jangan percaya kalau setiap yang berkaca mata itu pintar!" - (Hyuuga Junpei (Kuroko No Basket)',
'"Agar seorang wanita hamil dapat melahirkan, dia harus merasakan sakit saat mengeluarkan semangka dari lubang hidungnya. Agar seorang seniman dapat membuat karya agung, ia harus merasakan sakitnya menarik seluruh galaksi keluar dari pantatnya." - Gintoki Sakata (Gintama)',
'"Aku akan mengambil keripik kentang ... DAN MEMAKANNYA!" - Light Yagami (Death Note)',
'"Apakah kamu tahu betapa bodohnya kita? Jangan remehkan kita." - Kondou Isao (Gintama)',
'"Kalau kau terus berpikir dan tak melakukan apa-apa, kau akan tertinggal jauh." - Killua (Hunter X Hunter)',
'"Tuhan tak akan menempatkan kita di sini melalui derita demi derita bila Ia tak yakin kita bisa melaluinya" - Kano Yuki (Sword Art Online)',
'"Ketika kau bekerja keras dan gagal, penyesalan itu akan cepat berlalu. Berbeda dengan penyesalan ketika tidak berani mencoba." - Akihiko Usami (Junjou Romantica)',
'"Mula-mula, kau harus merubah dirimu sendiri, atau tidak akan ada yang berubah untukmu." - Sakata Gintoki (Gintama)',
'"Katenakya shinu. Kateba ikiru. Tatakawanakareba katenai." - Eren Yeager (Shingeki no Kyojin)!',
'"Nakama o taisestsu ni shinai yatsu wa sore ijou no kuzu da." - Kakashi Hatake (Naruto)',
'"Donna riyuu ga arou to ore wa tomodachi o kizutsukeru yatsu wa yurusanai" - Akagami Shanks (One Piece)',
'"Me ni mienai mon wa shinjinai shugi nan de ne." - Kurosaki Ichigo (Bleach)',
'"Jangan menyerah! Tidaklah memalukan untuk gagal. Yang memalukan adalah tak bisa bangkit lagi!" - Midorima (Kuroko No Basket)',
'"Jalan yang paling menjanjikan untuk sukses adalah mencoba satu kali lagi." (Classroom Crisis)',
'“Jika sepertinya aku tidak punya kesempatan, aku akan melarikan diri dan memikirkan rencana baru, tetapi sebaliknya, aku harus melihat seberapa kuat itu dengan mataku sendiri, kan?” – Rimuru Tempest',
'“Seperti yang baru saja kamu pelajari melalui pengalaman, aku kuat! Dan karena itu, saya berjanji untuk menyelamatkan kalian semua. ” – Rimuru Tempest',
'"Keluarkan hard drive dari komputer saya di rumah... Taruh di bak mandi... Dan pastikan itu benar-benar dihapus." – Rimuru Tempest',
'"Aku meremehkanmu, tapi tidak sebanyak kamu meremehkanku." – Rimuru Tempest',
'“Selama ini saya berada di surga. Tapi waktu yang menyenangkan tidak pernah bertahan lama. Begitulah kehidupan.” – Rimuru Tempest',
'“Istirahatlah. Aku akan melahap semua dosamu bersama denganmu.” – Rimuru Tempest',
'Gak tau mau ngetik apa',
]
