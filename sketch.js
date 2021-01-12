var tom1, tom2, tom3;
var jerry1, jerry2, jerry3 ;
var bground, backgroundImage;

function preload(){
 
  backgroundImage=loadImage("images/garden.png");
  tom1=loadAnimation("images/tomOne.png");
  tom2=loadAnimation("images/tomTwo.png", "images/tomThree.png");
  tom3=loadAnimation("images/tomFour.png");
  jerry1=loadAnimation("images/jerryOne.png");
  jerry2=loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
  jerry3=loadAnimation("images/jerryFour.png");
}



function setup(){
    createCanvas(1000,800);
    tom=createSprite(870, 600);
    tom.addAnimation("tomSleeping",tom1);
    tom.scale=0.2;

    jerry=createSprite(200, 600);
    jerry.addAnimation("jerryStanding",jerry1);
    jerry.scale=0.2;
}

function draw() {

    background(backgroundImage);
    
    if(tom.x - jerry.x < tom.width/2 - jerry.width/2 ){
      tom.velocityX=0;
      tom.addAnimation("tomFinal", tom3);
      tom.changeAnimation("tomFinal");
      tom.x=300;
      tom.scale=0.2;
      jerry.addAnimation("jerryLast", jerry3);
      jerry.changeAnimation("jerryLast");
      jerry.scale=0.2;
    }
      
    drawSprites();
}


function keyPressed(){

   if(keyCode === LEFT_ARROW){
      tom.velocityX= -5;
      tom.addAnimation("tomRunning", tom2);
      tom.changeAnimation("tomRunning");

      jerry.addAnimation("jerryTeasing", jerry2);
      jerry.changeAnimation("jerryTeasing");
   }
      
   


}
