const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;

var projectile1, catapult1,ground1;
var target1, target2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


  

    target1 = new Box(200,300,50,50);
    target2 = new Box(240,100,50,100);
    ground1 = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(target2.body.position.x);
    console.log(target2.body.position.y);
    console.log(target2.body.angle);

 

    target1.display();
    target2.display();
    ground1.display();
}
