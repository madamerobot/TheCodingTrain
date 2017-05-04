function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(239,147,48);

  this.display = function() {
    stroke(193,147,26);
    fill(this.col);
    ellipse(this.x, this.y, 40, 40);
  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 24){
      this.col = color (244, 92, 65);
    }
  }
  
  this.move = function (){
  this.x = this.x + random(-1, 1);
  this.y = this.y + random(-1, 1);
  }
}