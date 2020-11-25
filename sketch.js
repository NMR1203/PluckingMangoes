const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var boy,boy_img;
var ground1;
var tree1,tree_img;
var stoneObj;
var mango1,mango2,mango3,mango4,mango5,mango6;
var thread;

function preload()
{
  boy_img=loadImage("boy.png");
  tree_img=loadImage("tree.png")
}

function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;

  boy = Matter.Bodies.rectangle(170,350,10,10);

  ground1 = new Ground(400,390,800,20);

  tree1 = new Tree(660,300,60,165);

  stoneObj = new Stone(150,300,20,20);

  mango1 = new Mango(550,200,35);
  mango2 = new Mango(570,120,35);
  mango3 = new Mango(610,150,35);
  mango4 = new Mango(640,90,35);
  mango5 = new Mango(660,180,35);
  mango6 = new Mango(690,110,35);
  mango7 = new Mango(735,155,35);
  mango8 = new Mango(765,200,35);
  

  thread = new String(stoneObj.body,{x:140,y:315});
  
}

function draw() {
  background("lightblue");  

  Engine.update(engine);
 
  imageMode(CENTER);
  image(boy_img,boy.position.x,boy.position.y,100,150);

  tree1.display();

  ground1.display();

  imageMode(CENTER);
  image(tree_img,650,220,300,350);

  stoneObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  thread.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);

  textFont("papyrus");
  fill("black");
  textSize(15);
  text("Press Space to reset stone",40,40);

}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  thread.fly();
}

function keyPressed(){
  if(keyCode===32) {
    Matter.Body.setPosition(stoneObj.body,{x:140,y:315});
    thread.attach(stoneObj.body);
  }
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
	
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance <= lmango.radius+lstone.radius){
	Matter.Body.setStatic(lmango.body,false);
	}
	
}