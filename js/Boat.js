class Boat {

  constructor(x, y, width, height,boatPos) {
    var options = {
      isStatic: false
    };
    this.width = width;
    this.boatPos = boatPos;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("assets/boat.png")
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    imageMode(CENTER);
    image(this.image, 0,this.boatPos, this.width, this.height);
    pop();
  }
}
