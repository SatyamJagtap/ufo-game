var player,playerImg1,playerImg2,playerImg3,playerImg4,playerImg15,playerImg6,playerImg7;
var enemyGroup,enemyImg1,enemyImg2;
var back;
var lifeImg,win,lose
var score = 0
var life = 3
var level =1
var spCoinImg
var coinImg
var coinGroup;
var lifeGroup
var spcoinGroup
var coinCount = 0
var bulletGroup;
var gameState = "stage1"
var bulletStock = level*50
var maxEnemyGroup
var bulletMax= 4
var coinSound,levelSound,bigExp,smallExp,shoot1,shoot2,lifePick,lifeLose,winS,loseS
var randShoot;
var wall
var deviceGroup
var S2A,S2B,S2C,S2D
var finalBG
var S2A_Img,S2B_Img,S2C_Img,S2D_Img
var S2A_B,S2B_B,S2C_B,S2D_B
var S2A_EB,S2B_EB,S2C_EB,S2D_EB
var S2A_ES,S2B_ES,S2C_ES,S2D_ES
var kills = 0
var finalB


function preload(){
  //Level pics
  playerImg1 = loadImage("level1.png")
  playerImg2 = loadImage("level2.png")
  playerImg3 = loadImage("level3.png")
  playerImg4 = loadImage("level4.png")
  playerImg5 = loadImage("level5.png")
  playerImg6 = loadImage("level6.png")
  playerImg7 = loadImage("level7.png")
//else pics
  enemyImg1 = loadImage("Dbig.png")
  enemyImg2 = loadImage("Dsmall.png")
  back = loadImage("backgr.png");
  spCoinImg = loadImage("insLevel.png")
  coinImg = loadImage("coin.png")
  lifeImg = loadImage("life.png")
  coinSound = loadSound("coinPick.wav")
  levelSound = loadSound("levelUp.wav")
  bigExp = loadSound("bigExp.wav")
  smallExp = loadSound("smallExp.wav")
  shoot1 = loadSound("shoot1.mp3")
  shoot2 = loadSound("shoot2.mp3")
  lifeLose = loadSound("lifeLose.mp3")
  lifePick = loadSound("lifePick.mp3")
  winS = loadSound("winSound.mp3")
  loseS = loadSound("loseSound.mp3")
  S2A_B = loadImage("2ABAckground.png")
  S2B_B = loadImage("2BBAckground.png")
  S2C_B = loadImage("2CBAckground.png")
  S2D_B = loadImage("2DBAckground.png")
  S2A_Img = loadImage("shell3.png")
  S2B_Img = loadImage("shell1.png")
  S2C_Img = loadImage("shell2.png")
  S2D_Img = loadImage("shell4.png")
  S2A_ES = loadImage("Asmall.png")
  S2B_ES = loadImage("Bsmall.png")
  S2C_ES = loadImage("Csmall.png")
  S2D_ES = loadImage("enemy2.png")
  S2A_EB = loadImage("Abig.png")
  S2B_EB = loadImage("Bbig.png")
  S2C_EB = loadImage("Cbig.png")
  S2D_EB = loadImage("enemy1.png")
  finalBG = loadImage("finalBackground.png")
  finalB = loadImage("finalBoss.png")
}

function setup(){
  createCanvas(1000,450)
  wall = createSprite(0,225,2,450)
  S2A = createSprite(200,225,20,20)
  S2A.addImage(S2A_Img)
  S2A.scale = 0.3
  S2B = createSprite(400,225,20,20)
  S2B.addImage(S2B_Img)
  S2B.scale = 0.3
  S2C = createSprite(600,225,20,20)
  S2C.addImage(S2C_Img)
  S2C.scale = 0.3
  S2D = createSprite(800,225,20,20)
  S2D.addImage(S2D_Img)
  S2D.scale = 0.3
  S2A.visible = false
  S2B.visible = false
  S2C.visible = false
  S2D.visible = false
  wall.shapeColor = "red"
  player = createSprite(150,350,20,20)
  player.addImage(playerImg1)
  player.scale = 0.5
  coinGroup = new Group
  spcoinGroup = new Group
  lifeGroup = new Group
  enemyGroup = new Group
  bulletGroup = new Group
  maxEnemyGroup = new Group
  deviceGroup = new Group
  
}

