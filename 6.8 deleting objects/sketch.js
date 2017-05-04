var bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  var b = new Bubble(mouseX, mouseY);
  bubbles.push(b);
}

function draw() {
  background('#42e2f4');
  //backwards for loop, so that it doesn't get stuck
  for (var i = bubbles.length-1; i >= 0; i--){
    bubbles[i].update();
    bubbles[i].display();
    //if this evaluates to zero, then returns true and object gets deleted
    if (bubbles[i].isFinished()){
      bubbles.splice(i, 1);
    }
  }
}