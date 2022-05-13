var lilyIdle, lilyJump, lilyRun, lilyWalk, lilyDead;
var parede1, parede2, parede3, parede4, parede5, parede6, parede7, parede8, parede9, parede10, parede11, parede12, parede13, parede14, parede15, parede16, parede17, parede18, parede19, parede20;
var armarioImage, banheiraImage, camaImage, chaoImage, computadorImage, estanteImage, guardaRoupaImage, heartImage, janelaImage, lampadaImage, mesaImage, portaImage, sofaImage, tvImage; 
var zombieFAttack, zombieFDead, zombieFIdle, zombieFWalk;
var zombieMAttack, zombieMDead, zombieMIdle, zombieMWalk;
var ponto;


function preload() {
//imagens da lily
  lilyIdle = loadAnimation("assets/CuteGirlFiles/lily/Idle (1).png","assets/CuteGirlFiles/lily/Idle (2).png","assets/CuteGirlFiles/lily/Idle (3).png","assets/CuteGirlFiles/lily/Idle (4).png","assets/CuteGirlFiles/lily/Idle (5).png","assets/CuteGirlFiles/lily/Idle (6).png","assets/CuteGirlFiles/lily/Idle (7).png","assets/CuteGirlFiles/lily/Idle (8).png","assets/CuteGirlFiles/lily/Idle (9).png","assets/CuteGirlFiles/lily/Idle (10).png","assets/CuteGirlFiles/lily/Idle (11).png","assets/CuteGirlFiles/lily/Idle (12).png","assets/CuteGirlFiles/lily/Idle (13).png","assets/CuteGirlFiles/lily/Idle (14).png","assets/CuteGirlFiles/lily/Idle (15).png","assets/CuteGirlFiles/lily/Idle (16).png");
//imagens do zombie
zombieFIdle = loadAnimation("assets/zombiefiles/zombie/female/Idle (1).png","assets/zombiefiles/zombie/female/Idle (2).png","assets/zombiefiles/zombie/female/Idle (3).png","assets/zombiefiles/zombie/female/Idle (4).png","assets/zombiefiles/zombie/female/Idle (5).png","assets/zombiefiles/zombie/female/Idle (6).png","assets/zombiefiles/zombie/female/Idle (7).png","assets/zombiefiles/zombie/female/Idle (8).png","assets/zombiefiles/zombie/female/Idle (9).png","assets/zombiefiles/zombie/female/Idle (10).png","assets/zombiefiles/zombie/female/Idle (11).png","assets/zombiefiles/zombie/female/Idle (12).png","assets/zombiefiles/zombie/female/Idle (13).png","assets/zombiefiles/zombie/female/Idle (14).png","assets/zombiefiles/zombie/female/Idle (15).png");
zombieMIdle = loadAnimation("assets/zombiefiles/zombie/male/Idle (1).png","assets/zombiefiles/zombie/male/Idle (2).png","assets/zombiefiles/zombie/male/Idle (3).png","assets/zombiefiles/zombie/male/Idle (4).png","assets/zombiefiles/zombie/male/Idle (5).png","assets/zombiefiles/zombie/male/Idle (6).png","assets/zombiefiles/zombie/male/Idle (7).png","assets/zombiefiles/zombie/male/Idle (8).png","assets/zombiefiles/zombie/male/Idle (9).png","assets/zombiefiles/zombie/male/Idle (10).png","assets/zombiefiles/zombie/male/Idle (11).png","assets/zombiefiles/zombie/male/Idle (12).png","assets/zombiefiles/zombie/male/Idle (13).png","assets/zombiefiles/zombie/male/Idle (14).png","assets/zombiefiles/zombie/male/Idle (15).png");
//imagens dos moveis
armarioImage = loadAnimation("assets/house/moveis/armarioaberto.png","assets/house/moveis/armariofechado.png");
banheiraImage = loadImage("assets/house/moveis/banheira.png");
camaImage = loadImage("assets/house/moveis/cama.png");
chaoImage = loadImage("assets/house/moveis/chao.png");
computadorImage = loadAnimation("assets/house/moveis/computadorligado.png","assets/house/moveis/computadordesligado.png");
estanteImage = loadImage("assets/house/moveis/estante.png");
guardaRoupaImage = loadAnimation("assets/house/moveis/guardaroupaaberto.png","assets/house/moveis/guardaroupafechado.png");
heartImage = loadImage("assets/house/moveis/heart.png");
janelaImage = loadImage("assets/house/moveis/janela.png");
lampadaImage = loadImage("assets/house/moveis/lampada.png");
mesaImage = loadImage("assets/house/moveis/mesa.png");
portaImage = loadImage("assets/house/moveis/porta.png");
sofaImage = loadImage("assets/house/moveis/sofa.png");
tvImage = loadAnimation("assets/house/moveis/tvligada.png","assets/house/moveis/tvdesligada.png");
}