function draw(){
  //console.log(bulletStock) 
  //console.log(World.mouseY)
  if(gameState == "stage1"){
    background(back)
  }else if(gameState == "stage2"){
    background(back)
  }else if(gameState == "stage2A"){
    background(S2A_B)
    S2A.visible = false
    S2B.visible = false
    S2C.visible = false
    S2D.visible = false
  }else if(gameState == "stage2B"){
    background(S2B_B)
    S2A.visible = false
    S2B.visible = false
    S2C.visible = false
    S2D.visible = false
  }else if(gameState == "stage2C"){
    background(S2C_B)
    S2A.visible = false
    S2B.visible = false
    S2C.visible = false
    S2D.visible = false
  }else if(gameState == "stage2D"){
    background(S2D_B)
    S2A.visible = false
    S2B.visible = false
    S2C.visible = false
    S2D.visible = false
  }else if(gameState == "finalStage"){
    background(finalBG)
  }
  //levels{
    if(level == 1){
      player.addImage(playerImg1)
    }

    if(level == 2){
      player.addImage(playerImg2)
      
    }

    if(level == 3){
      
      player.addImage(playerImg3)
      player.scale = 0.7
    }

    if(level == 4 && gameState == "stage1"){
      gameState = "stage2"
      player.addImage(playerImg4)
      player.scale = 0.7
    }

    if(level == 5){
      player.addImage(playerImg5)
      player.scale = 0.5
    }

    if(level == 6){
      player.addImage(playerImg6)
      player.scale = 0.7
    }

    if(level == 7){
      player.addImage(playerImg7)
      player.scale = 0.7
      
    }
    if(level == 7 && (gameState == "stage2A"
    || gameState == "stage2B"
    || gameState == "stage2C"
    || gameState == "stage2D")){
      gameState = "finalStage"
    }

    

  //}
  if(gameState == "stage1"
   || gameState == "stage2A"
   || gameState == "stage2B"
   || gameState == "stage2C"
   || gameState == "stage2D"
   || gameState == "finalStage"){
    if(keyDown(UP_ARROW) && player.y >0){
      player.velocityY = -(level+3)
    }else if(keyDown(DOWN_ARROW) && player.y <450){
      player.velocityY = level+3
    }else if(keyDown(LEFT_ARROW) && player.x >0){
      player.velocityX = -(level+3)
    }else if(keyDown(RIGHT_ARROW) && player.x<300){
      player.velocityX = level+3
    }else{
      player.velocityY = 0
      player.velocityX = 0
    }
    if(keyWentDown("space") && bulletStock >0){
      randShoot = Math.round(random(1,2))
      if(randShoot == 1){
        shoot1.play()
      }else{
        shoot2.play()
      }
      SpBullet();
      bulletStock = bulletStock-1
    }
    deviceGroup.destroyEach()
    textSize(20)
    fill("red")
    text("Score: "+score,50,50)
    fill("lime")
    text("Life: "+life,50,80)
    fill("blue")
    text("Level: "+level,50,110)
    if(gameState == "finalStage"){
      fill("yellow")
      text("Final Kills: "+kills+"/5",50,140)
    }else{
      fill("yellow")
      text("Coin: "+coinCount+"/5",50,140)
    }
    
    fill("brown")
    text("Magazine: "+bulletStock,50,170)
    //isTouching{
    if(player.isTouching(lifeGroup)){
      lifeGroup.destroyEach();
      life = life+1
      lifePick.play();
    }
  
    if(player.isTouching(enemyGroup)){
      if(life >0){
        life = life-1
        enemyGroup.destroyEach();
        score = score-5
        lifeLose.play()
      }else{
        loseS.play()
        gameState = "fail"
        enemyGroup.destroyEach();
      }
    }

    if(player.isTouching(spcoinGroup)){
      level = level+1
      spcoinGroup.destroyEach();
      bulletStock = level*50
      score = score+15
      levelSound.play()
    }

    if(player.isTouching(coinGroup)){
      coinCount = coinCount+1  
      coinSound.play()   
      if(coinCount == 5){
        level = level+1
        coinCount = 0
        bulletStock = level*50
        score = score+15
        levelSound.play()
      }else{
        score = score+5
      }
      coinGroup.destroyEach();
    }

    if(wall.isTouching(enemyGroup)){
      score = score-10
      enemyGroup.destroyEach();
      lifeLose.play()
    }

    if(wall.isTouching(maxEnemyGroup)){
      score = score-15
      maxEnemyGroup.destroyEach();
      lifeLose.play()
    }

    if(player.isTouching(maxEnemyGroup)){
      if(life >1){
        life = life-2
        maxEnemyGroup.destroyEach();
        score = score-10
        lifeLose.play()
        bulletMax = 5
      }else{
        loseS.play()
        gameState = "fail"
        maxEnemyGroup.destroyEach();
      }
    }

    if(bulletGroup.isTouching(enemyGroup)){
      enemyGroup.destroyEach()
      score = score+5
      bulletGroup.destroyEach();
      smallExp.play()
    }

    if(bulletGroup.isTouching(maxEnemyGroup)){
      if(bulletMax<=0){
        maxEnemyGroup.destroyEach();
        score = score+20
        bulletGroup.destroyEach()
        bulletMax = 5
        bigExp.play()
        if(gameState == "finalStage"){
          if(kills<5){
            kills = kills+1
          }else{
            gameState == "win"
          }
        }
      }else{
        bulletMax = bulletMax-1;
        bulletGroup.destroyEach();
      }
    }

    //}
    //functions{
    if(gameState == "stage1"
    || gameState == "stage2A"
    || gameState == "stage2B"
    || gameState == "stage2C"
    || gameState == "stage2D"){
      SpCoin();    
    }
    SpLife();
    SpEnemy();
    SpMaxEnemy();
    
    if(enemyGroup.xEach <=50){
      score = score-10
      enemyGroup.destroyEach();
    }   
    //}
  
  }
  
  if(life <0){
    
  }

  if(gameState == "stage2"){
    player.x = 20
    player.y = 200
    lifeGroup.destroyEach();
    spcoinGroup.destroyEach();
    coinGroup.destroyEach();
    bulletGroup.destroyEach();
    enemyGroup.destroyEach();
    maxEnemyGroup.destroyEach();
    S2A.visible = true
    S2B.visible = true
    S2C.visible = true
    S2D.visible = true
    textSize(25)
    fill("black")
    text("Choose a planet to go!",400,100)
    if(mousePressedOver(S2A)){
      gameState = "stage2A"
    }
    if(mousePressedOver(S2B)){
      gameState = "stage2B"
    }
    if(mousePressedOver(S2C)){
      gameState = "stage2C"
    }
    if(mousePressedOver(S2D)){
      gameState = "stage2D"
    }
  }

  if(gameState == "fail"){
    
    player.destroy();
    lifeGroup.destroyEach();
    spcoinGroup.destroyEach();
    coinGroup.destroyEach();
    bulletGroup.destroyEach();
    enemyGroup.destroyEach();
    maxEnemyGroup.destroyEach();
    
    life = 10
    textSize(25)
    fill("red")
    text("Aliens Destroyed The Universe!",250,225)
    fill("black");
    text("You Lost",350,300);
    text("Final Score: "+score,350,375)
  }

  
  if(level >7){
    winS.play()
  }

  if(gameState == "win"){
    
    //player.destroy();
    player.velocityX = 0
    player.velocityY = 0
    lifeGroup.destroyEach();
    spcoinGroup.destroyEach();
    coinGroup.destroyEach();
    bulletGroup.destroyEach();
    enemyGroup.destroyEach();
    maxEnemyGroup.destroyEach();
    level  = 1
    textSize(25)
    fill("red")
    player.destroy();
    text("You Rescused The Universe. Thank You!",200,225)
    fill("black")
    text("You Win",350,300)
  }

  drawSprites()

}

