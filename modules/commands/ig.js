/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Imran",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n.🦋🥺..Those feelings are not expressed..\n🤍—Not a bit personal....🥺💥🤍\n🙉🙂!!!.. সব  অনুভূতি হয়না প্রকাশিত।..🙂❤️\n!থাকনা কিছুটা ব্যক্তিগত।..🙂\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n_____ ~💔~ ______\n\n__আর কতদিন একা__থাকবো \n\n-😿🛏️★\n\n______প্লিজ আন্টির মেয়ে \n\n🙈প্রপোজ Me-🐰🍒★\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🍂জীবন নিয়ে গল্প লেখা সহজ💐\n!°কিন্তুু°!\n🌷গল্পের মতো করে জীবন সাজানো খুব কঠিন🦋🍀🤣\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\nলাইভ ︵🌻\n- ❤️🌸 ─ নিয়ম করে হাসতে পারি বলেই\n\nকষ্টগুলো আজও ব্যক্তিগত.!😌\n🌸🌻 🍒😇\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\nলাইভ ︵🌻\n- পুরাতন হয়ে গেলে গাছের\nপাতাও ঝড়ে পড়ে🙂🍂\n-আর আমিতো মানুষ😌\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🐰✨ 𝗧𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲 -🌸\n_ কী আজব দুনিয়া 😅 মন বোঝার মতো কেউ নেই ..! 🙂🥀\n_ অথচ ভুল বোঝার মতো মানুষের অভাব নেই..💚🤣\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\nシ︎𝐒𝐚𝐝 𝐢𝐬 𝐦𝐨𝐨𝐝 𝐧𝐨𝐭 𝐦𝐞𝐭𝐭𝐚𝐫 シ︎\n❥︎❥︎𝐇𝐚𝐩𝐩𝐲 𝐢𝐬 𝐭𝐡𝐞 𝐛𝐞𝐬𝐭 𝐦𝐚𝐝𝐞𝐜𝐢𝐧𝐞 𝐨𝐟 𝐥𝐢𝐟𝐞 ❥︎❥︎🌸😇\nシ︎দুঃখ আর কষ্ট কোনো বেপার নাহ シ︎\n❥︎❥︎জীবনে হাসি খুশি থাকা টাই সবচেয়ে বড় ওষুধ ❥︎❥︎🌸😇🤣\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🦋🍒𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞🧸💫\n'- হাজার ভালোবাসার মধ্যে😊\n- বন্ধুদের ভালোবাসা টাই শ্রেষ্ঠ!💙🌺\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🌻🙂-!-𝗬𝗲𝘀..!!🐰🍒🦋\n_কারো বিরুক্তের!!কারণ হতে চাইনা!! দরকার হলে!!একা থাকবো..!!😊🌺\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n☁️✨🥀মুুল্যটা সবাই বুঝে, তবে🦋\nহারিয়ে যাওয়ার পর 🏡\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🦋প্রিয় তোমার অপেক্ষায় থাকতে থাকতে \nগোলাপ শুকিয়ে গাঞ্জা হয়ে গেছে━❖🐸🌚\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n__রাস্তায় পড়ে থাকা ছেড়া কাগজটাও একদিন কোনো \nদরকারি বইয়ের পৃষ্ঠা ছিল।😊\nআজ প্রয়োজন শেষে পড়ে রয়েছে রাস্তায়..!!🙂💔\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🌺🥀\n- না পাওয়া জিনিসগুলো একটু বেশিই সুন্দর হয়-;!💔🥀\n- যেমন ধরো,,!🙂\n- গুরুপের মেয়েরা....💔🥺☹️\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n❤️🌸কতো মানুষ'কে হাসিয়েছি🖤🦋\n•অথচ দিন শেষে নিজেই হাসতে ভুলে গেছি\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n~সুন্দর বলতে কিছু নেই🌸☺️\n ➪নিজের মন সুন্দর তো দুনিয়া সুন্দর..!!🌻💜🦋\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n💐 FeeL This Line..🤫\nযত একা তত শান্তি..!😅🖤\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n-𝐁𝐥𝐚𝐜𝐤 𝐢𝐬 𝐛𝐞𝐬𝐭🖤🥰\nকালো জিনিস সবার পছন্দ\nBut\n-𝐁𝐥𝐚𝐜𝐤 𝐦𝐞𝐧 𝐧𝐨𝐭 perfect\nকালো মানুৃষটা কারো পছন্দ না_🙂💔\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🍒{𝙁𝙤𝙧𝙚𝙫𝙚𝙧 𝙛𝙖𝙫𝙤𝙪𝙧𝙞𝙩𝙚 𝙡𝙞𝙣𝙚}🌸\n___বিশ্বাস ছাড়া ভালোবাসা অর্থহীন আর অধিকার ছাড়া সম্পর্ক মূল্যহীন-!\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🥰🦋- 𝙍𝙚𝙖𝙡 𝙇𝙤𝙫𝙚 𝙎𝙩𝙤𝙧𝙞𝙚𝙨 𝙉𝙖𝙫𝙚𝙧 𝙃𝙖𝙫𝙚 𝙀𝙣𝙙𝙞𝙣𝙜.\n-  সত্যি কারের ভালোবাসার গল্প কখনো শেষ হয় না! 🌺🙂🥰 🦋\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n~🦋🤍🍒মন থেকে ভালোবেসে দেখো.!😻🥰\n____নিদিষ্ট মানুষ ছাড়া আর অন্য কাউকে ভালো লাগবে না.!🖤🦋🍒\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n💜𝙩𝙝𝙞𝙨 𝘼𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚-!!🦋🐭\n🐰—আফসোস রাখতে নেই...!!😅🥀\nকারন সবাই থাকতে আসে না...!!💔🙂🥀\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n__নতুন একটা 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 শিখলাম.!🙂\n–J𝐓𝐕 মানে.!🌚🤭\n____Jan 𝐓𝐨𝐦𝐚𝐤𝐞 𝐕𝐚𝐥𝐨𝐛𝐚𝐬𝐢.!💚🌺\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🦋তোমার আলোকিত শহরে 🤗🥀\nআমি এক বিরক্ত ছায়া —•☺️✌️\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🏡🌺𝑫𝒓𝒆𝒂𝒎 𝒂𝒃𝒐𝒖𝒕 𝒉𝒊𝒎 𝒕𝒉𝒂𝒕 𝒕𝒉𝒊𝒏𝒌𝒔 𝒐𝒇 𝒚𝒐𝒖☺️🍂💚\n🍒স্বপ্ন তাকে নিয়ে দেখো যে\nতোমাকে নিয়ে ভাবে!🏡🌺\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🦋💜হাসিটা আমার কিন্তু কারনটা আপনি🦋💜\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🌻,🌼🌺𝐅𝐞𝐥𝐢𝐧𝐠𝐬 𝐚𝐫𝐞 𝐯𝐞𝐫𝐲 𝐓𝐫𝐢𝐞𝐝 𝐓𝐨𝐝𝐚𝐲💛\nঅনুভূতি গুলো আজ বড্ড ক্লান্ত.🌻💞\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🌻,🌼🌺𝐅𝐞𝐥𝐢𝐧𝐠𝐬 𝐚𝐫𝐞 𝐯𝐞𝐫𝐲 𝐓𝐫𝐢𝐞𝐝 𝐓𝐨𝐝𝐚𝐲💛\nঅনুভূতি গুলো আজ বড্ড ক্লান্ত.🌻💞\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n.🐰🍒🌸পৃথিবীর সবচেয়ে বড় মানসিক ডাক্তার হচ্ছে  প্রিয় মানুষটা🌼🐰\n🍒আর ওই বালডাই আমার নাই😒😭\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n★🐰🍒𝐓𝐡𝐢𝐬 𝐚𝐛𝐮𝐭 𝐥𝐢𝐧𝐞🐰🍒—আমার অনুভুতি বুঝার ক্ষমত| ক|রে| নেই.!🙂💔★\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🤟𝒔𝒊𝒎𝒑𝒍𝒆 𝒍𝒊𝒇𝒆 𝒊𝒔 𝒂____ 🖤❤️___𝑯𝒂𝒑𝒑𝒚 𝒍𝒊𝒇𝒆😊🥀🐰'𝘁𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲'🌻🍒\n😇যাকে তুমি যত বেশি বুঝবে🥀সে তোমাকে ততো \nবেশি_𝙞𝙜𝙣𝙤𝙧𝙚_করবে🌻🌹এটাই বাস্তব__🙂\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🐰✨𝐭𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞🦋🤍\n_হাসতে শিখো....!☺️\nকাঁদ'তে তো‌ তোমাকে দুনিয়ার মানুষ শিখিয়ে দিবে🦋🤍\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n✍️আজ পর্যন্ত কেউ আমাকে….\n\n😎/সোনা বলে ডাকলো না..!😇\n\n👉- আমি মনে হয় ডায়মন্ড…😌😐\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🦋তুমি চাইলেই আমার প্রেমে পড়তে পারতে🙂\n\nকিন্তুু না তাতো পড়বা না😒\n\nতুমি তো পড়বা ড্রেনে!😅\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🦋তুমি বদলে গেছো তাতে\n\n___ আমার কোন দুঃখ নেই\n\n——আমি আমার বিশ্বাসের জন্য লজ্জিত ,,,💔😅\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🌺প্রিয়🌺\n\n-পূর্ণতা পাওয়ার ইচ্ছা থাকলে!!সব রকম.!!\n\n💚🦋পরিস্থিতিতে!!ভালোবাসা টিকিয়ে!!রাখা সম্ভব!!💖💏\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🥀সময় আমাদের জীবনের কোনো কিছু নষ্ট করে না….!🙂🌼\n\n– শুধু শিখিয়ে দিয়ে যায় বাস্তবতা কি…! 🙂💔✌️\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n💚অসংখ্য মানুষের কাছে প্রিয় হবার থেকে,🥀\n\nনির্দিষ্ট একটা মানুষের প্রিয় হওয়া অনেক শ্রেয়..!😊💕\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🦋-ভালোবাসা!ভুল নয় -🙂\n\n🦋কাউকে অতিরিক্ত বিশ্বাস করাটাই \n\nহলো!!সবচেয়ে বড়!!ভুল 🙂💔\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🦋🍒𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞🧸💫.\n হাজার ভালোবাসার মধ্যে😊\n- বন্ধুদের ভালোবাসা টাই শ্রেষ্ঠ!💙🌺\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷)"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/52RDp2cj/20230729-153958.jpg",
"https://i.postimg.cc/rwKPd2dT/20230729-154018.jpg",
"https://i.postimg.cc/6qtPT7Zb/20230729-154037.jpg",
"https://i.postimg.cc/zv7chJSz/20230729-154056.jpg",
"https://i.postimg.cc/KvcV2MxR/20230729-154114.jpg",
"https://i.postimg.cc/DZqD2QSb/20230729-154136.jpg",
"https://i.postimg.cc/WpwKCnRB/20230729-154151.jpg",
"https://i.postimg.cc/hPCYPttM/20230729-154213.jpg",
"https://i.postimg.cc/FRt85CH4/20230729-154229.jpg",
"https://i.postimg.cc/pL41zc8F/20230729-154415.jpg",
"https://i.postimg.cc/BnLmS5yQ/20230729-154431.jpg",
"https://i.postimg.cc/FRQWnfTF/20230729-154446.jpg",
"https://i.postimg.cc/XqssJs4X/20230729-154503.jpg",
"https://i.postimg.cc/KvY9VhDT/20230729-154523.jpg",
"https://i.postimg.cc/6qWHtksD/20230729-154542.jpg",
"https://i.postimg.cc/fTgHQq8r/20230729-154558.jpg",
"https://i.postimg.cc/ZYH7V5pZ/20230729-154633.jpg",
"https://i.postimg.cc/htkpfzW8/20230729-154658.jpg",
"https://i.postimg.cc/Pq1KZXTg/20230729-154715.jpg",
"https://i.postimg.cc/xCY53wdc/20230729-154736.jpg",
"https://i.postimg.cc/Fs1Zpghg/20230729-154801.jpg",
"https://i.postimg.cc/Xv6knRdQ/20230729-154819.jpg",
"https://i.postimg.cc/90gBVzY7/20230729-154838.jpg",
"https://i.postimg.cc/NfVxz9Mh/20230729-154858.jpg",
"https://i.postimg.cc/G2qFJ9N5/20230729-154917.jpg",
"https://i.postimg.cc/1RvBDY13/20230729-154937.jpg",
"https://i.postimg.cc/SR5Z3czK/20230815-163558.jpg",
"https://i.postimg.cc/Kz5S6pZ8/20230815-163758.jpg",
"https://i.postimg.cc/L4NFvWCy/20230815-163956.jpg",
"https://i.postimg.cc/Jh1QTpdq/20230815-164601.jpg",
"https://i.postimg.cc/pT9xFJxW/20230815-163647.jpg",
"https://i.postimg.cc/zf28vPs2/20230815-163731.jpg",
"https://i.postimg.cc/FKHh9QBJ/20230815-163818.jpg",
"https://i.postimg.cc/T2LYLfYV/20230815-163848.jpg",
"https://i.postimg.cc/s2wbKQKM/20230815-164023.jpg",
"https://i.postimg.cc/Jh19bc3w/20230815-164038.jpg",
"https://i.postimg.cc/4NckZ340/20230815-164054.jpg",
"https://i.postimg.cc/0jLTmTnZ/20230815-164135.jpg",
"https://i.postimg.cc/XJv60cXK/20230815-164148.jpg",
"https://i.postimg.cc/6qgXc2Wr/20230815-164205.jpg",
"https://i.postimg.cc/mrYgrwb0/20230815-164223.jpg",
"https://i.postimg.cc/D0M2Npgb/20230815-164248.jpg",
"https://i.postimg.cc/mDVZYg1j/20230815-164310.jpg",
"https://i.postimg.cc/zXQB2vtP/20230815-164323.jpg",
"https://i.postimg.cc/bvcv8Mjx/20230815-164632.jpg",
"https://i.postimg.cc/QxFN7s8g/20230815-164648.jpg",
"https://i.postimg.cc/g260Cp1c/20230815-164707.jpg",
"https://i.postimg.cc/2y86MZNg/20230815-164733.jpg",
"https://i.postimg.cc/t4xzQqZs/20230729-155000.jpg",
"https://i.postimg.cc/mDb3H7d9/20230729-155015.jpg",
"https://i.postimg.cc/HnNbRRT0/20230729-155044.jpg",
"https://i.postimg.cc/VsZ9JrXS/20230729-155102.jpg",
"https://i.postimg.cc/kXVQKJyT/20230729-155130.jpg",
"https://i.postimg.cc/bvRkpszw/20230729-155148.jpg",
"https://i.postimg.cc/xCTHCnCy/20230729-155221.jpg",
"https://i.postimg.cc/2y1ZQGn1/20230729-155235.jpg",
"https://i.postimg.cc/qBFnJfdy/20230729-155255.jpg",
"https://i.postimg.cc/KzqT3w3X/20230729-155312.jpg",
"https://i.postimg.cc/8cxrtvbt/20230729-155334.jpg",
"https://i.postimg.cc/vH6nDPQj/20230729-155351.jpg",
"https://i.postimg.cc/pLbFjDrd/20230729-155411.jpg",
"https://i.postimg.cc/W1GJwhqw/20230729-155426.jpg",
"https://i.postimg.cc/C1xz1Qd3/20230729-204951.jpg",
"https://i.postimg.cc/7Zrh76fM/20230729-205014.jpg",
"https://i.postimg.cc/vZy9yXLs/20230729-205029.jpg",
"https://i.postimg.cc/HktMk5B7/20230729-205044.jpg",
"https://i.postimg.cc/qqCB6Vr5/20230729-205056.jpg",
"https://i.postimg.cc/fLyRZSrZ/20230729-205113.jpg",
"https://i.postimg.cc/HWJb9rsf/20230729-205131.jpg",
"https://i.postimg.cc/ZY1p7JW0/20230729-205146.jpg",
"https://i.postimg.cc/tCWP886k/20230729-205204.jpg",
"https://i.postimg.cc/nLcDjzPS/20230729-205222.jpg",
"https://i.postimg.cc/sXMGmLyp/20230729-205237.jpg",
"https://i.postimg.cc/wBfshzKq/20230729-205257.jpg",
"https://i.postimg.cc/1RNNNbvS/20230729-205315.jpg",
"https://i.postimg.cc/1X6nhN8X/20230729-205327.jpg",
"https://i.postimg.cc/8PRJZM8n/20230729-205342.jpg",
"https://i.postimg.cc/02RKGZ4w/20230729-205354.jpg",
"https://i.postimg.cc/G2685jh6/20230729-205411.jpg",
"https://i.postimg.cc/BnN803nT/20230729-205428.jpg",
"https://i.postimg.cc/x19kh8nj/20230729-205440.jpg",
"https://i.postimg.cc/CK1RM2RW/20230729-205500.jpg",
"https://i.postimg.cc/RCfN0K0V/20230729-205512.jpg",
"https://i.postimg.cc/43SmY1tn/20230729-205531.jpg",
"https://i.postimg.cc/B6PtH1cp/20230729-205544.jpg",
"https://i.postimg.cc/vTRTzH0s/20230729-205557.jpg",
"https://i.postimg.cc/RZ3kjcn7/20230730-200708.jpg",
"https://i.postimg.cc/GmZWrHkZ/20230730-200832.jpg",
"https://i.postimg.cc/zD04vdCw/20230730-200914.jpg",
"https://i.postimg.cc/RhV8GfBn/20230730-200935.jpg",
"https://i.postimg.cc/xdMWdn5q/20230730-200951.jpg",
"https://i.postimg.cc/fLvpxC6N/20230730-201003.jpg",
"https://i.postimg.cc/0jW44QkX/20230730-201015.jpg",
"https://i.postimg.cc/KzbCkwpf/20230730-201031.jpg",
"https://i.postimg.cc/1XptYhdN/20230729-205620.jpg",
"https://i.postimg.cc/bvqSCpQc/20230729-155439.jpg",
"https://i.postimg.cc/W4SFxCnD/20230729-155457.jpg",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };