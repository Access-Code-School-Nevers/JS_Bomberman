var bomb = document.getElementById("bomb");
var limitBomb = false;
var blastCenter = document.getElementById("blastCenter");
var blastTop = document.getElementById("blastTop");
var blastBottom = document.getElementById("blastBottom");
var blastLeft = document.getElementById("blastRight");
var blastRight = document.getElementById("blastLeft");
document.addEventListener("keydown", dropBomb);

function dropBomb(event) {
  var keyCode = event.keyCode;
  if (keyCode == 32) {
    if (limitBomb == false) {
      limitBomb = true;
      bomb.style.display = "block";
      bomb.style.top = positionTop + "px";
      bomb.style.left = positionLeft + "px";
      setTimeout(bombBlast, 3000);
      setTimeout(bombExplosion, 3000);
      setTimeout(blastDisparition, 4000);
    }
  }
}

function bombExplosion() {
  bomb.style.display = "none";
  limitBomb = false;
}

function bombBlast() {
  blastCenter.style.display = "block";
  blastCenter.style.top = bomb.offsetTop + "px";
  blastCenter.style.left = bomb.offsetLeft + "px";

  blastTop.style.display = "block";
  blastTop.style.top = bomb.offsetTop - 32 + "px";
  blastTop.style.left = bomb.offsetLeft + "px";

  blastBottom.style.display = "block";
  blastBottom.style.top = bomb.offsetTop + 32 + "px";
  blastBottom.style.left = bomb.offsetLeft + "px";

  blastLeft.style.display = "block";
  blastLeft.style.top = bomb.offsetTop + "px";
  blastLeft.style.left = bomb.offsetLeft - 32 + "px";

  blastRight.style.display = "block";
  blastRight.style.top = bomb.offsetTop + "px";
  blastRight.style.left = bomb.offsetLeft + 32 + "px";
}
function blastDisparition() {
  blastCenter.style.display = "none";
  blastTop.style.display = "none";
  blastBottom.style.display = "none";
  blastLeft.style.display = "none";
  blastRight.style.display = "none";
}
