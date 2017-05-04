var button;
var slider;
var input;
var submitinput;
var bgcolor;
var newcopy;
var canvas;
var slidercopy;
var inputcopy;
var colorcopy;

function setup() {

bgcolor = color(252,121,250);
newcopy = 'Your text';

canvas = createCanvas (200,200); 

slidercopy = createP('Move the slider to grow the circle');
slidercopy.style('background-color','#d9e291');
slidercopy.style('text-align','center');
slider = createSlider(50,100,20);

inputcopy = createP('Write something in the text field');
inputcopy.style('background-color','#f7d2a3');
inputcopy.style('text-align','center');

input = createInput('');
input.changed(newText);
//submitinput = createButton('send');
//submitinput.mousePressed(newText);

colorcopy = createP('Click to change the background color');
colorcopy.style('background-color','#f7a3cf');
colorcopy.style('text-align','center');

button = createButton('NEW COLOR');
button.mousePressed(newBG);
button.style('background-color','#84e8e8');
button.style('color','white');
button.style('font-family','Helvetica');
button.style('font-weight','bold');
button.style('padding','10px');
button.style('border-style','dashed');
button.style('border-color','pink');

button.mouseOver(hoverbutton);
button.mouseOut(resetbutton);
}

function draw() {
  background(bgcolor);
  fill(47,135,135);
  noStroke();
  ellipse(100,100,slider.value(),slider.value());
  text(newcopy,20,20);
}

function newBG() {
  bgcolor = color(random(255),random(255),random(255));
}

function hoverbutton() {
button.style('background-color','#457575');
}

function resetbutton() {
button.style('background-color','#84e8e8');
}

function newText() {
  newcopy = input.value();
}
