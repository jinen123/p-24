var ground,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,wall3

function setup() {
	createCanvas(1000,600);

	engine = Engine.create();
	world = engine.world;

	wall1 = new Wall (800,550,220,20)
	wall2 = new Wall (700,520,20,100)
	wall3 = new Wall (900,520,20,100)
paper = new Paper(100,550,10)
  //paper = Bodies.circle(100,150,10,{restitution : 1})
  //World.add(world,paper)
	Engine.run(engine);

  ground = new Ground(500,565,1000,10)

}


function draw() 
{
  rectMode(CENTER);
  background(0);
  wall2.display();
  wall3.display();
  wall1.display();
  ground.display();
  paper.display();


}

function keyPressed()
{
  if(keyCode ===  UP_ARROW)
  {
  Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-15})
  }
}
