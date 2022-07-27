let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, pickRandom(stikerhuuu), m, { packname: "©ShadowBotz", author: "Reza" })
}

handler.customPrefix = /^(huuu|bot|kntl|mmk|anj|anjg|bot anjg|bot anj|anak anjg|anjkontol|anjing|memek|babi|Reza|bot|Oh Bot|Damz)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/fa2bbea0f7de2575cf027.png",//patrick huu
 "https://telegra.ph/file/4a2db7bc9f3f9ecfc007d.png",//anime yntkts
 "https://telegra.ph/file/5f6079714851d9927697e.png",//windah bocil
 "https://telegra.ph/file/d5100b4ce95a0012e88c1.png",//patrick bawa minum
 "https://telegra.ph/file/2ade25087c89f86587853.png",//pak polisi pap tt
 "https://telegra.ph/file/eb2b5e5fff569896c1639.png",//kucing1
 "https://telegra.ph/file/bd8a0e7ea01218531798b.png",//kacamata
 "https://telegra.ph/file/300610838ffa0e6576eb9.png",//patrick pembohong
 "https://telegra.ph/file/954afe562e58c144620ae.png",//spongebob FBI
 "https://telegra.ph/file/72026dcc46e4cb4b6f9ae.png",//mazowski monster inc
 "https://telegra.ph/file/aa9f1bea869e362e6f56e.png",//wkwk
 "https://telegra.ph/file/09bbff0da316ba21b4f8e.png",//kucing2
 "https://telegra.ph/file/2e0637d57e3cc1abcb4a0.png",//patrick anak setan
 "https://telegra.ph/file/d771ae015b5486859d03f.png",//mazowski 2
 "https://telegra.ph/file/9c7606f571c05b4d0c941.png",//hengker
 "https://telegra.ph/file/84fd937257bcd614d6c9e.png",//anjing
 "https://telegra.ph/file/b8ba6989c00c50df049d0.png",//bapak bapak lovee
 "https://telegra.ph/file/2f618fffab6ff7bea32ab.png",//abang saleh
 "https://telegra.ph/file/dfbf483c209a31f01b4e5.png"//hengker2
 "https://telegra.ph/file/a4ac375a8ad62251b20bb.png"//admin gay
 "https://telegra.ph/file/8cf8b30f9d2d9e04a95f3.png"//patrick2
 "https://telegra.ph/file/b665f7883bdc9264b1698.png"//Patrick Eaa
 "https://telegra.ph/file/d0fcaa0706d148f7f3cf0.png"//Kaga Tau
 "https://telegra.ph/file/0224f6fc2d6de10a47f50.png"//BocChan
 "https://telegra.ph/file/c620fb30874ca8fd71f72.png"//Patrick Sesat²
  "https://telegra.ph/file/23282ece12d78387ba5e2.png"//Patrick Dikira Nya Lucu Anjg
 "https://telegra.ph/file/17ddd8709b8f3a5592004.png"//USSR
 "https://telegra.ph/file/5fc902df618e59e3e0877.png"//Ingat Kamu Itu Jomblo
 "https://telegra.ph/file/55e78731af393995db47b.png"//AwokAwok Patrick
]
