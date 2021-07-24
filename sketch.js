var bg;
var iss,issImage;
var hasDocked;
var spacecraft,spacecraftImage,spacecraft1Image,spacecraft2Image,spacecraft3Image,spacecraft4Image;

function preload(){
bg=loadImage("spacebg.jpg");
issImage=loadImage("iss.png");
spacecraftImage=loadImage("spacecraft1.png");
spacecraft1Image=loadImage("spacecraft1.png");
spacecraft2Image=loadImage("spacecraft4.png");
spacecraft3Image=loadImage("spacecraft3.png");
spacecraft4Image=loadImage("spacecraft2.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  spacecraft=createSprite(700,500);
  spacecraft.addImage("S",spacecraft1Image);
  spacecraft.scale=0.3;

  iss=createSprite(700,300);
  iss.addImage("I",issImage);
}

function draw() {
  background(bg); 
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + Math.round(random(-1,1));

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage("S",spacecraft2Image);
      spacecraft.x=spacecraft.x-2;
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage("S",spacecraft3Image);
      spacecraft.x=spacecraft.x+2;
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage("S",spacecraft4Image);
      spacecraft.y=spacecraft.y+2;
    }
    if(keyDown("UP_ARROW")){
      spacecraft.addImage("S",spacecraftImage);
      spacecraft.y=spacecraft.y-2;
    }
    
}
if(spacecraft.y<=(iss.y+100)&&spacecraft.x<=(iss.x-50)){
  hasDocked=true;
  textSize(25);
  fill("white");
  text("Docking Successfull",200,300);

}
  drawSprites();
}