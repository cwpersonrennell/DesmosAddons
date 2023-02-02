var show_solution = false;

var button = document.getElementById('toggle_solution');
try{
  button.addEventListener("click",function(){
    var el = document.getElementById('solution');
    try{
      if(show_solution){

        button.innerHTML = "Show Solution";
        el.classList.add('hide');
        el.classList.remove('show');
      }else{
        button.innerHTML = "Hide Solution";
        el.classList.add('show');
        el.classList.remove('hide');
      }
      show_solution = !show_solution;
    }catch{}//pass
  });
}catch{}//pass
