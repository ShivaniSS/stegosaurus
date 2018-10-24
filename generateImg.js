const INPUT = "smaller word"
var ALPHA_MAP = {};
var MAROON;
var PINK;
var GREEN;
var CYAN;
var PURPLE;
var ENCODED_MESSAGE;
const N_COLS = 4;
const N_ROWS = 32;
const X_DIM = 300;
const Y_DIM = 2400;

function setup() {
  createCanvas(X_DIM, Y_DIM);
  background(255, 255, 255);
  noStroke();
  noLoop();
  mapSetup();
  MAROON = color(128, 0, 0);
  PINK = color(252, 0, 172);
  GREEN = color(37, 163, 64);
  CYAN = color(65, 205, 225);
  PURPLE = color(137, 0, 150);
  processInput(INPUT);
  // drawGrid();
  drawEncodedMessage(N_ROWS, N_COLS, 0);
  // Canvas2Image.saveAsImage(canvasObj, width, height, type)
  // saveCanvas("encodedImg", 'jpg');
}

function processInput(inputString) {
  var map = {
        'a': 'q', 'b': 'w', 'c': 'e', 'd': 'r', 'e': 't', 'f': 'y','g': 'u', 
        'h': 'i', 'i': 'o','j': 'p', 'k': 'a', 'l': 's','m': 'd', 'n': 'f', 
        'o': 'g','p': 'h', 'q': 'j', 'r': 'k','s': 'l', 't': 'z', 'u': 'x',
        'v': 'c', 'w': 'v', 'x': 'b','y': 'n', 'z': 'm', ' ': ' ', '.': '.', 
        '?': '?', '!': '!', '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', 
        '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
    };
  var message = inputString.toLowerCase().split('').map((v)=>map[v]);
  // no substition ciipher:
  // var message = inputString.toLowerCase().split(''); 
  ENCODED_MESSAGE = new Array(message.length);
  for (var i = 0; i < message.length; i++) {
    ENCODED_MESSAGE[i] = ALPHA_MAP[message[i]];
  }
  return ENCODED_MESSAGE;
}

