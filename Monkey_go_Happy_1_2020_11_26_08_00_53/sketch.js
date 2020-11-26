var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600,500)
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("monkey1",monkey_running);
monkey.scale = 0.1;
  
  ground = createSprite(600,450,2000,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
    bananasGroup = createGroup();
  ObstacleGroup = createGroup();

}


function draw() {   
  background(225);
text("Score: "+ score, 500,50);

  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
   if(keyDown("space")&& monkey.y >= 400) {
        monkey.velocityY = -15;
    }
  
  if(monkey.isTouching(ObstacleGroup)){
    monkey.velocityY = 0;
    ObstacleGroup.setVelocityXEach(0);
    bananasGroup.setVelocityXEach(0);
    survivalTime = 0;
   ObstacleGroup.setLifetimeEach(-1);
    bananasGroup.setLifetimeEach(-1);
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
spawnbananas();
  spawnObstacles();
  drawSprites();
}


function spawnbananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var bananas = createSprite(600,100,40,10);
    bananas.y = Math.round(random(300,120));
    bananas.scale = 0.1;
    bananas.velocityX = -4;
    bananas.addImage(bananaImage);
          
        var rand = Math.round(random(1,6));
  
        bananas.depth = monkey.depth;
    monkey.depth = bananas.depth + 1;
    
    //add each cloud to the group
    bananasGroup.add(bananas);
  }
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600,430,40,10);
    obstacle.scale = 0.1;
    obstacle.velocityX = -9;
        
        var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImage);
              break;
      case 2: obstacle.addImage(obstacleImage);
              break;
      case 3: obstacle.addImage(obstacleImage);
              break;
      case 4: obstacle.addImage(obstacleImage);
              break;
      case 5: obstacle.addImage(obstacleImage);
              break;
      case 6: obstacle.addImage(obstacleImage);
              break;
      default: break;
    }
  
    //add each cloud to the group
    ObstacleGroup.add(obstacle);
  }
}
