const div = document.querySelectorAll(".randomColor").forEach((el) =>
  el.addEventListener("click", setCor)
)


function RandomColor() {
  
  let hex = '0123456789ABCDEF'
  let cor = '#';
  for (let i = 0; i < 6; i++) {
    cor += hex[Math.floor(Math.random() * 16)]
  }
  return cor;
}
function setCor() {
  this.style.backgroundColor = RandomColor();
}