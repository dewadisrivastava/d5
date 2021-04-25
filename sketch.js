var ground,groundImage
var tom,tomImage,tomImage2,tomImage3
var ratImage,ratImage2,ratImage3,ratImage4
function preload() {
    //load the images here
    ratImage=loadAnimation("mouse1.png")
    ratImage2=loadAnimation("mouse2.png")
    ratImage3=loadAnimation("mouse3.png")
    ratImage4=loadAnimation("mouse4.png")
    tomImage=loadAnimation("cat1.png")
    tomImage2=loadAnimation("cat2.png")
    tomImage3=loadAnimation("cat3.png")
    groundImage=loadAnimation("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    ground=createSprite(200,200)
ground.addAnimation("ground",groundImage)
ground.scale=1.8
tom=createSprite(600,500)
tom.addAnimation("tom",tomImage)
tom.scale=0.2

rat=createSprite(60,500)
rat.addAnimation("rat",ratImage)
rat.scale=0.1


}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();

    if(rat.isTouching(tom) && tom.x<=180){
       
        
        rat.addAnimation("rat",ratImage2)
        tom.velocityX=0
        tom.velocityY=0
    }

    if(keyDown("LEFT_ARROW")){
        tom.velocityX=tom.velocityX-0.8
        tom.addAnimation("tom",tomImage2)
    }
    if(keyDown("RIGHT_ARROW")){
        tom.velocityX=tom.velocityX+0.8
        tom.addAnimation("tom",tomImage2)
    }
    if(keyDown("UP_ARROW")){
        tom.velocityY=tom.velocityY-0.8
    }
    if(keyDown("DOWN_ARROW")){
        tom.velocityY=tom.velocityY+0.8
    }


}


function keyPressed(){

  //For moving and changing animation write code here


}
