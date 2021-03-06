// API:

//https://worldtimeapi.org/
//http://worldtimeapi.org/api/timezone/America/Sao_Paulo


const Engine = Matter.Engine;//Módulo responsáveis pelas leis físicas que rejem o mundo
const World = Matter.Composite;/* Modulo responsável pela coleção de Matter.Body, Matter.Constraint e outros objetos Matter.Composite. 
                                    UM COMPOSITE PODE CONTER DESDE UM ÚNICO CORPO ATÉ UM MUNDO INTEIRO 
                                    */
const Bodies = Matter.Bodies;/* O módulo Matter.Bodies contém métodos para criar corpos rígidos com configurações*/
const Constraint = Matter.Constraint;

var engine, world;
var solo, box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var plataform;
var constrainedLog;//restrição do tronco
var estilingue1;

var catapulta1, catapulta2, catapulta3;
var catapulta1IMG, catapulta2IMG, catapulta3IMG;

var estado = "repouso";
var imgFundo = "";
var score = 0;

function preload() {
    //imgFundo = loadImage("sprites/bg2.jpg");
    pegaHora();
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    //pegaHora();


    rectMode(CENTER);


    //angleMode(RADIANS); unidade padrão!
    //angleMode(DEGREES); unidade alternativa, porém aproximada

    solo = new Solo(600, height, 1200, 20);
    plataform = new Solo(150, 305, 300, 170);
    //constrainedLog = new Troncos(230, 180, 80, PI / 2);


    box1 = new Caixas(700, 320, 70, 70);
    box2 = new Caixas(920, 320, 70, 70);
    pig1 = new Porcos(810, 350);
    log1 = new Troncos(810, 260, 300, PI / 2);

    box3 = new Caixas(700, 240, 70, 70);
    box4 = new Caixas(920, 240, 70, 70);
    pig2 = new Porcos(810, 220);

    log2 = new Troncos(810, 180, 300, PI / 2);

    box5 = new Caixas(810, 160, 70, 70);
    log3 = new Troncos(760, 120, 150, PI / 7);
    log4 = new Troncos(870, 120, 150, -PI / 7);

    bird = new Passaros(200, 50);
    estilingue1 = new Estilingue(bird.body, { x: 200, y: 50 }, 0.04, 10);

}
function draw() {
    background(imgFundo);
    noStroke();
    textSize(35);
    fill("white");
    text("Pontuação  " + score, width - 500, 50);
    Engine.update(engine);
    //textSize(24);
    //text(mouseX + "," + mouseY, 50, 50);

    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    solo.display();
    plataform.display();
    box1.display();
    box2.display();

    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    pig2.score();

    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
    //constrainedLog.display();
    estilingue1.display();

}
function mouseDragged() {
    if (estado === "repouso") {
        Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
    }
}
function mouseReleased() {
    estado = "atacando";
    estilingue1.fly();
}
function keyPressed() {
    if (keyCode === 32) {
        estado = "repouso";
        estilingue1.ataque(bird.body);
    }
}
async function pegaHora() {
    //carregando os dados:
    let DadosHoraAtual = await fetch("http://worldtimeapi.org/api/timezone/America/Sao_Paulo");
    //console.log(DadosHoraAtual);
    //convertendo para o formato JSON
    let DadosHoraAtual_JSON = await DadosHoraAtual.json();
    //console.log(DadosHoraAtual_JSON.datetime);
    // Reservando a informação necessária: hora atual!
    let horaAtual = DadosHoraAtual_JSON.datetime.slice(11, 13);
    //console.log(horaAtual);


    if (horaAtual > 6 && horaAtual <= 15) {
        imgFundo = loadImage("sprites/bg.png");
    } else {
        imgFundo = loadImage("sprites/bg2.jpg");
    }

    //console.log(horaAtual <= 18)
    //convertendo de formato string para númerico  
    //console.log(typeof horaAtual.split(",").map(Number)[0]);
    //return horaAtual.split(",").map(Number)[0];


    // Reservando a informação necessária: hora atual!
    //let horaAtual = DadosHoraAtual_JSON.datetime[11]+DadosHoraAtual_JSON.datetime[12] 
    //convertendo de formato string para númerico  
    //console.log(typeof horaAtual.split(",").map(Number)[0]);
    //return horaAtual.split(",").map(Number)[0];

}
class BaseClass {
    constructor(x, y, largura, altura, angulo) {
        this.posX = x;
        this.posY = y;
        this.lar = largura;
        this.alt = altura;

        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        this.body = Bodies.rectangle(this.posX, this.posY, this.lar, this.alt, options);
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.lar, this.alt);
        pop();
    }
}
class Passaros extends BaseClass {
    constructor(x, y) {
        super(x, y, 50, 50);
        /*
        var options = {
            'density': 1.5,
            'friction': 1.0,
            'restitution': 0.5
        }
        */
        this.image = loadImage("sprites/bird.png");
        this.fumaca = loadImage("sprites/smoke.png");
        //criar uma array para armazenar a trajetória do bird:
        this.arrayBird = [];


    }
    display() {
        /*var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        */
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        super.display();
        if (this.body.velocity.x > 10 && this.body.position.x > 200) {
            var posicaoBird = [this.body.position.x, this.body.position.y];
            this.arrayBird.push(posicaoBird);
        }
        for (var count = 0; count < this.arrayBird.length; count++) {
            image(this.fumaca, this.arrayBird[count][0], this.arrayBird[count][1]);
        }
    }
}

