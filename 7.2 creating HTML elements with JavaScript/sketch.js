var button;

function setup() {
  createCanvas (400,400);
  background('#f4d442');
  button = createButton('click me');
  button.position(200,200);
  button.mousePressed(changeBG);
}

function draw() {

  noStroke();
  fill('#8041f4');
  ellipse(200,200,100,100);
}

function changeBG() {
  var val = random(255);
  background(val);
}