function drawGrid() {
  for (var x = 0; x < width; x += width / N_COLS) {
    for (var y = 0; y < height; y += height / N_ROWS) {
      stroke(0);
      strokeWeight(1);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
}

function drawEncodedMessage(N_ROWS, N_COLS, offset) {
  var x = offset;
  var y = 0;
  row_height = Y_DIM / N_ROWS
  col_width = X_DIM / N_COLS
  for (var j = 0; j < ENCODED_MESSAGE.length; j++) {
    randTriangle1 = getRandomInt(4);
    randTriangle2 = getRandomInt(4);
    randRect = getRandomInt(3);
    code = ENCODED_MESSAGE[j];
    x = offset;
    code.map(function(i) {
      instr = i.split(" ");
      fillColor = instr[1];
      switch (fillColor) {
        case "MAROON":
          fillColor = MAROON;
          break;
        case "PINK":
          fillColor = PINK;
          break;
        case "PURPLE":
          fillColor = PURPLE;
          break;
        case "CYAN":
          fillColor = CYAN;
          break;
        case "GREEN": 
          fillColor = GREEN;
          break;
      }
      shape = instr[0];
      switch (shape) {
        case "circle":
          for (var x_offset = 0; x_offset < N_COLS; x_offset++) {
            drawCircle(x + 75 * x_offset, y, fillColor);
          }
          break;
        case "triangle1":
          switch (randTriangle1) {
            case 0:
              for (var x_offset = 0; x_offset < N_COLS; x_offset++) {
                drawTallTriangleD(x + 75 * x_offset, y, fillColor);
              }
              break;
            case 1:
              for (var x_offset = 0; x_offset < N_COLS; x_offset++) {
                drawTallTriangleU(x + 75 * x_offset, y, fillColor);
              }
              break;
            case 2:
              for (var x_offset = 0; x_offset < N_COLS; x_offset++) {
                drawShortTriangleU(x + 75 * x_offset, y, fillColor);
              }
              break;
            case 3:
              for (var x_offset = 0; x_offset < N_COLS; x_offset++) {
                drawShortTriangleD(x + 75 * x_offset, y, fillColor);
              }
              break; 
          }
          break;
        case "triangle2":
          switch (randTriangle2) {
            case 0:
              for (var x_offset = 0; x_offset < N_COLS; x_offset++) {
                drawTallTriangleD(x + 75 * x_offset, y, fillColor);
              }
              break;
            case 1:
              for (var x_offset = 0; x_offset < N_COLS; x_offset++) {
                drawTallTriangleU(x + x_offset, y, fillColor);
              }
              break;
            case 2:
              for (var x_offset = 0; x_offset < N_COLS; x_offset++) {
                drawShortTriangleU(x + 75 * x_offset, y, fillColor);
              }
              break;
            case 3:
              for (var x_offset = 0; x_offset < N_COLS; x_offset++) {
                drawShortTriangleD(x + 75 * x_offset, y, fillColor);
              }
              break; 
          }
          break;
        // case "tallTriangleD":
        //   drawTallTriangleD(x, y, fillColor);
        //   break;
        // case "shortTriangleU":
        //   drawShortTriangleU(x, y, fillColor);
        //   break;
        // case "shortTriangleD":
        //   drawShortTriangleD(x, y, fillColor);
        //   break;
        case "rectangle":
          switch (randRect) {
            case 0:
              for (var x_offset = 0; x_offset < N_COLS; x_offset++) {
                drawTallRect(x + 75 * x_offset, y, fillColor);
              }
              break;
            case 1:
              for (var x_offset = 0; x_offset < N_COLS; x_offset++) {
                drawLongRect(x + 75 * x_offset, y, fillColor);
              }
              break;
            case 2:
              for (var x_offset = 0; x_offset < N_COLS; x_offset++) {
                drawSquare(x + 75 * x_offset, y, fillColor);
              }
              break;
          }
          break;
        // case "tallRectangle":
        //   drawTallRect(x, y, fillColor);
        //   break;
        // case "longRectangle":
        //   drawLongRect(x, y, fillColor);
        //   break;
        // case "square":
        //   drawSquare(x, y, fillColor);
        //   break;
        case "funkyShape":
          for (var x_offset = 0; x_offset < N_COLS; x_offset++) {
            drawFunkyShape(x + 75 * x_offset, y, fillColor);
          }
          break;
        case "pentagon":
          for (var x_offset = 0; x_offset < N_COLS; x_offset++) {
            drawPentagon(x + 75 * x_offset, y, fillColor);
          }
          break;
      }
      x += col_width / 3;
      instr = i.split(" ");
    });
    y += row_height;
    x += width / N_ROWS / 2
  } 
}

function mapSetup() {
  ALPHA_MAP["a"] = ["circle PURPLE", "circle GREEN", "circle PURPLE"];
  ALPHA_MAP["b"] = ["rectangle MAROON", "rectangle MAROON", "pentagon PURPLE"];;
  ALPHA_MAP["c"] = ["triangle1 CYAN", "triangle2 PINK", "triangle1 CYAN"];
  ALPHA_MAP["d"] = ["triangle1 PINK", "triangle2 CYAN", "triangle1 PINK"];
  ALPHA_MAP["e"] = ["funkyShape PURPLE", "circle GREEN", "funkyShape PURPLE"];
  ALPHA_MAP["f"] = ["rectangle MAROON", "rectangle PINK", "rectangle MAROON"];
  ALPHA_MAP["g"] = ["circle CYAN", "rectangle PINK", "rectangle PINK"];
  ALPHA_MAP["h"] = ["funkyShape PURPLE", "funkyShape PINK", "funkyShape GREEN"];
  ALPHA_MAP["i"] = ["pentagon MAROON", "rectangle PINK", "pentagon MAROON"];
  ALPHA_MAP["j"] = ["triangle1 PURPLE", "triangle2 GREEN", "triangle1 PURPLE"];
  ALPHA_MAP["k"] = ["pentagon CYAN", "funkyShape GREEN", "pentagon CYAN"];
  ALPHA_MAP["l"] = ["pentagon PURPLE", "triangle1 PURPLE", "pentagon PURPLE"];
  ALPHA_MAP["m"] = ["funkyShape GREEN", "pentagon PURPLE", "funkyShape GREEN"];
  ALPHA_MAP["n"] = ["rectangle MAROON", "pentagon CYAN", "rectangle MAROON"];
  ALPHA_MAP["o"] = ["circle CYAN", "funkyShape MAROON", "circle CYAN"];
  ALPHA_MAP["p"] = ["pentagon GREEN", "circle PURPLE", "pentagon GREEN"];
  ALPHA_MAP["q"] = ["pentagon PURPLE", "pentagon CYAN", "pentagon GREEN"];
  ALPHA_MAP["r"] = ["funkyShape CYAN", "funkyShape PURPLE", "funkyShape CYAN"];
  ALPHA_MAP["s"] = ["rectangle GREEN", "rectangle MAROON", "rectangle GREEN"];
  ALPHA_MAP["t"] = ["rectangle CYAN", "triangle1 PINK", "triangle1 PINK"];
  ALPHA_MAP["u"] = ["funkyShape MAROON", "rectangle CYAN", "rectangle CYAN"];
  ALPHA_MAP["v"] = ["triangle1 PINK", "triangle1 PINK", "rectangle CYAN"];
  ALPHA_MAP["w"] = ["rectangle GREEN", "rectangle MAROON", "rectangle MAROON"];
  ALPHA_MAP["x"] = ["triangle1 MAROON", "triangle2 MAROON", "triangle1 MAROON"];
  ALPHA_MAP["y"] = ["circle PINK", "rectangle MAROON", "circle PINK"];
  ALPHA_MAP["z"] = ["circle MAROON", "circle MAROON", "circle MAROON"];
  ALPHA_MAP[" "] = ["circle CYAN", "circle GREEN", "circle PINK"];
  ALPHA_MAP["."] = ["circle PURPLE", "triangle1 CYAN", "circle PURPLE"];
  ALPHA_MAP["?"] = ["circle PURPLE", "triangle1 MAROON", "circle PURPLE"];
  ALPHA_MAP["!"] = ["triangle1 CYAN", "circle PURPLE", "circle PURPLE"];  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function drawTallRect(x1, y1, fillColor) {
  const w = 20;
  const h = 55;
  fill(fillColor);
  rect(x1, y1, w, h);
}

function drawLongRect(x1, y1, fillColor) {
  const w = 20;
  const h = 10;
  y1 += w;
  fill(fillColor);
  rect(x1, y1, w, h);
}

function drawSquare(x1, y1, fillColor) {
  const w = 20;
  const h = 20;
  fill(fillColor);
  rect(x1, y1 + h, w, h);
}

function drawTallTriangleD(x1, y1, fillColor) {
  const h = 55;
  const b = 20;
  fill(fillColor);
  triangle(x1, y1, x1 + b, y1, x1 + b / 2, y1 + h);
}

function drawTallTriangleU(x1, y1, fillColor) {
  const h = 55;
  const b = 20;
  y1 += h;
  fill(fillColor);
  triangle(x1, y1, x1 + b, y1, x1 + b / 2, y1 - h);
}

function drawShortTriangleD(x1, y1, fillColor) {
  const h = 30;
  const b = 20;
  fill(fillColor);
  triangle(x1, y1, x1 + b, y1, x1 + b / 2, y1 + h);
}

function drawShortTriangleU(x1, y1, fillColor) {
  const h = 30;
  const b = 20;
  y1 += 3 * h / 2;
  fill(fillColor);
  triangle(x1, y1, x1 + b, y1, x1 + b / 2, y1 - h);
}

function drawCircle(x1, y1, fillColor) {
  const r = 20;
  fill(fillColor);
  ellipse(x1 + r / 2, y1 + 3 / 2 * r, r, r);
}

function drawFunkyShape(x1, y1, fillColor) {
  const w = 20;
  const h = 20;
  y1 += h;
  fill(fillColor);
  beginShape();
  vertex(x1, y1);
  vertex(x1 + w / 2, y1 + h / 4);
  vertex(x1 + w, y1);
  vertex(x1 + 3 * w / 4, y1 + h / 2);
  vertex(x1 + w, y1 + h);
  vertex(x1 + w / 2, y1 + 3 * h / 4);
  vertex(x1, y1 + h);
  vertex(x1 + w / 4, y1 + h / 2);
  vertex(x1, y1);
  endShape();
}

function drawPentagon(x1, y1, fillColor) {
  fill(fillColor);
  const r = 10;
  y1 += r * 2;
  push();
  translate(x1 + r, y1 + r);
  scale(1, -1);
  rotate(HALF_PI);
  beginShape();
  for (i = 0; i < 5; i++) {
    vertex(r * cos(TWO_PI * i / 5), r * sin(TWO_PI * i / 5));
  }
  endShape(CLOSE);
  pop();
}