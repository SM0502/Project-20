function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

edgeSprite

function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym21.png","images/gym22.png");
  eat = loadAnimation("add image urls here");
  drink = loadAnimation("add image urls here");
  move = loadAnimation("add image urls here");
}

astronaunt = createSprite(300,230);
astronaunt.addAnimation("sleeping",sleep)
astronaunt.scale = 0.1;

if(keyDown("UP_ARROW")){
  astronaunt.addAnimation("brushing",brush);
  astronaunt.changeAnimation("brushing");
  astronaunt.y = 350;
  astronaunt.velocityX = 0;
  astronaunt.velocityY = 0
}


if(keyDown("DOWN_ARROW")){
  astronaunt.addAnimation("gymming",gym);
  astronaunt.changeAnimation("gymming");
  astronaunt.y = 350;
  astronaunt.velocityX = 0;
  astronaunt.velocityY = 0
}

if(keyDown("LEFT_ARROW")){
  astronaunt.addAnimation("bathing",bath);
  astronaunt.changeAnimation("bathing");
  astronaunt.y = 350;
  astronaunt.velocityX = 0;
  astronaunt.velocityY = 0
}

if(keyDown("RIGHT_ARROW")){
  astronaunt.addAnimation("eating",eat);
  astronaunt.changeAnimation("eating");
  astronaunt.y = 350;
  astronaunt.velocityX = 0;
  astronaunt.velocityY = 0
}

if(keyDown("M_KEY")){
  astronaunt.addAnimation("moving",move);
  astronaunt.changeAnimation("moving");
  astronaunt.y = 350;
  astronaunt.velocityX = 0;
  astronaunt.velocityY = 0
}



