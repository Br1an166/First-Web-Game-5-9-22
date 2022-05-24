function ChangeColor(selection) {
  const box = document.getElementById(selection);
  const resultBox = document.getElementById("b0");
  let color = box.innerHTML;
  console.log(color);
  resultBox.style.backgroundColor = color;

}
let el = document.getElementById("b1");
el.addEventListener("click", function() {
  ChangeColor("b1");
}, false);

el = document.getElementById("b2");
el.addEventListener("click", function() {
  ChangeColor("b2");
}, false);

el = document.getElementById("b3");
el.addEventListener("click", function() {
  ChangeColor("b3");
}, false);

el = document.getElementById("b4");
el.addEventListener("click", function() {
  ChangeColor("b4");
}, false);

el = document.getElementById("b5");
el.addEventListener("click", function() {
  ChangeColor("b5");
}, false);

el = document.getElementById("b6");
el.addEventListener("click", function() {
  ChangeColor("b6");
}, false);