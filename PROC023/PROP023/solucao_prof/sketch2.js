var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var boxX, boxY;
var engine, world;
var estado = 1;

const Engine = Matter.Engine;
const World = Matter.Composite;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

/*
	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;
	console.log(packageIMG.height * 0.2);
*/
	helicopterSprite = createSprite(width / 2, 80, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;


	engine = Engine.create();
	world = engine.world;

	//packageBody = new Caixa(width / 2, 80, packageIMG.width * 0.2, packageIMG.height * 0.2);
	packageBody = Bodies.rectangle(width / 2, 80, packageIMG.width * 0.2, packageIMG.height * 0.2, {
		'restitution': 0.5,
		'isStatic': true
	});
	World.add(world, packageBody);



	helicopterBody = new Caixa2(width / 2, 80, 10, 10);
	ground = new Solo(width / 2, 680, width, 50);

	boxX = width / 2 - 100;
	boxY = 610;
	boxLeftBody = new Caixa2(boxX + 10, boxY, 20, 100);
	boxRightBody = new Caixa2(boxX + 190, boxY, 20, 100);
	boxBottomBody = new Caixa2(boxX + 100, boxY + 40, 200, 20);


}


function draw() {
	background(0);
	Engine.update(engine);

	//packageSprite.x = packageBody.position.x;
	//packageSprite.y = packageBody.position.y;
	helicopterSprite.x = helicopterBody.body.position.x;
	helicopterSprite.y = helicopterBody.body.position.y;


	if (estado === 1) {
		//packageSprite.x = helicopterSprite.x;
		packageBody.position.x = helicopterBody.body.position.x;

		push();
		translate(helicopterSprite.x, helicopterSprite.y);
		rect(0, 0, packageIMG.width * 0.2, packageIMG.height * 0.2);
		pop();

	}else{
		push();
		translate(packageBody.position.x, packageBody.position.y);
		rect(0, 0, packageIMG.width * 0.2, packageIMG.height * 0.2);
		pop();
	}

	console.log([helicopterSprite.x, helicopterBody.body.position.x, packageBody.position.x,  packageBody.position.y])
	boxRightBody.display("red");
	boxLeftBody.display("red");
	boxBottomBody.display("red");

	ground.display();


	drawSprites();



}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {

		helicopterBody.body.position.x = helicopterBody.body.position.x - 20;
		/*if (estado === 1) {
			translation = { x: -20, y: 0 }
			Body.translate(packageBody.body, translation);
		}*/

	} else if (keyCode === RIGHT_ARROW) {
		helicopterBody.body.position.x = helicopterBody.body.position.x + 20;
		/*if (estado === 1) {
			translation = { x: 20, y: 0 }
			Body.translate(packageBody.body, translation);
		}*/
	} else if (keyCode === DOWN_ARROW) {
		

		Body.setStatic(packageBody, false);
		estado = 2;
		
		

	}
}

class Caixa {
	constructor(posX, posY, largura, altura) {

		this.posX = posX;
		this.posY = posY;
		this.lar = largura;
		this.alt = altura;

		var options = {
			'restitution': 0.5,
			'isStatic': true
		}

		this.body = Bodies.rectangle(this.posX, this.posY, this.lar, this.alt, options);
		World.add(world, this.body);



	}
	display() {
		push();
		translate(this.body.position.x, this.body.position.y);
		rotate(this.body.angle);
		rectMode(CENTER);
		rect(0, 0, this.lar, this.alt);
		pop();
	}
}

class Caixa2 {
	constructor(posX, posY, largura, altura) {

		this.posX = posX;
		this.posY = posY;
		this.lar = largura;
		this.alt = altura;

		var options = {
			'isStatic': true
		}

		this.body = Bodies.rectangle(this.posX, this.posY, this.lar, this.alt, options);
		World.add(world, this.body);



	}
	display(cor) {
		push();
		translate(this.body.position.x, this.body.position.y);
		rotate(this.body.angle);
		rectMode(CENTER);
		fill(cor);
		rect(0, 0, this.lar, this.alt);
		pop();
	}
}

class Solo {
	constructor(posX, posY, largura, altura) {

		this.posX = posX;
		this.posY = posY;
		this.lar = largura;
		this.alt = altura;

		var options = {
			'isStatic': true
		};

		this.body = Bodies.rectangle(this.posX, this.posY, this.lar, this.alt, options);
		World.add(world, this.body);



	}
	display() {
		fill("brown");
		rect(this.body.position.x, this.body.position.y, this.lar, this.alt);

	}
}



