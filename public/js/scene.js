Ziko.UI.ExtractAll()
Ziko.Math.ExtractAll()
Ziko.THREE.ExtractAll()
import {backgroundInput, ExcelHandler, nameText, txt} from "./form.js"
import {setStyle,getStyle,setPosition,getPosition} from "./db.js"
import {Galerie,GridPreview} from "./preview.js"
txt[5]=image("./assets/icon.png","50px").border("none");
txt[6]=image("./assets/logoBlack.png","100px").border("none")
//var {setStyle,getStyle,setPosition,getPosition}=db;
var scene=Css3D("1170px","827px").style({minHeight:"70vh",zIndex:2}).margin("10px auto").orbitOn().background("#ddd").border("1px solid black").style({
	boxShadow:"1px 1px 5px white,-1px -1px 10px black"
})
scene.camera.translateZ(200);
var backgroundImage=image("");
scene.addCss(backgroundImage).position(0,0,-2);
var t=new Array(5).fill(null);
t=t.map((n,i)=>scene.addCss(txt[i].style(setStyle(i))).position(...getPosition(i)))
t[5]=scene.addCss(txt[5]).position(...getPosition(5))
t[6]=scene.addCss(txt[6]).position(...getPosition(6))

txt.map((n,i)=>n.mousedown(()=>{
  scene.setTransform(t[i]);
}))
scene.addGl(gridH(1000,100).rotX(PI/2))
var saveTransform=()=>t.map((n,i)=>setPosition(i,Object.values(n.mesh.position)))
var resetCamera=()=>{
   saveTransform()
   scene.camera.rotation.x=-6.123233995736766e-17;
   scene.camera.rotation.y=0;
   scene.camera.rotation.z=0;
   scene.camera.position.x=0;
   scene.camera.position.y=1.8369701987210297e-14;
   scene.camera.position.z=300
   scene.renderGl().renderCss()
}
async function handleImageAsync(e) {
    const reader = new FileReader();
    const img = new Image();
    reader.onload = function (event) {
      img.src = event.target.result;
      backgroundImage.updateSrc(img.src)
    };
    reader.readAsDataURL(e.target.files[0]);
    this.img = img;
}

var images=[],pdfs=[]
var toImage=(i=0)=>{
    resetCamera()
    var node = scene.element.children[1];
    Galerie.show()
htmlToImage.toPng(node)
  .then(function (dataUrl) {
  	var im=new Image()
  	im.src=dataUrl;
  	images[i]=image(im.src).render(true).background("white");
   Galerie.addTrack(images[i].size("500px","auto"))
  	var doc = new jspdf.jsPDF('l', 'mm', 'a4');
    doc.addImage(im.src, 'JPEG', 0, 0);
    pdfs[i]=doc;
    const pdfo = new File([doc.output("blob")],names[i]+".pdf", {
      type: "application/pdf",
  });
  
  console.log(pdfo);
  var a=document.createElement("a");
  a.innerHTML=names[i];
  a.href=pdfo;
  document.body.appendChild(a)
  })
  .catch(function (error) {
    console.error('oops, something went wrong!', error);
  });
}

var names=[],id=[],save=[]
async function handleFileAsync(e) {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
   GridPreview.show()     
      const workbook = XLSX.read(data);
      workbook.SheetNames.forEach(sheet => {
          let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
          var arr = rowObject.map(n => Object.values(n));
          id=arange(1,arr.length+1,1);
          save=new Array(arr.length).fill("download");
          arr.map((n,i)=>names[i]=arr[i][1]);
          var GridData=matrix([id,names,save]).T.arr;
        	for(let i=0;i<GridData.length;i++){
        		GridData[i][0]=text(GridData[i][0])
        		GridData[i][1]=text(GridData[i][1])          
        		GridData[i][2]=image("./assets/download.png","50px","50px").cursor("pointer").border("none").click(()=>pdfs[i].save(names[i]))
        	}
          GridPreview.append(...GridData.flat(1))        
  })
    names.map((n,i)=>{
       setTimeout(() => {
         nameText.setValue(names[i]);
         toImage(i)      
       }, 100);
   });
  }

ExcelHandler.onchange((e)=>handleFileAsync(e).then(()=>{
  //saveTransform()
   //console.log("done")
   //names=[];
   id=[];
   save=[];
   pdfs=[];
   images=[];
}));
backgroundInput.onchange(handleImageAsync)
export{scene,backgroundImage,resetCamera,saveTransform,toImage}