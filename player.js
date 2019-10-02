var player = document.getElementById("player");
var positionLeft = player.offsetLeft;
console.log(positionLeft);
document.addEventListener("keydown", movePlayer);

function movePlayer(event) {
var keyCode = event.keyCode;
  if (keyCode == 39) {
    if (positionLeft < 768){
      positionLeft = positionLeft + 32;
      console.log(positionLeft);
      player.style.left = positionLeft + "px";

    }
  }
}
