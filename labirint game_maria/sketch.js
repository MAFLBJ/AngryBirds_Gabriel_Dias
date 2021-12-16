<<<<<<< HEAD
var careca, carecaFP, carecaFA;
//var careca_direita_parado, careca_direita_andando, careca_esquerda_parado, careca_esquerda_andando;
//var careca_tras_parado, careca_tras_andando1, careca_tras_andando2;
//var vampiro, vampiro_direita, vampiro_esquerda;
//var fantasma, fantasmaImg;
//var slenderman1, slenderman2, slenderman3, slenderman4, slenderman5, slenderman6, slenderman7;
//var slendermanImg;
//var espinhos_baixo1, espinhos_baixo2, espinhos_baixo_img;
//var espinhos_cima1, espinho_cima2, espinhos_cima3, espinhos_cima_img;
////paredes
//var parede1, parede2, parede3, parede4, parede5, parede6, parede7, parede8, parede9, parede10, parede11, parede12, parede13;
//var parede14, parede15, parede16, parede17, parede18, parede19, parede20;
=======
var careca, careca_frente_parado, careca_andando;
var careca_direita_parado, careca_direita_andando, careca_esquerda_parado, careca_esquerda_andando;
var careca_tras_parado, careca_tras_andando;
var vampiro, vampiro_direita, vampiro_esquerda;
var fantasma, fantasmaImg;
var slenderman1, slenderman2, slenderman3, slenderman4, slenderman5, slenderman6, slenderman7;
var slendermanImg;
var espinhos_baixo1, espinhos_baixo2, espinhos_baixo_img;
var espinhos_cima1, espinho_cima2, espinhos_cima3, espinhos_cima_img;
//paredes
var parede1, parede2, parede3, parede4, parede5, parede6, parede7, parede8, parede9, parede10, parede11, parede12, parede13;
var parede14, parede15, parede16, parede17, parede18, parede19, parede20, parede21, parede22, parede23, parede24, parede25;
var parede26, parede27, parede28, parede29, parede30, parede31, parede32, parede33, parede334, parede35, parede36, parede37;
>>>>>>> 51c2bc289bca88b82cfc64e3f22b772f2fc41b61
//bordas
//var borda1, borda2, borda3, borda4;
var bordas;
//parede para o vampiro mudar de lado
var parede_ivisivel1, parede_invisivel2;
//estados
var Direita = 1;
var Esquerda = 2;
var Baixo = 3;
var Cima = 4;

var gameover, gameoverimg;

function preload(){
 //careca de frente
<<<<<<< HEAD
  carecaFP = loadImage('imagens/FP.png');
  //carecaFA = loadAnimation('imagens/FA1.png','imagens/FP.png','imagens/FA2.png');
  //careca de lado
  //careca_direita_parado = loadImage('imagens/lado direito parado.png');
  //careca_direita_andando = loadImage('imagens/lado direito andando.png');
  //careca_esquerda_parado = loadImage('imagens/lado esquerdo parado.png');
  //careca_esquerda_andando = loadImage('imagens/lado esquerdo andando.png');
  ////careca de trás
  //careca_tras_parado = loadImage('imagens/trás parado.png');
  //careca_tras_andando1 = loadImage('imagens/trás andando 1.png');
  //careca_tras_andando2 = loadImage('imagens/trás andando 2.png');
  ////vampiro
  //vampiro_direita = loadImage('imagens/vampiro direita.png');
  //vampiro_esquerda = loadImage('imagens/vampiro esquerda.png');
  ////slenderman
  //slendermanImg = loadImage('imagens/Slenderman.png');
  ////fantasma
  //fantasmaImg = loadImage('imagens/fantasma.png');
  ////espinhos
  //espinhos_baixo_img = loadImage('imagens/espinhos de baixo.png');
  //espinhos_cima_img = loadImage('imagens/espinhos de cima.png');
=======
  careca_frente_parado = loadAnimation('frente parado.png');
  careca_andando= loadAnimation('frente andando 1.png', 'frente andando 2.png');
  //careca de lado
  careca_direita_parado = loadAnimation('lado direito parado.png');
  careca_direita_andando = loadAnimation('lado direito andando.png', 'lado direito parado.png');
  careca_esquerda_parado = loadAnimation('lado esquerdo parado.png');
  careca_esquerda_andando = loadAnimation('lado esquerdo andando.png', 'lado esquerdo parado.png');
  //careca de trás
  careca_tras_parado = loadImage('trás parado.png');
  careca_tras_andando = loadAnimation('trás andando 1.png', 'trás andando 2.png');
  //vampiro
  vampiro_direita = loadAnimation('vampiro direita.png');
  vampiro_esquerda = loadAnimation('vampiro esquerda.png');
  //slenderman
  slendermanImg = loadImage('Slenderman.png');
  //fantasma
  fantasmaImg = loadImage('fantasma.png');
  //espinhos
  espinhos_baixo_img = loadImage('espinhos de baixo.png');
  espinhos_cima_img = loadImage('espinhos de cima.png');
  //game over e you win
  gameoverimg = loadImage('game over.png');
>>>>>>> 51c2bc289bca88b82cfc64e3f22b772f2fc41b61
  


}