function setup() {
  createCanvas(900,600);
  //sprite do cha
  chao = createSprite(806,506);
  chao.addImage(chaoImage);
  chao.scale = 2.3;
  //sprites das paredes
  parede1 = createSprite(450,25,850,10);
  parede2 = createSprite(450,570,850,10);
  parede3 = createSprite(30,300,10,550);
  parede4 = createSprite(870,300,10,550);
  parede5 = createSprite(450,300,850,10);
  parede6 = createSprite(450,450,850,5);
  //sprites dos moveis
  //sprite do armario
  armario = createSprite(100,200);
  armario.addAnimation("armario",armarioImage);
  //sprite da banheira
  banheira = createSprite(200,200);
  banheira.addImage(banheiraImage);
  //sprite da cama
  cama = createSprite(300,200);
  cama.addImage(camaImage);
  //sprites do computador
  computador = createSprite(500,200);
  computador.addAnimation("computador",computadorImage);
  //sprite da estante
  estante = createSprite(230,400);
  estante.addImage(estanteImage);
  estante.scale = 3;
  //sprite do guarda roupa
  guardaRoupa = createSprite(700,200);
  guardaRoupa.addAnimation("guardaRoupa",guardaRoupaImage);
  //sprite do coracao
  coracao = createSprite(100,100);
  coracao.addImage(heartImage);
  //sprite da janela
  janela = createSprite(800,200);
  janela.addImage(janelaImage);
  //sprite da lampada
  lampada = createSprite(900,200);
  lampada.addImage(lampadaImage);
  //sprite da mesa
  mesa = createSprite(100,300);
  mesa.addImage(mesaImage);
  //sprite da porta
  porta = createSprite(100,380);
  porta.addImage(portaImage);
  porta.scale = 3;
  //sprite do sofa
  sofa = createSprite(350,430);
  sofa.addImage(sofaImage);
  sofa.scale = 3;
  //sprite da tv
  tv = createSprite(400,300);
  tv.addAnimation("tv",tvImage);
  //sprite da lily
  lily = createSprite(700,500);
  lily.addAnimation("StopLily",lilyIdle);
  lily.scale = 0.2;
  //sprite do zombie F
  zombieF = createSprite(200,400);
  zombieF.addAnimation("StopZombieF",zombieFIdle);
  zombieF.scale = 0.2;
  //sprite do zombie M
  zombieM = createSprite (500,200);
  zombieM.addAnimation("StopZombieM",zombieMIdle);
  zombieM.scale = 0.2;
  //sprite do ponto
  ponto = createSprite(0,0,5,5);
  ponto.shapeColor = "red";
}

function draw() {
  background("black");  
  
  

  drawSprites();
  coordenadas();
}

function coordenadas() {
  ponto.x = mouseX;
  ponto.y = mouseY;
  textSize(30);
  text("x:"+ponto.x+", y:"+ponto.y,ponto.x,ponto.y-20);
}