//functions
function SpEnemy(){
  if(frameCount%120===0){
    var enemy = createSprite(1000,450,20,20)
    if(gameState == "stage1"){
      enemy.addImage(enemyImg2)
    } 
    if(gameState == "stage2A"){
      enemy.addImage(S2A_ES)
    }
    if(gameState == "stage2B"){
      enemy.addImage(S2B_ES)
    }
    if(gameState == "stage2C"){
      enemy.addImage(S2C_ES)
    }
    if(gameState == "stage2D"){
      enemy.addImage(S2D_ES)
    }
    if(gameState == "finalStage"){
      enemy.addImage(enemyImg2)
    } 
    enemy.scale = 0.12
    enemy.y = Math.round(random(50,450));
    if(gameState == "stage1"){
      enemy.velocityX = -8.5
    }else if(gameState == "stage2A"
     || gameState == "stage2B" 
     || gameState == "stage2C" 
     || gameState == "stage2D"){
      enemy.velocityX = -9.5
     }else if(gameState == "finalStage"){
      enemy.velocityX = -10
     }
    enemyGroup.add(enemy)
    enemy.lifetime = 300
  }   
}

function SpMaxEnemy(){
  if(frameCount%550===0){
    var maxEnemy = createSprite(1000,450,20,20)
    if(gameState == "stage1"){
      maxEnemy.addImage(enemyImg1)
    } 
    if(gameState == "stage2A"){
      maxEnemy.addImage(S2A_EB)
    }
    if(gameState == "stage2B"){
      maxEnemy.addImage(S2B_EB)
    }
    if(gameState == "stage2C"){
      maxEnemy.addImage(S2C_EB)
    }
    if(gameState == "stage2D"){
      maxEnemy.addImage(S2D_EB)
    }else if(gameState == "finalStage"){
      maxEnemy.addImage(finalB)
    }
    maxEnemy.y = Math.round(random(100,400))
    maxEnemy.velocityX = -4.5
    maxEnemy.scale = 0.35
    maxEnemyGroup.add(maxEnemy)
  }
}

