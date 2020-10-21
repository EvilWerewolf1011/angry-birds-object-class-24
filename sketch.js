 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

 var myEngine,myWorld;
 var box1,box2, box3,box4,box5;
 var ground;
 var pig1,pig2;
 var log1,log2,log3,log4;
 var bird1;
 

 function setup() {
  createCanvas(1200,400);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  //Create a new box using Box class
  ground = new Ground(600,390,1200,20)
  //layer1
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig (810,350)
  log1 = new Log (810,300,300,PI/2)
  //layer2
  box3 = new Box(700,270,70,70);
  box4 = new Box(920,270,70,70);
  pig2 = new Pig (810,270)
  log2 = new Log (810,230,300,PI/2)
  //layer3
  
  box5 = new Box(810,200,70,70);
  log3 = new Log (720,170,150,PI/4)
  log4 = new Log (890,170,150,-PI/4)
  //bird
  bird1 = new Bird (100,100)

}

function draw() {
  background(0);  

  Engine.update(myEngine);

  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

  bird1.display();

}