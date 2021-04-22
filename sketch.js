var balloon, bp;
var back, backp;

function preload(){
  backp=loadImage("back.png")
  bp=loadImage("hotair.png")
}

function setup() {
  createCanvas(800,400);
  back=createSprite(400, 200, 50, 50);
  balloon=createSprite(400, 200, 30, 30);
  balloon.addImage(bp)
  back.addImage(backp)
  back.scale=0.5
  balloon.scale=0.5
}

function draw() {


  background(200,200,100);  
  if(keyDown(RIGHT_ARROW)){
    balloon.velocityX=6;
  }

  if(keyDown(LEFT_ARROW)){
    balloon.velocityX=-6;
  }

  if(keyDown("space")){
    balloon.velocityX=0;
  }

  drawSprites();

}