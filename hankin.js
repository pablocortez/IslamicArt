
function Hankin(a, v) {
  this.a = a;
  this.v = v;
  this.end = p5.Vector.add(a, v);

  this.show = function() {
    stroke("#274555");
    strokeWeight(8);
    line(this.a.x, this.a.y, this.end.x, this.end.y);
  }

}
