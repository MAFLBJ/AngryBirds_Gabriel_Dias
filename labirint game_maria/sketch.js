var careca, careca_frente_parado, careca_frente_andando1, careca_frente_andando2;
var careca_direita_parado, careca_direita_andando, careca_esquerda_parado, careca_esquerda_andando;
var careca_tras_parado, careca_tras_andando1, careca_tras_andando2;
var vampiro, vampiro_direita, vampiro_esquerda;
var fantasma, fantasmaImg;
var slenderman1, slenderman2, slenderman3, slenderman4, slenderman5, slenderman6, slenderman7;
var slendermanImg;
var espinhos_baixo1, espinhos_baixo2, espinhos_baixo_img;
var espinhos_cima1, espinho_cima2, espinhos_cima3, espinhos_cima_img;
//paredes
var parede1, parede2, parede3, parede4, parede5, parede6, parede7, parede8, parede9, parede10, parede11, parede12, parede13;
var parede14, parede15, parede16, parede17, parede18, parede19, parede20;
//bordas
//var borda1, borda2, borda3, borda4;
var bordas;
function preload(){
 //careca de frente
  careca_frente_parado = loadImage('imagens do jogo2/frente parado.png');
  careca_frente_andando1 = loadImage('imagens do jogo2/frente andando 1.png');
  careca_frente_andando2 = loadImage('imagens do jogo2/frente andando 2.png');
  //careca de lado
  careca_direita_parado = loadImage('imagens do jogo2/lado direito parado.png');
  careca_direita_andando = loadImage('imagens do jogo2/lado direito andando.png');
  careca_esquerda_parado = loadImage('imagens do jogo2/lado esquerdo parado.png');
  careca_esquerda_andando = loadImage('imagens do jogo2/lado esquerdo andando.png');
  //careca de trás
  careca_tras_parado = loadImage('imagens do jogo2/trás parado.png');
  careca_tras_andando1 = loadImage('imagens do jogo2/trás andando 1.png');
  careca_tras_andando2 = loadImage('imagens do jogo2/trás andando 2.png');
  //vampiro
  vampiro_direita = loadImage('imagens do jogo2/vampiro direita.png');
  vampiro_esquerda = loadImage('imagens do jogo2/vampiro esquerda.png');
  //slenderman
  slendermanImg = loadImage('imagens do jogo2/Slenderman.png');
  //fantasma
  fantasmaImg = loadImage('imagens do jogo2/fantasma.png');
  //espinhos
  espinhos_baixo_img = loadImage('imagens do jogo2/espinhos de baixo.png');
  espinhos_cima_img = loadImage('imagens do jogo2/espinhos de cima.png');
  


}

function setup(){
  createCanvas(500, 500);
 //careca
  careca = createSprite(250, 30, 20, 20);
  careca.addImage('carequinha', careca_frente_parado); 
  careca.scale = 0.0018; 
  //fantasma
  fantasma = createSprite(250, 100, 20, 20);
  fantasma.addImage('gaspar', fantasmaImg);
  fantasma.scale = 0.005;
  fantasma.velocityX = 5;
  //vampiro
  vampiro = createSprite(250, 400, 20, 20);
  vampiro.addImage('drácula', vampiro_direita);
  vampiro.scale = 0.05;
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
  slenderman1.scale = 0.003;

  slenderman2 = createSprite(360, 250, 30, 30);
  slenderman2.addImage('slenderman2img', slendermanImg);
  slenderman2.scale = 0.003;

  slenderman3 = createSprite(300, 200, 30, 30);
  slenderman3.addImage('slenderman3img', slendermanImg);
  slenderman3.scale = 0.003;
  
  slenderman4 = createSprite(240, 250, 30, 30);
  slenderman4.addImage('slenderman4img', slendermanImg);
  slenderman4.scale = 0.003;
    
  slenderman5 = createSprite(180, 200, 30, 30);
  slenderman5.addImage('slenderman5img', slendermanImg);
  slenderman5.scale = 0.003;

  slenderman6 = createSprite(120, 250, 30, 30);
  slenderman6.addImage('slenderman6img', slendermanImg);
  slenderman6.scale = 0.003;

  slenderman7 = createSprite(60, 200, 30, 30);
  slenderman7.addImage('slenderman7img', slendermanImg);
  slenderman7.scale = 0.003;
  //paredes, toca o roqui rou pq essa vai demorar um cadin

  parede2 = createSprite(220, 50, 452, 3);

  parede3 = createSprite(445, 89, 3, 80);

  parede4 = createSprite(270, 160, 460, 3);

  parede5 = createSprite(405, 120, 3, 80);

  parede6 = createSprite(365, 89, 3, 80);

  parede7 = createSprite(325, 120, 3, 80);

  parede8 = createSprite(285, 89, 3, 80 );

  parede9 = createSprite(245, 120, 3, 80);

  parede10 = createSprite(205, 89, 3, 80);

  parede11 = createSprite(165, 120, 3, 80);

  parede12 = createSprite(125, 89, 3, 80);

  parede13 = createSprite(85, 120, 3, 80);

  parede14 = createSprite(220, 280, 450, 3);

  parede15 = createSprite(280, 320, 450, 3);

  //bordas
  //borda1.shapeColor = 'darkRed';
  //borda1 = createSprite(250, 1, 500, 3);
//
  //borda2 = createSprite(499, 250, 1, 500);
  //borda2.shapeColor = 'darkRed';
//
  //borda3 = createSprite(250, 499, 500, 1);
  //borda3.shapeColor = 'darkRed';
//
  //borda4 = createSprite(1, 250, 1, 500);
  //borda4.shapeColor = 'darkRed';

  bordas = createEdgeSprites();
}

function draw(){
  background('purple'); 
  drawSprites();
  fantasma.bounceOff(bordas[0]);
  fantasma.bounceOff(bordas[1]);
  fantasma.bounceOff(bordas[2]);
  fantasma.bounceOff(bordas[3]);

  

}