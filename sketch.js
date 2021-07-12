
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bo5;
var rope1, rope2, rope3, rope4, rope5;
var platform;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter = 30

	//Create the Bodies Here.
    platform = new Platform(350, 50, 700, 30);

	bob1 = new Bob(290, 600, 30);
	bob2 = new Bob(320, 600, 30);
	bob3 = new Bob(350, 600, 30);
	bob4 = new Bob(380, 600, 30);
	bob5 = new Bob(410, 600, 30);

	rope1 = new Rope(bob1.body, platform.body, -bobDiameter*2, 0);
	rope2 = new Rope(bob2.body, platform.body, -bobDiameter*1, 0);
	rope3 = new Rope(bob3.body, platform.body, bobDiameter*0, 0);
	rope4 = new Rope(bob4.body, platform.body, bobDiameter*1, 0);
	rope5 = new Rope(bob5.body, platform.body, bobDiameter*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  platform.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:-50})
	}
}