class Caixas extends BaseClass {
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
        /*
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        */
        this.image = loadImage("sprites/wood1.png");

    }
    display() {
        /*var pos =this.body.position;//alias para this.body.position é opicional
        var angle = this.body.angle;
        */
        super.display();
    }
}

class Solo {
    constructor(x, y, largura, altura) {
        this.posX = x;
        this.posY = y;
        this.lar = largura;
        this.alt = altura;
        var options = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(this.posX, this.posY, this.lar, this.alt, options);
        World.add(world, this.body);

    }
    display() {

        //rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.lar, this.alt);
    }
}

class Porcos extends BaseClass {
    constructor(x, y) {
        super(x, y, 50, 50);
        /*
                var options = {
                    'restitution': 0.8,
                    'friction': 0.3,
                    'density': 1.0
                }
                */
        this.image = loadImage("sprites/enemy.png");
        this.visibility = 255;

    }
    display() {
        if (this.body.speed <= 3) {
            super.display();
        } else {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 2;
            tint(255, this.visibility);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }
        //console.log(this.body.speed);
        //text(this.body.speed, 70, 80);
    }
    score() {
        if (this.visibility < 0 && this.visibility > -2) {
            score++;
        }
    }
}

class Troncos extends BaseClass {
    constructor(x, y, altura, angulo) {
        super(x, y, 20, altura, angulo);
        /*
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        */
        this.image = loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body, angulo);

    }
    display() {
        super.display();

    }
};

class Estilingue {
    constructor(corpoA, pontoB, rigidez, comp) {
        this.corpoA = corpoA;
        this.pontoB = pontoB;
        this.rigidez = rigidez;
        this.comp = comp;
        this.catapulta1IMG = loadImage("sprites/sling1.png");
        this.catapulta2IMG = loadImage("sprites/sling2.png");
        this.catapulta3IMG = loadImage("sprites/sling3.png");

        var options = {
            bodyA: this.corpoA,
            pointB: this.pontoB,
            stiffness: this.rigidez,
            length: this.comp
        }

        this.estilingue = Constraint.create(options);
        World.add(world, this.estilingue);


    }
    fly() {
        this.estilingue.bodyA = null;
    }
    ataque(corpoA) {
        this.estilingue.bodyA = corpoA;

    }

    display() {
        image(this.catapulta1IMG, 200, 20);
        image(this.catapulta2IMG, 170, 20);

        if (this.estilingue.bodyA != null) {
            push();
            strokeWeight(10);
            stroke(48, 22, 8);
            if (this.corpoA.position.x < 220) {
                line(this.corpoA.position.x - 20, this.corpoA.position.y, this.pontoB.x - 10, this.pontoB.y);
                line(this.corpoA.position.x - 20, this.corpoA.position.y, this.pontoB.x + 30, this.pontoB.y - 3);
                image(this.catapulta3IMG, this.corpoA.position.x - 20, this.corpoA.position.y - 10, 15, 30);
            } else {
                line(this.corpoA.position.x + 20, this.corpoA.position.y, this.pontoB.x - 10, this.pontoB.y);
                line(this.corpoA.position.x + 20, this.corpoA.position.y, this.pontoB.x + 30, this.pontoB.y - 3);
                image(this.catapulta3IMG, this.corpoA.position.x + 20, this.corpoA.position.y - 10, 15, 30);

            }
            pop();
        }


    }
}

