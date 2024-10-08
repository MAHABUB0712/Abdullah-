module.exports.config = {
    name: "ig",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MR-Imran",
    description: "video",
    commandCategory: "Box",
    usages: "",
    cooldowns: 0,
    dependencies: []
};

module.exports.run = async function ({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const stream = require("stream");

    try {
        const res = await axios.get("https://knqms9-3000.csb.app/ig");
        const data = res.data.data;
        const title = data.title;
        const url = data.url;


        const videoResponse = await axios.get(url, { responseType: 'stream' });
        const videoStream = videoResponse.data;

        const videoFileName = __dirname + "/cache/video.mp4";
        const writeStream = fs.createWriteStream(videoFileName);

        videoStream.pipe(writeStream);

        writeStream.on("finish", () => {
            const msg = `°「 === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n--❖-- 𝐈𝐭'𝐬 𝗜𝗺𝗿𝗮𝗻(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n__${title}\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗜𝗠𝗥𝗔𝗡 𝗔𝗛𝗠𝗘𝗗(✷‿✷) 」`;

            return api.sendMessage({
                body: msg,
                attachment: fs.createReadStream(videoFileName)
            }, event.threadID, (error, info) => {
                if (error) {
                    console.error("Error sending the video:", error);
                }
                fs.unlinkSync(videoFileName); 
            });
        });
    } catch (error) {
        console.error("Error fetching and sending the video:", error);
        return api.sendMessage("An error occurred while fetching and sending the video.", event.threadID);
    }
}