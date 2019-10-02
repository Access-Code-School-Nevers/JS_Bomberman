var player = document.getElementById("player");
var positionLeft = player.offsetLeft;
var positionTop = player.offsetTop;
console.log(positionLeft);
document.addEventListener("keydown", movePlayer);

function movePlayer(event) {
var keyCode = event.keyCode;
  if (keyCode == 39) {
    if (positionLeft < 768){
      positionLeft = positionLeft + 32;
      // console.log(positionLeft);
      player.style.left = positionLeft + "px";
    }
  }
  else if (keyCode == 37) {
    if (positionLeft > 0) {
      positionLeft = positionLeft - 32;
      player.style.left = positionLeft + "px";
    }
  }
  else if (keyCode == 38) {
    if (positionTop > 0) {
      positionTop = positionTop - 32;
      player.style.top = positionTop + "px";
    }
  }
  else if (keyCode == 40) {
    if (positionTop < 768) {
      positionTop = positionTop + 32;
      player.style.top = positionTop + "px";
    }
  }

}