function setup(){
  createCanvas(windowWidth, windowHeight);
 //careca
  careca = createSprite(250, 30, 20, 20);
<<<<<<< HEAD
  careca.addImage('krek', carecaFP); 
  //careca.scale = 0.0018; 
  //fantasma
  //fantasma = createSprite(250, 100, 20, 20);
  //fantasma.addImage('gaspar', fantasmaImg);
  //fantasma.scale = 0.005;
  //fantasma.velocityX = 5;
  ////vampiro
  //vampiro = createSprite(250, 400, 20, 20);
  //vampiro.addImage('drácula', vampiro_direita);
  //vampiro.scale = 0.05;
  ////espinhos
  //espinhos_baixo1 = createSprite(387, 316, 20, 3);
  //espinhos_baixo1.addImage('espinhos de baixo', espinhos_baixo_img);
  //espinhos_baixo1.scale = 0.1;
//
  //espinhos_baixo2 = createSprite(170, 316, 20, 3);
  //espinhos_baixo2.addImage('espinhos de baixo', espinhos_baixo_img);
  //espinhos_baixo2.scale = 0.1;
//
  //espinhos_cima1 = createSprite(350, 284, 20, 3);
  //espinhos_cima1.addImage('espinhos de cima', espinhos_cima_img);
  //espinhos_cima1.scale = 0.1;
//
  //espinhos_cima2 = createSprite(230, 284, 20, 3);
  //espinhos_cima2.addImage('espinhos de cima', espinhos_cima_img);
  //espinhos_cima2.scale = 0.1;
//
  //espinhos_cima3 = createSprite(90, 285, 20, 3);
  //espinhos_cima3.addImage('espinhos de cima', espinhos_cima_img);
  //espinhos_cima3.scale = 0.1;
//
//
  ////slendermans
  //slenderman1 = createSprite(420, 200, 30, 30);
  //slenderman1.addImage('slenderman1img', slendermanImg);
  //slenderman1.scale = 0.003;
//
  //slenderman2 = createSprite(360, 250, 30, 30);
  //slenderman2.addImage('slenderman2img', slendermanImg);
  //slenderman2.scale = 0.003;
//
  //slenderman3 = createSprite(300, 200, 30, 30);
  //slenderman3.addImage('slenderman3img', slendermanImg);
  //slenderman3.scale = 0.003;
  //
  //slenderman4 = createSprite(240, 250, 30, 30);
  //slenderman4.addImage('slenderman4img', slendermanImg);
  //slenderman4.scale = 0.003;
  //  
  //slenderman5 = createSprite(180, 200, 30, 30);
  //slenderman5.addImage('slenderman5img', slendermanImg);
  //slenderman5.scale = 0.003;
//
  //slenderman6 = createSprite(120, 250, 30, 30);
  //slenderman6.addImage('slenderman6img', slendermanImg);
  //slenderman6.scale = 0.003;
//
  //slenderman7 = createSprite(60, 200, 30, 30);
  //slenderman7.addImage('slenderman7img', slendermanImg);
  //slenderman7.scale = 0.003;
  ////paredes, toca o roqui rou pq essa vai demorar um cadin
//
  //parede2 = createSprite(220, 50, 452, 3);
//
  //parede3 = createSprite(445, 89, 3, 80);
//
  //parede4 = createSprite(270, 160, 460, 3);
//
  //parede5 = createSprite(405, 120, 3, 80);
//
  //parede6 = createSprite(365, 89, 3, 80);
//
  //parede7 = createSprite(325, 120, 3, 80);
//
  //parede8 = createSprite(285, 89, 3, 80 );
//
  //parede9 = createSprite(245, 120, 3, 80);
//
  //parede10 = createSprite(205, 89, 3, 80);
//
  //parede11 = createSprite(165, 120, 3, 80);
//
  //parede12 = createSprite(125, 89, 3, 80);
//
  //parede13 = createSprite(85, 120, 3, 80);
//
  //parede14 = createSprite(220, 280, 450, 3);
//
  //parede15 = createSprite(280, 320, 450, 3);
=======
  //careca de frente
  careca.addAnimation('careca de frente', careca_frente_parado); 
  careca.addAnimation('careca de frente e andando', careca_andando);
  //careca de direita
  careca.addAnimation('careca de direita', careca_direita_parado);
  careca.addAnimation('careca de direita andando', careca_direita_andando);
  //careca de esquerda
  careca.addAnimation('careca de esquerda', careca_esquerda_parado);
  careca.addAnimation('careca de esquerda andando', careca_esquerda_andando);
  //careca de trás
  careca.addAnimation('careca de tras', careca_tras_parado);
  careca.addAnimation('carecade tras andando', careca_tras_andando);
  careca.scale = 0.003; 
  //fantasma
  fantasma = createSprite(250, 100, 20, 20);
  fantasma.addImage('gaspar', fantasmaImg);
  fantasma.scale = 0.01;
  fantasma.velocityX = 5;
  //vampiro
  vampiro = createSprite(250, 400, 20, 20);
  vampiro.addAnimation('vampiro de direita', vampiro_direita);
  vampiro.addAnimation('vampiro de esquerda', vampiro_esquerda);
  vampiro.scale = 0.05;
  vampiro.velocityX = 15;
  //espinhos
  espinhos_baixo1 = createSprite(387, 316, 20, 3);
  espinhos_baixo1.addImage('espinhos de baixo', espinhos_baixo_img);
  espinhos_baixo1.scale = 0.1;

  espinhos_baixo2 = createSprite(170, 316, 20, 3);
  espinhos_baixo2.addImage('espinhos de baixo', espinhos_baixo_img);
  espinhos_baixo2.scale = 0.1;

  espinhos_cima1 = createSprite(350, 284, 20, 3);
  espinhos_cima1.addImage('espinhos de cima', espinhos_cima_img);
  espinhos_cima1.scale = 0.1;

  espinhos_cima2 = createSprite(230, 284, 20, 3);
  espinhos_cima2.addImage('espinhos de cima', espinhos_cima_img);
  espinhos_cima2.scale = 0.1;

  espinhos_cima3 = createSprite(90, 285, 20, 3);
  espinhos_cima3.addImage('espinhos de cima', espinhos_cima_img);
  espinhos_cima3.scale = 0.1;


  //slendermans
  slenderman1 = createSprite(420, 200, 30, 30);
  slenderman1.addImage('slenderman1img', slendermanImg);
  slenderman1.scale = 0.006;

  slenderman2 = createSprite(360, 250, 30, 30);
  slenderman2.addImage('slenderman2img', slendermanImg);
  slenderman2.scale = 0.006;

  slenderman3 = createSprite(300, 200, 30, 30);
  slenderman3.addImage('slenderman3img', slendermanImg);
  slenderman3.scale = 0.006;
  
  slenderman4 = createSprite(240, 250, 30, 30);
  slenderman4.addImage('slenderman4img', slendermanImg);
  slenderman4.scale = 0.006;
    
  slenderman5 = createSprite(180, 200, 30, 30);
  slenderman5.addImage('slenderman5img', slendermanImg);
  slenderman5.scale = 0.006;

  slenderman6 = createSprite(120, 250, 30, 30);
  slenderman6.addImage('slenderman6img', slendermanImg);
  slenderman6.scale = 0.006;

  slenderman7 = createSprite(60, 200, 30, 30);
  slenderman7.addImage('slenderman7img', slendermanImg);
  slenderman7.scale = 0.006;
  //paredes, toca o roqui rou pq essa vai demorar um cadin

  parede2 = createSprite(220, 50, 452, 3);
  parede2.shapeColor = 'red';

  parede3 = createSprite(445, 89, 3, 80);
  parede3.shapeColor = 'red';

  parede4 = createSprite(270, 160, 460, 3);
  parede4.shapeColor = 'red';

  parede5 = createSprite(405, 120, 3, 80);
  parede5.shapeColor = 'red';

  parede6 = createSprite(365, 89, 3, 80);
  parede6.shapeColor = 'red';

  parede7 = createSprite(325, 120, 3, 80);
  parede7.shapeColor = 'red';

  parede8 = createSprite(285, 89, 3, 80 );
  parede8.shapeColor = 'red';

  parede9 = createSprite(245, 120, 3, 80);
  parede9.shapeColor = 'red';

  parede10 = createSprite(205, 89, 3, 80);
  parede10.shapeColor = 'red';

  parede11 = createSprite(165, 120, 3, 80);
  parede11.shapeColor = 'red';

  parede12 = createSprite(125, 89, 3, 80);
  parede12.shapeColor = 'red';

  parede13 = createSprite(85, 120, 3, 80);
  parede13.shapeColor = 'red';

  parede14 = createSprite(220, 280, 450, 3);
  parede14.shapeColor = 'red';

  parede15 = createSprite(280, 320, 450, 3);
  parede15.shapeColor = 'red';

  parede16 = createSprite(55, 343, 3, 50);
  parede16.shapeColor = 'red';

  parede17 = createSprite(279, 368, 450, 3);
  parede17.shapeColor = 'red';

  parede18 = createSprite(27, 428, 60, 3);
  parede18.shapeColor = 'red';

  parede19 = createSprite(55, 441, 3, 30);
  parede19.shapeColor = 'red';

  parede20 = createSprite(70, 455, 30, 3);
  parede20.shapeColor = 'red';

  parede21 = createSprite(85, 441, 3, 30);
  parede21.shapeColor = 'red';

  parede22 = createSprite(135, 441, 3, 30);
  parede22.shapeColor = 'red';

  parede23 = createSprite(150, 455, 30, 3);
  parede23.shapeColor = 'red';

  parede24 = createSprite(165, 441, 3, 30);
  parede24.shapeColor = 'red';

  parede25 = createSprite(215, 441, 3, 30);
  parede25.shapeColor = 'red';

  parede26 = createSprite(230, 455, 30, 3);
  parede26.shapeColor = 'red';

  parede27 = createSprite(245, 441, 3, 30);
  parede27.shapeColor = 'red';
>>>>>>> 51c2bc289bca88b82cfc64e3f22b772f2fc41b61

  parede28 = createSprite(295, 441, 3, 30);
  parede28.shapeColor = 'red';

  parede29 = createSprite(310, 455, 30, 3);
  parede29.shapeColor = 'red';

  parede30 = createSprite(325, 441, 3, 30);
  parede30.shapeColor = 'red';

  parede31 = createSprite(375, 441, 3, 30);
  parede31.shapeColor = 'red';

  parede32 = createSprite(390, 455, 30, 3);
  parede32.shapeColor = 'red';

  parede33 = createSprite(405, 441, 3, 30);
  parede33.shapeColor = 'red';

  parede34 = createSprite(110, 428, 50, 3);
  parede34.shapeColor = 'red';

  parede35 = createSprite(190, 428, 50, 3);
  parede35.shapeColor = 'red';

  parede36 = createSprite(270, 428, 50, 3);
  parede36.shapeColor = 'red';

  parede37 = createSprite(350, 428, 50, 3);
  parede37.shapeColor = 'red';

  //paredes invisíveis
  parede_invisivel1 = createSprite(499, 400, 1, 1);
  parede_invisivel1.visible = false;

  parede_invisivel2 = createSprite(1, 400, 1, 1);

  bordas = createEdgeSprites();
  //game over e you win
  gameover = createSprite(250, 250, 10, 10);
  gameover.addImage('fim de jogo', gameoverimg);
  gameover.scale = 0.4;
  gameover.visible = false;
}

