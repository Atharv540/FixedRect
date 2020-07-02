var fixedRent;
var movingRent;


function setup() {
  createCanvas(800,400);
  fixedRent = createSprite(400, 200, 50, 50);
  fixedRent.debug = true;
  fixedRent.shapeColor = "green"
  movingRent = createSprite(400, 200, 50, 50);
  movingRent.debug = true;
  movingRent.shapeColor = "green"
}

function draw() {
  background(255,255,255);  
fixedRent.x = mouseX;
fixedRent.y = mouseY;


if(fixedRent.x-movingRent.x< fixedRent.width/2+movingRent.width/2 && 
  movingRent.x-fixedRent.x < fixedRent.width/2+movingRent.width/2 &&
  fixedRent.y-movingRent.y< fixedRent.height/2+movingRent.height/2 && 
  movingRent.y-fixedRent.y < fixedRent.height/2+movingRent.height/2){
    fixedRent.shapeColor = "red";
    movingRent.shapeColor = "red";
  }
else{
  fixedRent.shapeColor = "green";
  movingRent.shapeColor = "green";
}


  drawSprites();
}