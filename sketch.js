const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var a;
var circles=[];
var ground, stand;
var box1, box2, box3, box4, box5, box6, box7, box8;

function preload()
{

}

function setup() 
{

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,800);
  stroke(255)
  
  a = height;
  circles.push(width/2);

  ground = new Ground();

  stand = new Ground();                    

  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
 
  box5 = new Box(360, 195, 30, 40);
  box6 = new Box(390, 195, 30, 40);
  box7 = new Box(420, 195, 30, 40);

  box8 = new Box(390, 115, 30, 40);

}

function draw() 
{

  background(0);  
  
  
  a=a-1;

  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 