
var bomb = document.getElementById("bomb");
document.addEventListener("keydown", dropBomb);

function dropBomb(event) {
  var keyCode = event.keyCode;
    if (keyCode == 32) {
      bomb.style.display = "block";
    }
}
