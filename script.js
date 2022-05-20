function ChangeColor(selection) {
  const box = document.getElementById(selection);
  const resultBox = document.getElementById("b3");
  let color = box.innerHTML;
  console.log(color);
  resultBox.style.backgroundColor = color;

}
let el = document.getElementById("b1");
el.addEventListener("click", function() {
  ChangeColor("b1");
}, false);

 }
let el = document.getElementById("b2");
el.addEventListener("click", function() {
  ChangeColor("b2");
}, false);