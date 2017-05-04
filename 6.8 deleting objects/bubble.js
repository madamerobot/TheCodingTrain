function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.lifespan = 150;
  
  this.display = function() {
    stroke(214, 117, 202);
    fill(247, 108, 231, this.lifespan);
    ellipse(this.x, this.y, 100, 100);
  }
  
  this.isFinished = function() {
    if (this.lifespan < 0){
      return true;
    } else {
      return false;
    }
  }
  
  this.update = function (){
  this.x = this.x + random(-1, 1);
  this.y = this.y + random(-1, 1);
  this.lifespan--;
  }
}