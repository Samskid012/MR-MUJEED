//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349074975984";
global.owner = process.env.OWNER_NUMBER || "2349074975984";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUFnS2V4Rm9pdVVrYmdubGpFamY0MTZ2a0RYRzNUSGhGQ2dxMDlteDBrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibktva0NGdTJsSUtiUWhGWjZmNTNuWk5qc3p6K0xTZTJrSExLNDlGMkRuTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSk55NTlZenlpVGd6am1lMnkzSEJ3VDIvTUdJUTFJdmRud2w4OXBkUjNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxZ0Q2VmJBZ1I3Mzg2TFFwOUs1cnk5NUFHcG5kVEp0QUVUbTBFQVhSVFVNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFNbUFoamlNQUpxdTE1QTBhcVlLUEhBVWlZRml0SGw1SzBXRGpyMUdZSHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBvWWF0UVFONGdsMUlqMG1qeWdWZHlaQStnTGlrSWJJcE5MVTRvNUg2Mm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhCRlQwRzZMaE1qNHFSRG1KU3B4SkVNZEE5RStTY0kyT096RXM1N2cwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidG00cVdhRmFHQ0RrVGN2NnRHNFh4d0xTYXZ0Q2NPWEN5WEJFNTBJaktXZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZFZDdVSDBUQ2d2WUNxUkt0V0xoeDRORlp5NURFbDhKVTV3YmU5RFRzYU12Z1RiaWh6UURYbjM2YUZlTGhBL2tEcTk2aUw0d2VINUhqdWFvODd4QWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiI5dmZybXRaS0FUcFlSNUxodElxYzFKR2FZSGp6SGRwRVg2SzhJVnpzeENjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0UGJIWGJLdlNLYXFhRWYwTjdBcFl3IiwicGhvbmVJZCI6ImI1Zjc2NzI1LTAwNWMtNGEzNy05YTk3LTA2NDVhZjA3NTQ0NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuZEw5SFlCZ0dFRW9qdGdHNFF2bmpYcjJoYWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjh5Zmh3Zy9JbWNvNFFQalQ3WGhnRUp6WlRjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikg5TVkzQ1ZEIiwibWUiOnsiaWQiOiIyMzQ5MDc0OTc1OTg0OjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B5NDg4VUhFSkRqOExzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFIYnhQUE9Vd2pSNk1BcWtYMm1lT3FCQWJEejdkSGZaNVBvWWJUSytjaFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBXSkp2S0RoYzdqSSsyOXl6M21aUCtxVUUxd1EyUjVIY3Q5TFc1cnZPRFhtSDk2Z1VSWUtBclprem8vZ3hHU0hFZVhwQXU3Z2sraUpVSnVvMWJ0OWd3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNMHExbGRvRWlBQlRNWnd1VmRQcDNYNHp1OElLNE0yT0dDYXlMMWVZQWhLYSs2cUc0K3Q4TnFlUjR6bEF2NUpINjg4cTd6M0p2a1ZPbG1valRHV2dpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNzQ5NzU5ODQ6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXaDI4VHp6bE1JMGVqQUtwRjlwbmpxZ1FHdzgrM1IzMmVUNkdHMHl2bklWIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzYxOTI0MTR9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`MR_MUJEEB™`",
  author: process.env.PACK_AUTHER || "MR MUJEED",
  packname: process.env.PACK_NAME || "KING_MUJEEB",
  botname: process.env.BOT_NAME || "MR_MUJEEB",
  ownername: process.env.OWNER_NAME || "MR MUJEED",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
