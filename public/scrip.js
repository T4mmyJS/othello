const SIZE = 40
const SQUARES = 10
const BORDER = 5

window.onload = () => {
  for (var j = 0; j < SQUARES; j++) {
    var y = j * (SIZE + BORDER)
    for (var i = 0; i < SQUARES; i++) {
      var x = i * (SIZE + BORDER)
      drawSquare(x, y, SIZE + BORDER, "#000")
      drawSquare(x + (BORDER / 2), y + (BORDER / 2), SIZE, "#458B00")
    }
  }
};

function drawSquare(startX, startY, size = SIZE, colour = "#FFFFFF") {
  var board = document.getElementById("game");
  var ctx = board.getContext("2d");
  ctx.fillStyle = colour;
  ctx.fillRect(startX, startY, size, size);
}

function drawBorder(xPos, yPos, width, height, thickness = 1) {
  var board = document.getElementById("game");
  var ctx = board.getContext("2d");
  ctx.fillStyle='#000';
  ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
}