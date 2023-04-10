/* ---------------------------------------------------------------------------------/
/                                                                                   /
/             d8888 888    888                        888b     d888 8888888b.       /
/                                                                                   /
/           88 888    888                        8888888 888    888                 /
/          888 888888 888  8.  .d8888b       888Y88888P888 888    888               /
/         d888     "88b 88K           888 888    888                                /
/        d88P                                                                       /
/        Y88b.  888 888  888      X88      888   "   888 888  .d88P                 /
/      d88P     888  "Y888  88888P'      888       888 8888888P"                    /
/                                                                                   / 
/-----------------------------------------------------------------------------------/
/ Author and Main Developer: N.C.T Association                                      /
/ Github: https://github.com/Push-d/N.C.T Association                               /
/ Powered By: Team N.C.T                                                            /
/*-----------------------------------------------------------------------------------*/


require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "918101187835";   // You can Change this number //
}

// -------------------------------------------------------------- //


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://fantox:xrto71r@cluster0.dnlowts.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `N.C.T`;
global.author = process.env.AUTHOR || "by: Team N.C.T";
global.port = process.env.PORT || "8000";

module.exports = {
  mongodb: global.mongodb,
};

// ---------------------Do Not Modify this part------------------- //

global.mess = {
  jobdone: "Job done...",
  useradmin: "Sorry, only *Group Admins* can use this command!",
  botadmin:
    "Sorry, i cant execute this command without being an *Admin* of this group.",
  botowner: "Only my *Owner* can use this command you fool!",
  grouponly: "This command is only made for *Groups*!",
  privateonly: "This command is only made for *Private Chat*!",
  botonly: "Only the *Bot itself* can use this command!",
  waiting: "Please wait....",
  nolink: "Please provide me *link*!",
  error: "An error occurd!",
  banned: `You are *Banned* fron using commands!  \n\nType *${prefa}owner* to submit a request to unban yourself !`,
  bangc: "This Group is *Banned* from using Commands!",
  nonsfw: "Dont be a pervert Broh! This is not a NSFW enabled group!",
};

