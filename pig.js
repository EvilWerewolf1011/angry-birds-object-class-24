class Pig {
    constructor(x,y){
        //Define all the properties here

        var body_options = {
            restitution : 0.8
        }

        this.body = Bodies.rectangle (x,y,50,50, body_options);

        this.width = 50;
        this.height = 50;

        World.add(myWorld, this.body);
    }

    //Define all the functions here
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green")
        fill("green");
        rect (0, 0, this.width, this.height);
        pop();

    }
}