function draw(){
  background('purple'); 
  drawSprites();
  //fantasma.bounceOff(bordas[0]);
  //fantasma.bounceOff(bordas[1]);
  //fantasma.bounceOff(bordas[2]);
  //fantasma.bounceOff(bordas[3]);

  vampiro.bounceOff(bordas[0]);
  vampiro.bounceOff(bordas[1]);
  vampiro.bounceOff(bordas[2]);
  vampiro.bounceOff(bordas[3]);

  careca.collide(parede2);
  careca.collide(parede3);
  careca.collide(parede4);
  careca.collide(parede5);
  careca.collide(parede6);
  careca.collide(parede7);
  careca.collide(parede8);
  careca.collide(parede9);
  careca.collide(parede10);
  careca.collide(parede11);
  careca.collide(parede12);
  careca.collide(parede13);
  careca.collide(parede14);
  careca.collide(parede15);
  careca.collide(parede16);
  careca.collide(parede17);
  careca.collide(parede18);
  careca.collide(parede19);
  careca.collide(parede20);
  careca.collide(parede21);
  careca.collide(parede22);
  careca.collide(parede23);
  careca.collide(parede24);
  careca.collide(parede25);
  careca.collide(parede26);
  careca.collide(parede27);
  careca.collide(parede28);
  careca.collide(parede29);
  careca.collide(parede30);
  careca.collide(parede31);
  careca.collide(parede32);
  careca.collide(parede33);
  careca.collide(parede34);
  careca.collide(parede35);
  careca.collide(parede36);
  careca.collide(parede37)
  careca.collide(bordas[0]);
  careca.collide(bordas[1]);
  careca.collide(bordas[2]);
  careca.collide(bordas[3]);

  //if(estado === Direita){
 //   careca.changeAnimation('careca de direita andando');
  //}


  if(vampiro.isTouching(parede_invisivel1)){
    vampiro.changeAnimation('vampiro de esquerda');
  }

  if(vampiro.isTouching(parede_invisivel2)){
    vampiro.changeAnimation('vampiro de direita');
  }

  if(keyDown('w')){
    careca.y = careca.y -5;
  }

  if(keyDown('s')){
    careca.y = careca.y +5;
  }

  if(keyDown('a')){
    careca.x = careca.x -5;
    //estado = Direita;
  }

  if(keyDown('d')){
    careca.x = careca.x +5;
  }

  if(careca.isTouching(fantasma)){
    gameOver();

  }

  if(careca.isTouching(vampiro)){
    gameOver();
  }

  if(careca.isTouching(slenderman1)){
    gameOver();
  }

  if(careca.isTouching(slenderman2)){
    gameOver();
  }

  if(careca.isTouching(slenderman3)){
    gameOver();
  }

  if(careca.isTouching(slenderman4)){
    gameOver();
  }

  if(careca.isTouching(slenderman5)){
    gameOver();
  }

  if(careca.isTouching(slenderman6)){
    gameOver();
  }

  if(careca.isTouching(slenderman7)){
    gameOver();
  }

  if(careca.isTouching(espinhos_baixo1)){
    gameOver();
  }

  if(careca.isTouching(espinhos_baixo2)){
  gameOver();
  }

  if(careca.isTouching(espinhos_cima1)){
    gameOver();
  }

  if(careca.isTouching(espinhos_cima2)){
    gameOver();
  }

  if(careca.isTouching(espinhos_cima3)){
    gameOver();
  }
}

  function gameOver(){
    gameover.visible = true;
    background('black');
    fantasma.visible = false;
    careca.visible = false;
    vampiro.visible = false;
    slenderman1.visible = false;
    slenderman2.visible = false;
    slenderman3.visible = false;
    slenderman4.visible = false;
    slenderman5.visible = false;
    slenderman6.visible = false;
    slenderman7.visible = false;
    parede2.visible = false;
    parede3.visible = false;
    parede4.visible = false;
    parede5.visible = false;
    parede6.visible = false;
    parede7.visible = false;
    parede8.visible = false;
    parede9.visible = false;
    parede10.visible = false;
    parede11.visible = false;
    parede12.visible = false;
    parede13.visible = false;
    parede14.visible = false;
    parede15.visible = false;
    parede16.visible = false;
    parede17.visible = false;
    parede18.visible = false;
    parede19.visible = false;
    parede20.visible = false;
    parede21.visible = false;
    parede22.visible = false;
    parede23.visible = false;
    parede24.visible = false;
    parede25.visible = false;
    parede26.visible = false;
    parede27.visible = false;
    parede28.visible = false;
    parede29.visible = false;
    parede30.visible = false;
    parede31.visible = false;
    parede32.visible = false;
    parede33.visible = false;
    parede34.visible = false;
    parede35.visible = false;
    parede36.visible = false;
    parede37.visible = false;
    espinhos_cima1.visible = false;
    espinhos_cima2.visible = false;
    espinhos_cima3.visible = false;
    espinhos_baixo1.visible = false;
    espinhos_baixo2.visible = false;

    background.depth = gameover.depth;
    gameover.depth = background.depth + 1; 

  }
  
