var elem = document.getElementsByClassName('enemies');
var enemiesMoveLeft = elem.offsetLeft;
var enemiesMoveTop = elem.offsetTop;
var pos = 0;
var id = setInterval (frame, 1000);

function moveEnemies() {
  // var elem = document.getElementsByClassName('enemies');
  // var pos = 0;
  // var id = setInterval (frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      
    // pos ++;
    // elem.style.top = pos + 'px';
    // elem.style.left = pos + 'px';
    }
  }
}
