class SlingShot {

constructor(bodyA, bodyB) {
    var options = {
        bodyA: bodyA,
        bodyB:bodyB,
        length: 15,
        stiffness: 0.06,
    }
    this.sling = Matter.Constraint.create(options);
    World.add(world,this.sling);
}
display() {
var A = this.sling.bodyA.position;
var B = this.sling.bodyB.position;
push ();
strokeWeight(8);
line (A.x,A.y,B.x,B.y);
pop ();

}
}