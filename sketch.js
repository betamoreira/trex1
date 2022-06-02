var trex, trex_img, edges;

function preload(){
    //carregar as imagens e animações do código

    trex_img = loadAnimation("trex1.png","trex2.png","trex3.png");
}

function setup(){
    //criar os componentes

    createCanvas(400,200);

    //criar o trex
    trex = createSprite(30,160,20,50);
    trex.addAnimation("correndo", trex_img);
    trex.scale = 0.5;

    //criar as paredes
    edges = createEdgeSprites();
   
}

function draw(){
  //crio o jogo em si
  background("white");

  //fazer o trex saltar
  if(keyDown("space") && trex.y>160){
      trex.velocityY = -10;
  }

  //gravidade
  trex.velocityY = trex.velocityY + 0.5;

  //trex colide com a parede
  trex.collide(edges[3]);

  drawSprites();
}