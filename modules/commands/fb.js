module.exports.config = {
  name: "fbvideo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nayan",
  description: "fb video",
  commandCategory: "user",
  usages: "link",
  cooldowns: 5,
  dependencies: {
    "nayan-media-downloader": ''
  }
  },

  languages: {
    "vi": {},
        "en": {
            "missing": '[ ! ] Input link.',
            "wait": '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐕𝐈𝐃𝐄𝐎 𝐅𝐎𝐑 𝐘𝐎𝐔\n\n𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝟖...',
          "down": '✅Downloaded Successfully'
        }
    },

start: async function({ nayan, api, nayan1, event, args, lang }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const { ytdown, ndown, tikdown, twitterdown } = require("nayan-media-downloader")
    const { messageID, threadID } = event;
  if (!args[0]) return nayan.reply(lang("missing"), threadID, messageID);


    let np = args.join(" ");
   if (!args[1]) nayan.reply(lang("wait"), nayan1.threadID, (err, info) => setTimeout(() => { nayan.unsendMessage(info.messageID) }, 20000));

 try {
    const res = await ndown(`${np}`);
console.log(res)
    var msg = [];
    let img1 = `${res.data[0].url}`;


    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/fbvideo.mp4", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/fbvideo.mp4"));

    {
        msg += lang("down")
    }

    return nayan.reply({
        body: msg,
        attachment: allimage
    }, nayan1.threadID, nayan1.messageID);
} catch (err) {
    nayan.sendMessage(`error`, nayan1.threadID, nayan1.messageID);  
   }
}
};