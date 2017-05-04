var bgcolor;
var button1;
var canvas;
var pink;
var x, r;

function setup() {
  x = 100;
  r = 80;
  
  canvas = createCanvas (300,150);
  pink = color('#fc79fa');
  bgcolor = color('#d2e273');
 
  button1 = createButton('change color no');
  button1.mousePressed(changeBG);
  button1.position(350, 180);
  
  button2 = createButton('make me move');
  button2.mousePressed(moveEll);
  button2.position(350, 210);
  
  button3 = createButton('make me fat');
  button3.mousePressed(growEll);
  button3.position(350, 240);
  
  button4 = createButton('reset this crap');
  button4.mousePressed(reset);
  button4.position(350, 270);
}

function changeBG() {
  bgcolor = color(random(255),random(255),random(255));
}

function moveEll() {
  x = x + 10;
}

function growEll() {
  r = r + 20;
}

function reset(){
  bgcolor = color('#d2e273');
  x = 100;
  r = 80;
}

function draw() {
  background(bgcolor);
  noStroke();
  fill(pink);
  ellipse(x,70,r,r);
}