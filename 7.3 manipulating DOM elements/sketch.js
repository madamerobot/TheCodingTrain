var bleu;
var yellow;
var pink;
var canvas;
var h1;

var x = 100;
var y = 100;

function setup() {
  bleu = color('#54acc4');
  yellow = color('#d2e273');
  pink = color('#fc79fa');
  
  canvas = createCanvas(200,200);
  canvas.position(200,200);
  h1 = createElement ('h1', 'Wait for it..');
}

function mousePressed() {
  createP('Guess no');
  h1.html('Hold on tight');
}

function draw() {
  //background(bleu);
  clear();
  noStroke();
  fill(yellow);
  ellipse(x, y, 80, 80);
  h1.position(x,y);
  x = x + random(-5,5);
}