function SpCoin(){
  if(frameCount% 250 ===0){
    var randCoin = Math.round(random(1,10))
    if(randCoin == 7){
      var spCoin = createSprite(1000,450,20,20)
      spCoin.addImage(spCoinImg)
      spCoin.y = Math.round(random(50,400))
      spCoin.velocityX = -8
      spCoin.scale = 0.3
      spcoinGroup.add(spCoin)
      spCoin.lifetime = 300
    }else{
      var coin = createSprite(1000,450,20,20)
      coin.addImage(coinImg)
      coin.scale = 0.1
      coin.y = Math.round(random(50,400))
      coin.velocityX = -8
      coinGroup.add(coin)
      coin.lifetime = 300
    }
  }
}

function SpLife(){
  if(frameCount%550===0){
    var life = createSprite(1000,450,20,20)
    life.addImage(lifeImg);
    life.scale  =0.1
    life.y = Math.round(random(50,450))
    life.velocityX = -8
    lifeGroup.add(life)
    life.lifetime = 300
  }
}

function SpBullet(){
  var bullet = createSprite(200,100,level*10,2)
  bullet.shapeColor = "red"
  bullet.x = player.x+5
  bullet.y = player.y
  bullet.velocityX = 10
  bullet.lifetime = 200
  bulletGroup.add(bullet)
}

