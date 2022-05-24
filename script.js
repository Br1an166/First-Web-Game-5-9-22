function ChangeColor(selection) {
  const box = document.getElementById(selection);
  const resultBox = document.getElementById("guess1");
  let color = box.innerHTML;
  console.log(color);
  resultBox.style.backgroundColor = color;

}
  function ChangeColor(selection) {
  const box = document.getElementById(selection);
  const resultBox = document.getElementById("guess2");
  let color = box.innerHTML;
  console.log(color);
  resultBox.style.backgroundColor = color;
  }
//const secretWord = ["White", "Black" , "Red" , "Blue" , "Green" , "Yellow"];  
//let randomColor = getRandom();
  

let el = document.getElementById("b1 1");
el.addEventListener("click", function() {
  ChangeColor("b1 1");
}, false);

el = document.getElementById("b2 1");
el.addEventListener("click", function() {
  ChangeColor("b2 1");
}, false);

el = document.getElementById("b3 1");
el.addEventListener("click", function() {
  ChangeColor("b3 1");
}, false);

el = document.getElementById("b4 1");
el.addEventListener("click", function() {
  ChangeColor("b4 1");
}, false);

el = document.getElementById("b5 1");
el.addEventListener("click", function() {
  ChangeColor("b5 1");
}, false);

el = document.getElementById("b6 1");
el.addEventListener("click", function() {
  ChangeColor("b6 1");
}, false);




el = document.getElementById("b1 2");
el.addEventListener("click", function() {
  ChangeColor("b1 2");
}, false);

el = document.getElementById("b2 2");
el.addEventListener("click", function() {
  ChangeColor("b2 2");
}, false);

el = document.getElementById("b3 2");
el.addEventListener("click", function() {
  ChangeColor("b3 2");
}, false);

el = document.getElementById("b4 2");
el.addEventListener("click", function() {
  ChangeColor("b4 2");
}, false);

el = document.getElementById("b5 2");
el.addEventListener("click", function() {
  ChangeColor("b5 2");
}, false);

el = document.getElementById("b6 2");
el.addEventListener("click", function() {
  ChangeColor("b6 2");
}, false);

