function Bubble(x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;

  this.display = function() {
    imageMode(CENTER);
    image(this.img,this.x,this.y,180,180);
  }
}