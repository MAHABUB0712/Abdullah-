module.exports.config = {
	name: "namaj",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Rahad", 
	description: "namaj time",
	commandCategory: "Islamic", 
	usages: "/namaj[Dhaka]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const prompt = args.join(" ");

  if (!prompt) return api.sendMessage("[ ! ] Input Your address", event.threadID, event.messageID);

   
 const RAHAD = `http://api.aladhan.com/v1/timingsByAddress?address=${encodeURIComponent(prompt)}`;

  try {
    const response = await axios.get(RAHAD);
    const timings = response.data.data.timings;

    
    const RahadApiUrl = "https://api.r4h4d-1.repl.co/video/status2";
    const videoResponse = await axios.get(RahadApiUrl);
    const videoUrl = videoResponse.data.url.url;

    const videoBuffer = await axios.get(videoUrl, { responseType: 'arraybuffer' });

    fs.writeFileSync(__dirname + "/cache/video.mp4", Buffer.from(videoBuffer.data, "utf-8"));
    const videoReadStream = fs.createReadStream(__dirname + "/cache/video.mp4");

    const msg = `╔═══════▣𝐈𝐦𝐫𝐚𝐧𝙱𝚘𝚝▣═══════╗\n\nনামাযের-সময়:${prompt}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╰┈► ফজর: ${timings.Fajr}\n\n╰┈► যহর: ${timings.Dhuhr}\n\n╰┈► আছর: ${timings.Asr}\n\n╰┈► সূর্যাস্ত: ${timings.Sunset}\n\n╰┈► মাগরিব: ${timings.Maghrib}\n\n╰┈► ইশা: ${timings.Isha}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╰┈► ইমসাক: ${timings.Imsak}\n\n╰┈► মধ্যরাত: ${timings.Midnight}\n\n╚═══════▣𝐈𝐦𝐫𝐚𝐧𝙱𝚘𝚝▣═══════╝`;

    return api.sendMessage(
      {
        body: msg,
        attachment: videoReadStream,
      },
      event.threadID,
      event.messageID
    );
  } catch (error) {
    
    console.error("API request error:", error);
    return api.sendMessage("[ ! ] An error occurred while fetching data.", event.threadID, event.messageID);
  }
};