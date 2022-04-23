import { resetAll } from "./db.js";

Ziko.UI.ExtractAll()
Ziko.Math.ExtractAll()
Ziko.THREE.ExtractAll()
var modeImage=image("./assets/dark.png","auto","100%").border("none").cursor("pointer");
var logo=image("./assets/logo.png","auto","100%").border("none")
var refresh=image("./assets/refresh.png","auto","100%").border("none").cursor("pointer").click(()=>location.reload())
var refreshSetting=image("./assets/clear.png","auto","100%").border("none").cursor("pointer").click(()=>resetAll())
var help=image("./assets/help.png","auto","100%").border("none").link("https://github.com/zakarialaoui10/Greenlab-Challenge")
var header=Header(
    Flex(
        logo,
        refresh,
        refreshSetting,
        help,
        modeImage      
    ).size("100%","100%").horizontal("space-around",0).border("none")
).style({
    width:"90vw",
    height:"50px",
    margin:"10px auto",
    padding:"10px auto",
    top:0,
    zIndex:3
})
//Flex().size("100vw","100px").background("red")
export{header,modeImage,logo}