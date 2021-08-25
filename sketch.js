var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
appleImage = loadImage("apple.png");
 
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
var rand =  Math.round(random(1,100))
  console.log(rand)


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function spawn apple() {


  if(frameCount% 60 ===0){
   apple =createSprite(600,100,40,10);
    apple.addImage("apple",appleImage);
    apple.scale= 0.4;
    apple.x = Math.round(random(10,60));
    apple.velocityY=-3;
   




  }