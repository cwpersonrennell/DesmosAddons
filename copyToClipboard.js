function copyToClipboard(el){
  let text = el.innerHTML;
  let input =document.createElement("input");
  input.value = text;
  document.body.append(input);
  input.select();
  console.log(input);
  document.execCommand("copy");
  document.body.removeChild(input);
}
