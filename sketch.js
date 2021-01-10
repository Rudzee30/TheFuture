var b1,b,b2,b2i,s;



function preload(){

  b=loadImage("1.png");
  b2i=loadImage("2.jpeg");
  s=loadSound("4.mp3");
  s1=loadSound("3.mp3");
}


function setup() {
  createCanvas(1920,940);
  b1=createSprite(960,470,50,50);
  b1.addImage(b);
  
  b2=createSprite(960,840,5,5);
  b2.addImage(b2i);
  b2.scale=0.4;
}

function draw() {
  background("Blue");
  if(mousePressedOver(b2)){
    b2.visible=false;
    b1.visible=false;
  }
  
  
  drawSprites();
 
}

