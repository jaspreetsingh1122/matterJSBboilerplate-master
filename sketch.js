
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	

	paper= new Paper(100,200,30)
  ground= new Ground(600,380,1200,20)
  db1=new Dustbin(500,320,20,100)
  db2=new Dustbin(700,320,20,100)
  db3=new Dustbin(600,360,220,20)
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.run(engine); 
  drawSprites();
  paper.display();
  ground.display();
  db1.display();
  db2.display();
  db3.display(); 
}

function keyPressed(){
  if(keyWentdown === UP_ARROW){

    Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

  }
}
