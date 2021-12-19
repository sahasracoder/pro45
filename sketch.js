var bg, bgImg
var kid
var trampImg,tramp
var mask, maskImg, vaccine,vaccineImg
var virus, virusImg

function preload(){
bgImg=loadImage("assets/background1.png")
trampImg=loadImage("assets/tr.png")
maskImg=loadImage("assets/mask.png")
vaccineImg=loadImage("assets/vaccine.png")
virusImg=loadImage("assets/virus.png")


}
function setup() {
  createCanvas(displayWidth,displayHeight);
  bg=createSprite(width/2, height/2)
  bg.scale=3.3;
  bg.addImage(bgImg)

  
}

function draw() {
  background(255,255,255);  
    bg.velocityY=+2
    //console.log(bg.y)
    if(bg.y>displayHeight-150){
    bg.y=displayHeight/2
    //console.log("going out")
    }
    spawnTrampoline()
    spawnMask()
    spawnVaccine()
    spawnVirus()
  drawSprites();
}

function spawnTrampoline(){
  if(frameCount %200===0){
    var tramp=createSprite(200,200,800,800)
   tramp.x= Math.round(random(100,800))
    //add image//
    tramp.addImage(trampImg)
    tramp.velocityY=+2
    tramp.scale=0.6;
  }
}
function spawnMask(){
  if(frameCount %450===0){
    var mask=createSprite(100,100,700,700)
   mask.x= Math.round(random(950,900))
    //add image//
    mask.addImage(maskImg)
    mask.velocityY=+2
    mask.scale=0.3;
  }
}

function spawnVaccine(){
  if(frameCount %550===0){
    var vaccine=createSprite(50,50,600,600)
   vaccine.x= Math.round(random(500,100))
    //add image//
    vaccine.addImage(vaccineImg)
    vaccine.velocityY=+2
    vaccine.scale=0.3;
  }
}


function spawnVirus(){
  if(frameCount %600===0){
    var virus=createSprite(30,30,500,500)
   virus.x= Math.round(random(300,1000))
    //add image//
    virus.addImage(virusImg)
    virus.velocityY=+2
    virus.scale=0.2;
  }
}

