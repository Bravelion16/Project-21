var wall, thickness;
var bullet, speed, weight;

function setup() {
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  canvas = createCanvas(1600,400);
  background(255,255,255);

  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = 'white';
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  bullet.velocityX = speed;

  if(wall.x-bullet.x<(bullet.width+wall.width)/2) {
      bullet.velocityX = 0;
      var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
      if(damage>10) {
        wall.shapeColor = (255,0,0);
      }
      if(deformation<=10) {
        wall.shapeColor = (0,255,0);
      }
  }

  drawSprites();
}