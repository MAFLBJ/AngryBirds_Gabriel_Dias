/* Teclas de atalho VSCode:
fonte: https://claudiojunior.me/posts/atalhos-do-vs-code
CTRL+G: Ir para a linha
CTRL+P: Ir para o arquivo
F8: Ir para o próximo error ou warning
F12: Ir para a definição da função ou método;
CTRL+K CTRL+J: Dobrar ou desdobrar todas as funções ou métodos;
ALT+F12: Mostrar a definição da função ou método;
CTRL+ALT+UP ou CTRL+ALT+DOWN: Adicionar um cursor acima ou abaixo da linha atual
SHIFT+ALT+I: Inserir um cursor no final de cada linha selecionada
CTRL+F2: Selecionar todas as ocorrências da seleção
CTRL+SHIFT+.: Ir para a navegação via breadcrumbs
CTRL+ALT+LEFT ou CTRL+ALT+RIGHT: Mover o editor em grupos
SHIFT+ALT+0: Alternar o layout dos grupos em vertical e horizontal
ALT+Z: Alternar entre quebra de linha;
CTRL+K M: Alterar a linguagem do arquivo;
*/


//Ex.:https://whitehatjr.github.io/AngryBirds-1/

//namespacing:
//namespacing:
const Engine = Matter.Engine;//Módulo responsáveis pelas leis físicas que rejem o mundo
const Composite = Matter.Composite;/* Modulo responsável pela coleção de Matter.Body, Matter.Constraint e outros objetos Matter.Composite. 
                                    UM COMPOSITE PODE CONTER DESDE UM ÚNICO CORPO ATÉ UM MUNDO INTEIRO 
                                    */
const Bodies = Matter.Bodies;/* O módulo Matter.Bodies contém métodos para criar corpos rígidos com configurações*/

var canvas;
var engine, world;
var box1, solo, box2;

function setup() {
    canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    //box1 = Bodies.rectangle(200, 200, 100, 50);

    //Composite.add(world, box1);

    box1 = new Caixas(200, 200, 100, 50);
    box2 = new Caixas(250, 250, 100, 50);

    solo = new Solo(200, 390, width, 20);


}

function draw() {
    background(0);
    Engine.update(engine);

    //    rect(box1.position.x, box1.position.y, 100, 50);
    box1.display();
    box2.display();

    solo.display();


}

class Caixas {
    constructor(posX, posY, lar, alt) {
        this.posX = posX;
        this.posY = posY;
        this.largura = lar;
        this.altura = alt;

        var options = {
            "isStatic": false,
            "restitution": 0.8,
            'friction': 1,
            'density': 1.0

        };

        this.body = Bodies.rectangle(this.posX, this.posY, this.largura, this.altura, options);
        Composite.add(world, this.body);

    }

    display() {
        push();
        rectMode(CENTER);        
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0, 0, this.largura, this.altura);
        pop();

    }
}

class Solo {
    constructor(posX, posY, lar, alt) {
        this.posX = posX;
        this.posY = posY;
        this.largura = lar;
        this.altura = alt;

        var options = {
            "isStatic": true,
            "restitution": 0.8,
            'friction': 0.3,
            'density': 1.0

        };

        this.body = Bodies.rectangle(this.posX, this.posY, this.largura, this.altura, options);
        Composite.add(world, this.body);

    }

    display() {
        push();
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.largura, this.altura);
        pop();

    }
}
