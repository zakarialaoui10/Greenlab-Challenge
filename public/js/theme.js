var colors = ["#e7f5fe", "#88bdff", "#4680c2", "#1778f2", "#1778f2", "#0d66c2"];
var theme={
    dark:{
        background:"#4680c2",
        color:"#eee",
        src:"./assets/light.png",
        logosrc:"./assets/logoBlack.png"
    },
    light:{
        background:"#e7f5fe",
        color:"#333",
        src:"./assets/dark.png",
        logosrc:"./assets/logo.png"
    }
}
if(!localStorage.getItem("theme"))localStorage.setItem("theme","dark");
var setTheme=(mode)=>localStorage.setItem("theme",mode);
var getTheme=()=>localStorage.getItem("theme");
export{setTheme,theme,getTheme}