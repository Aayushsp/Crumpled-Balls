
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,200,60);
	ground = new Ground();
	dustbin = new Dustbin(600,590,120,10);
	dustbin2 = new Dustbin(540,550,10,90);
	dustbin3 = new Dustbin(660,550,10,90);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);

  paper.display();
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}



