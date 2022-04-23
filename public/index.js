Ziko.UI.ExtractAll()
Ziko.Math.ExtractAll()
Ziko.THREE.ExtractAll()
import {header, logo, modeImage} from "./js/header.js";
import {form} from "./js/form.js";
import {scene,resetCamera,saveTransform} from "./js/scene.js";
import {Galerie,GridPreview} from "./js/preview.js"
import {theme,setTheme,getTheme} from "./js/theme.js"
import { footer } from "./js/footer.js";
header.render()
form.render()
scene.render()
Galerie.render().hide()
GridPreview.render().hide()

var App=Flex(
    header,
    form,
    scene,
    Galerie,
    GridPreview,
    footer,
).size("100%","auto").border("none").vertical(0,0)
App.style(theme[getTheme()])
modeImage.updateSrc(theme[getTheme()].src)
logo.updateSrc(theme[getTheme()].logosrc)
modeImage.click(()=>{
    if(getTheme()==="dark")setTheme("light");
    else setTheme("dark")
    modeImage.updateSrc(theme[getTheme()].src);
    logo.updateSrc(theme[getTheme()].logosrc);
    App.style(theme[getTheme()])
})

