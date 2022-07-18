var ship, shipAnime;
var sea, seaImage;

function preload(){
  shipAnime = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite();
  sea.addImage("sea",seaImage);

  ship = createSprite(160,247,50,50);
  ship.addAnimation("swim",shipAnime);
  ship.scale = 0.35;
}

function draw() {
  background("white");
  drawSprites();

}
