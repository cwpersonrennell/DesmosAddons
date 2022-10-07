document.addEventListener("DOMContentLoaded", () => {
  let counter =0;
Desmos.Addons = {};

Desmos.Addons.Label = function(text,x,y,color="blue", labelOrientation=Desmos.LabelOrientations.ABOVE){
    return [{
        latex:String.raw`(${x},${y})`,
        color:color,
        showLabel:true,
        label:text,
        hidden:true,
        secret:true,
        labelOrientation:labelOrientation
    }];
}

Desmos.Addons.draw ={};

Desmos.Addons.draw.arc = function(x,y,r,t0, t1, ccw=true,color="blue"){
    counter++;
    let s = ccw?"":"-";
    return [
        {latex:String.raw`r_{${counter}}=${r}`,hidden:true,secret:true},
        {latex:String.raw`x_{${counter}}=${x}`,hidden:true,secret:true},
        {latex:String.raw`y_{${counter}}=${y}`,hidden:true,secret:true},
        {
            latex:String.raw`(r_{${counter}\cos(${s}t)+x_{${counter}},r_{${counter}}\sin(${s}t)+y_{${counter}})`,
            color:color,
            secret:true,
            parametricDomain:{min:`${t0}`,max:`${t1}`}
        }
    ];
}

console.log(Desmos.Addons);
});

