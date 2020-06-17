const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1, ground;
var boxes = [];

var slider;
var val;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 800, 800, 200);
  slider = createSlider(0, 7, 1);
  slider.position(20, 20);
}

function mousePressed(){
  var rand = random(60,50);
  box1 = new Box(mouseX, mouseY, rand, rand);
  boxes.push(box1);
}

function draw(){
  background(89,86,93);
  val = slider.value();
  world.gravity.y = val;
  Engine.update(engine);
  for(var i = 0; i < boxes.length; i++){
    boxes[i].display();
  }
  ground.display();
}
