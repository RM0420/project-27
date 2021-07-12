class Bob{
    constructor(x, y, r){
        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            denisity:1
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}