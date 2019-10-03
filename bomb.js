var bomb = document.getElementById("bomb");
var blastCenter = document.getElementById("blastCenter");
var blastTop = document.getElementById("blastTop");
var blastBottom = document.getElementById("blastBottom");
var blastLeft = document.getElementById("blastRight");
var blastRight = document.getElementById("blastLeft");
var limitBomb = false;
var enemy0 = document.getElementById("enemy0");
var enemy1 = document.getElementById("enemy1");
var enemy2 = document.getElementById("enemy2");
var enemy3 = document.getElementById("enemy3");
var enemy0Top = enemy0.offsetTop;
var enemy0Left = enemy0.offsetLeft;
var enemy1Top = enemy1.offsetTop;
var enemy1Left = enemy1.offsetLeft;
var enemy2Top = enemy2.offsetTop;
var enemy2Left = enemy2.offsetLeft;
var enemy3Top = enemy3.offsetTop;
var enemy3Left = enemy3.offsetLeft;

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
  if (bomb.offsetTop == positionTop && bomb.offsetLeft == positionLeft){
    player.style.display = "none";
    modal.style.display = "block";
  }
  else if (bomb.offsetTop == enemy0Top && bomb.offsetLeft == enemy0Left){
    enemy0.style.display = "none";
  }
  else if (bomb.offsetTop == enemy1Top && bomb.offsetLeft == enemy1Left){
    enemy1.style.display = "none";
  }
  else if (bomb.offsetTop == enemy2Top && bomb.offsetLeft == enemy2Left){
    enemy2.style.display = "none";
  }
  else if (bomb.offsetTop == enemy3Top && bomb.offsetLeft == enemy3Left){
    enemy3.style.display = "none";
  }

  blastTop.style.display = "block";
  blastTop.style.top = bomb.offsetTop - 32 + "px";
  blastTop.style.left = bomb.offsetLeft + "px";
  if (bomb.offsetTop - 32 == positionTop && bomb.offsetLeft == positionLeft){
  player.style.display = "none";
  modal.style.display = "block";
  }
  else if (bomb.offsetTop - 32 == enemy0Top && bomb.offsetLeft == enemy0Left){
    enemy0.style.display = "none";
  }
  else if (bomb.offsetTop - 32 == enemy1Top && bomb.offsetLeft == enemy1Left){
    enemy1.style.display = "none";
  }
  else if (bomb.offsetTop - 32 == enemy2Top && bomb.offsetLeft == enemy2Left){
    enemy2.style.display = "none";
  }
  else if (bomb.offsetTop - 32 == enemy3Top && bomb.offsetLeft == enemy3Left){
    enemy3.style.display = "none";
  }

  blastBottom.style.display = "block";
  blastBottom.style.top = bomb.offsetTop + 32 + "px";
  blastBottom.style.left = bomb.offsetLeft + "px";
  if (bomb.offsetTop + 32 == positionTop && bomb.offsetLeft == positionLeft){
    player.style.display = "none";
    modal.style.display = "block";
  }
  else if (bomb.offsetTop + 32 == enemy0Top && bomb.offsetLeft == enemy0Left){
    enemy0.style.display = "none";
  }
  else if (bomb.offsetTop + 32 == enemy1Top && bomb.offsetLeft == enemy1Left){
    enemy1.style.display = "none";
  }
  else if (bomb.offsetTop + 32 == enemy2Top && bomb.offsetLeft == enemy2Left){
    enemy2.style.display = "none";
  }
  else if (bomb.offsetTop + 32 == enemy3Top && bomb.offsetLeft == enemy3Left){
    enemy3.style.display = "none";
  }

  blastLeft.style.display = "block";
  blastLeft.style.top = bomb.offsetTop + "px";
  blastLeft.style.left = bomb.offsetLeft - 32 + "px";
  if (bomb.offsetTop == positionTop && bomb.offsetLeft - 32 == positionLeft){
    player.style.display = "none";
    modal.style.display = "block";
  }
  else if (bomb.offsetTop == enemy0Top && bomb.offsetLeft - 32 == enemy0Left){
    enemy0.style.display = "none";
  }
  else if (bomb.offsetTop == enemy1Top && bomb.offsetLeft - 32 == enemy1Left){
    enemy1.style.display = "none";
  }
  else if (bomb.offsetTop == enemy2Top && bomb.offsetLeft - 32 == enemy2Left){
    enemy2.style.display = "none";
  }
  else if (bomb.offsetTop == enemy3Top && bomb.offsetLeft - 32 == enemy3Left){
    enemy3.style.display = "none";
  }

  blastRight.style.display = "block";
  blastRight.style.top = bomb.offsetTop + "px";
  blastRight.style.left = bomb.offsetLeft + 32 + "px";
  if (bomb.offsetTop == positionTop && bomb.offsetLeft + 32 == positionLeft){
    player.style.display = "none";
    modal.style.display = "block";
  }
  else if (bomb.offsetTop == enemy0Top && bomb.offsetLeft + 32 == enemy0Left){
    enemy0.style.display = "none";
  }
  else if (bomb.offsetTop == enemy1Top && bomb.offsetLeft + 32 == enemy1Left){
    enemy1.style.display = "none";
  }
  else if (bomb.offsetTop == enemy2Top && bomb.offsetLeft + 32 == enemy2Left){
    enemy2.style.display = "none";
  }
  else if (bomb.offsetTop == enemy3Top && bomb.offsetLeft + 32 == enemy3Left){
    enemy3.style.display = "none";
  }
}

function blastDisparition() {
  blastCenter.style.display = "none";
  blastTop.style.display = "none";
  blastBottom.style.display = "none";
  blastLeft.style.display = "none";
  blastRight.style.display = "none";
}
