class Mango{
    constructor(x,y,r){
        var options = {
            isStatic : true,
            'density':1.5,
            'friction': 1.5,
            'restitution':0.75
        }
        
        this.body = Bodies.circle(x,y,r,options)
        this.r = r;
        World.add(world,this.body)

        this.image = loadImage("mango.png")
    }

    display()
    {
        var mangoPos = this.body.position
        imageMode(CENTER);
        image(this.image,mangoPos.x,mangoPos.y,50,50);
    }
}