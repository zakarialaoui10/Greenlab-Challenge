import {getStyle,setStyle,styles} from "./db.js"
var dataForm = {
    "Type de Certificat": "",
    "Titre de formation": "",
    "Description de formation": "",
    "Date": "",
    "Nom et Prénoms":null,
    "Image d'arriére plan": null
}
var labels = Object.keys(dataForm).map(n => Flex(text(n).margin("3px 0")).border("none").margin("10px 0").size("300px","auto").vertical(0,0))
var inputs = [];
inputs[0] = input().size("200px","15px")
inputs[0].oninput(() => {Object.assign(dataForm, {
    "Type de Certificat": inputs[0].value
})
txt[0].setValue(inputs[0].value)
})
inputs[1] = input().size("200px","15px")
inputs[1].oninput(() => {Object.assign(dataForm, {
    "Titre de formation": inputs[1].value
})
txt[1].setValue(inputs[1].value)
})
inputs[2] = input().size("200px","15px")
inputs[2].oninput(() => { Object.assign(dataForm, {
    "Description de formation": inputs[2].value
})
txt[2].setValue(inputs[2].value)
})
inputs[3] = inputDate().size("200px","15px")
inputs[3].oninput(() => {Object.assign(dataForm, {
    "Date": inputs[3].value
})
txt[3].setValue(inputs[3].value)
})
inputs[4] = input().setType("file").accept(".xls,.xlsx").size("200px","20px").hide();
var importExcel=Grid(text("import excel file").center,image("./assets/xls-import.png","50px","50px").border("none")).columns(2).size("200px","50px").margin("auto 0").cursor("pointer")
importExcel.click(()=>inputs[4].element.click()).border("none")
var ExcelHandler=inputs[4]
inputs[5] = input().setType("file").cursor("pointer").size("200px","20px")
var backgroundInput=inputs[5];
inputs.map(n=>n.padding("5px"))
var stylesConfig=new Array(5).fill(null).map((n,i)=>
    Grid(
    text("color"),
    text("font size"),
    text("font family"),
    inputColor().width("40px").setValue(getStyle(i).color),
    inputNumber().width("80px").setValue(getStyle(i).fontSize),
    select("Arial","Verdana","Helvetica","Tahoma","Trebuchet MS","Times New Roman","Georgia","Garamond","Courier New","Brush Swcript MT").setSelectedValue(getStyle(i).fontFamily).width("80px")

    ).columns(3).size("250px","auto").spaceAround(1,1).padding("5px").fontSize("1rem").border("none"))
stylesConfig.map((n,i)=>{
    n.items[3].oninput(()=>{
        setStyle(i,{color:n.items[3].value});
        txt[i].color(n.items[3].value)
    });
    n.items[4].oninput(()=>{
        setStyle(i,{fontSize:n.items[4].value+""}) 
        txt[i].style({fontSize:n.items[4].value+"px"})  
    });
    n.items[5].onchange(()=>{
        setStyle(i,{fontFamily:n.items[5].value});
        txt[i].style({fontFamily:n.items[5].value});
    });
})
labels.map((n,i)=>n.append(inputs[i]))
labels.slice(0,5).map((n,i)=>n.append(stylesConfig[i]))
var form=Flex(...labels).resp("300px").style({
    width:"95vw",
    height:"auto",
    margin:"5px auto",
    fontFamily:"verdana",
    justifyContent:"space-around",
    alignItems:"stretch",
    border:"none"
})
form.append(importExcel)
var txt=["Type de Certificat","Titre de formation","Description de formation","Date","Nom Et Prénom"].map((n,i)=>text(n).style({maxWidth:"200px",fontFamily:"arial"}).style({
    color:getStyle(i).color,
    fontSize:getStyle(i).fontSize+"px",
    fontFamily:getStyle(i),
}))
var nameText=txt[4]
export{form,txt,backgroundInput,ExcelHandler,nameText}