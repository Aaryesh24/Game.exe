var gunImg;
var gun;
var bullet;
var crosshair;
var crosshairImg;

function preload() {
    gunImg = loadImage("AK.png")
    crosshairImg = loadImage("crosshairimage.png")
}

function setup(){
    createCanvas(windowWidth-30, windowHeight-30)
    gun = createSprite(windowWidth-520, windowHeight - 320, 50, 50)
    gun.addImage(gunImg)
    gun.scale=2

    crosshair = createSprite(windowWidth/2, windowHeight/2, 50, 50)
    crosshair.addImage(crosshairImg)
    crosshair.scale = 0.3
}

function draw(){
    background("lime")
    if(mouseDown("leftButton")){
        //console.log("HII")
    }
    crosshair.x = mouseX
    crosshair.y = mouseY
    /* if(crosshair.x > windowWidth-520){
        crosshair.x = windowWidth-520
    }
    if(crosshair.y < displayHeight-460){
        crosshair.y = displayHeight - 460
    } */
    drawSprites()

}
function summonBullet(){
    
}
