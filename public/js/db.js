export var styles=new Array(5).fill(null).map(n=>Object.assign({},
    {
        color:"black",
        fontSize:"14",
        fontFamily:"Arial"
    }
    ))
export var position=[
    [0,150,0],
    [0,100,0],
    [0,-50,0],
    [100,-180,0],
    [0,0,0],
    [0,200,0],
    [0,-120,0],
]    
if(!localStorage.getItem("styles"))localStorage.setItem("styles",JSON.stringify(styles));
if(!localStorage.getItem("position"))localStorage.setItem("position",JSON.stringify(position));
export var setStyle=(i,newConfig)=>{
    styles[i]=Object.assign(getStyle(i),newConfig)
    localStorage.setItem("styles",JSON.stringify(styles))
}
export var getStyle=(i)=>{
    return JSON.parse(localStorage.getItem("styles"))[i]
}
export var setPosition=(i,newPosition)=>{
    position[i]=newPosition;
    localStorage.setItem("position",JSON.stringify(position))
}
export var getPosition=(i)=>{
    return JSON.parse(localStorage.getItem("position"))[i]
}
export var resetAll=()=>{
    //localStorage.removeItem("position");
    //localStorage.removeItem("styles");
    location.reload()
}