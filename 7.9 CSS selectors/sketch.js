var pinkslider;
var pinkslidercopy;
var blueslider;
var blueslidercopy;
var canvas;
var paragraphs;
var button;

function setup() {
  
  canvas = createCanvas(400,200);
  canvas.style('float','left');
  canvas.style('padding','10px');
  
  paragraphs = selectAll('.story');
  for (var i = 0; i < paragraphs.length; i++){
    paragraphs[i].style('background','#69e0cc');
    paragraphs[i].style('text-align','center');
  }
  
  pinkslidercopy = createP('Move pink rectangle');
  pinkslidercopy.style('font-family','Helvetica');
  pinkslidercopy.style('font-size','10pt');
  pinkslider = createSlider(20,150,20);
  
  blueslidercopy = createP('Move blue rectangle');
  blueslidercopy.style('font-family','Helvetica');
  blueslidercopy.style('font-size','10pt');
  blueslider = createSlider(20,400,20);
  
  var button = select('#button');
  button.mousePressed(canvasBG);
  button.style('padding','30px');
}

function canvasBG(){
  background(random(255),random(255),random(255));
}

function draw() {
    background('#d6e56b');
    noStroke();
  
  //Blue rect
  fill('#69e0cc');
  rect(blueslider.value(),0,150,400);
  
  //Pink rect
  fill('#f2a9db');
  rect(0,pinkslider.value(),400,50);
}