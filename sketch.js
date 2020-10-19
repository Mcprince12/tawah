const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var stand;
var block1, block2, block3, block4, block5, block6, block7, block8;
var polygon;
var engine, world;
var slingshot;
var pgImage;
var score = 0;
var backgroundImg;
var bg;


function preload(){
  pgImg = loadImage("hexagon-removebg-preview.png");

  getBackgroundImg();

}
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  stand = new Ground(500, 400, 500, 100);

  block1 = new Box(530, 335, 30, 40);
  block2 = new Box(560, 335, 30, 40);
  block3 = new Box(590, 335, 30, 40);
  block4 = new Box(620, 335, 30, 40);
  block5 = new Box(650, 335, 30, 40);

  block6 = new Box(560, 295, 30, 40);
  block7 = new Box(590, 295, 30, 40);
  block8 = new Box(620, 295, 30, 40);

  block9 = new Box(590, 250, 30, 40);

  polygon = Bodies.circle(50, 200, 20);

  
  World.add(world, polygon);
  slingshot = new SlingShot(polygon, {x:200, y:200});

  
}

function draw() {
  Engine.update(engine);
  
 if(backgroundImg){
  background(backgroundImg);
  } 

    
 
  
  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();

  block9.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();

  slingshot.display();

  imageMode(CENTER);
  image(pgImg, polygon.position.x, polygon.position.y, 50, 50);
  //ellipse(polygon.position.x, polygon.position.y, 20, 20);

  keyPressed();

  fill("white");
  textSize(30);
  text("score : "+score, 600, 40);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  
}

function mouseReleased(){
  slingshot.fly();
  
}



function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon);
  }
}


async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Africa/Maputo");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "dayImg.jpeg";
    }
    else{
        bg = "nightImg.jpeg";
    }

    backgroundImg = loadImage(bg);
   // console.log(backgroundImg);
}