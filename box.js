class Box extends Baseclass{
    constructor(x,y,width,height){
        super(x,y,width,height)
        this.image = loadImage("blue.png")
        this.Visibility = 255;
    }
    
display(){
    console.log(this.body.speed)
if(this.body.speed < 3){
    super.display();
}
else{
    World.remove(gameworld,this.body)
    push();
    this.Visibility -= 5;
    tint(255,this.Visibility)
    image(this.image,this.body.position.x,this.body.position.y,80,80)
    pop();

    
}
}
}