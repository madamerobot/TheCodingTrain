var bubbles = [];
var toppings = [];
var bg;

function preload() {
  for (var i = 0; i < 3; i++){
  toppings[i] = loadImage('images/topping' + i + '.png');
  }
  bg = loadImage('images/bg.png');
}

function setup() {
  createCanvas(640, 480);
}

function mousePressed(){
var r = floor(random(0, toppings.length));
var b = new Bubble(mouseX, mouseY, toppings[r]);
bubbles.push(b);
}

function draw() {
  background(bg);
  for (var i = bubbles.length - 1; i >= 0; i--){
    bubbles[i].display();
}
}