let red = "red";
let blue = "blue";
let black = "black";
let orange = "orange";
let purple = "purple";
let DEFAULT_OPTIONS = {expressions:false, lockViewport:true,fontSize:24};
  
function getCalculators(){
    
    let els = document.getElementsByTagName("calculator");
    let calculators =[];
    els = Array.from(els);
    for(let i =0;i<els.length;i++){
      let el = els[i];
      let calculator_options ={};
      let math_bounds = {left:-10,bottom:-10,top:10,right:10};
      Object.assign(calculator_options,DEFAULT_OPTIONS);
	    
      if("options" in el.attributes){
           eval(`Object.assign(calculator_options,${el.attributes.options.value})`);
      }
      if("mathbounds" in el.attributes){
	    eval(`Object.assign(math_bounds,${el.attributes.mathbounds.value})`);
      }
      let content = el.innerHTML;
      let lines = content.split("\\ ");
      let expressions =[];
      for(line of lines){
    
        let latex = line.split(";")[0];
        let options = {};
        eval(`Object.assign(options,${line.split(";")[1]})`);
        
        let expression ={latex:latex};
        Object.assign(expression,options);
        expressions.push(expression);
      }
      
      let calc_el = document.createElement("div");
      calc_el.style.width=el.style.width;
      calc_el.style.height=el.style.height;
      el.replaceWith(calc_el);
      let calculator = Desmos.GraphingCalculator(calc_el,calculator_options);
      calculator.setExpressions(expressions);
      calculators.push(calculator);
    }
    return calculators;
}
 
