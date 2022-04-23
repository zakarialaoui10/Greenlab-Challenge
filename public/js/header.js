import { resetAll } from "./db.js";

Ziko.UI.ExtractAll()
Ziko.Math.ExtractAll()
Ziko.THREE.ExtractAll()
var modeImage=image("./assets/dark.png","30px","auto").border("none").cursor("pointer");
var logo=image("./assets/logo.png","auto","100%").border("none")
var refresh=image("./assets/refresh.png","30px","auto").border("none").cursor("pointer").click(()=>location.reload())
var refreshSetting=image("./assets/clear.png","30px","auto").border("none").cursor("pointer").click(()=>resetAll())
var help=image("./assets/help.png","30px","auto").border("none").link("https://github.com/zakarialaoui10/Greenlab-Challenge","_blank")
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
if(window.innerWidth<700){
    help.hide()
    refresh.hide()
    refreshSetting.hide()
}
export{header,modeImage,logo}