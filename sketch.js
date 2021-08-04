var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("redImage.png");
}

function setup(){
createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX
  
  spawnleaves();
  spawnApple();
  drawSprites();
}

function spawnApple(){

  if(frameCount%80===0){
    apple=createSprite(600,0,40,10)
    apple.addImage(appleImg)
    apple.velocityY=3 
    apple.scale=0.07 
    apple.x= Math.round(random(10,400))
    apple.lifetime=220
  }
  }

  function spawnleaves(){

    if(frameCount%60===0){
      leaves=createSprite(600,0,40,10)
      leaves.addImage(leafImg)
      leaves.velocityY=3 
      leaves.scale=0.07 
      leaves.x= Math.round(random(10,400))
      leaves.lifetime=220
    }
    }