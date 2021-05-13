var ship

var sea

function preload(){
 ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  
sea_moving = loadImage("sea.png");
  
}

function setup(){
  createCanvas(600,400);
  
  sea = createSprite(200,200,100,100);
  sea.addImage(sea_moving);
  sea.x= sea.width /2;
  sea.velocityX= -5;
  
  
  ship = createSprite(200,200,50,50);
  ship.addAnimation("ship", ship_moving);
  ship.scale=0.5;
  
}

function draw() {
  background("blue");
  
  if (sea.x < 0) {
    sea.x = sea.width / 2;
 }
  drawSprites();
}