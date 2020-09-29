class Slingshot { 
    constructor(bodyX, bodyY){
        var options = {
            bodyA : bodyX,
            bodyB : bodyY,
            length : 10,
            stiffness : 0.04
        }

        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }

    display() {
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;

        line(pointA.x, pointA.y, pointB.x, pointB.y);

        //line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.bodyB.position.x, this.sling.bodyB.position.y);

    }


}