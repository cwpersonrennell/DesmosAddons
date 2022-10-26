function copyToClipboard(el){
  let text = el.innerHTML;
  let input =document.createElement("input");
  text.replaceAll(`&gt;`,">");
  text.replaceAll(`&lt;`,"<");
  input.value = text;
  document.body.append(input);
  input.select();
  
  document.execCommand("copy");
  document.body.removeChild(input);
}
