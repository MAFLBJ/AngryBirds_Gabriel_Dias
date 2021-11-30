var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
var estado = 1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	/*
		packageSprite = createSprite(width / 2, 200, packageIMG.width*0.2, packageIMG.height*0.2);
		packageSprite.addImage(packageIMG);
		packageSprite.scale = 0.2;
		packageSprite.debug = true;
	*/
	rectMode(CENTER);
	packageBody = Bodies.rectangle(width / 2, 200, packageIMG.width * 0.2, packageIMG.height * 0.2, { restitution: 0.4, isStatic: true });
	World.add(world, packageBody);

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6;
	helicopterSprite.debug = true;

	groundSprite = createSprite(width / 2, height - 40, width, 20);
	groundSprite.shapeColor = color(255);

	//Criar Solo
	ground = Bodies.rectangle(width / 2, height - 40, width, 20, { isStatic: true });
	World.add(world, ground);

	boxPosition = width / 2 - 100;
	boxY = height - 40;


	boxleftSprite = createSprite(boxPosition, boxY - 50, 20, 100);
	boxleftSprite.shapeColor = color(255, 0, 0);

	boxLeftBody = Bodies.rectangle(boxPosition, boxY - 50, 20, 100, { isStatic: true });
	World.add(world, boxLeftBody);

	boxBase = createSprite(boxPosition + 100, boxY - 10, 200, 20);
	boxBase.shapeColor = color(255, 0, 0);

	boxBottomBody = Bodies.rectangle(boxPosition + 100, boxY - 10, 200, 20, { isStatic: true });
	World.add(world, boxBottomBody);

	boxrightSprite = createSprite(boxPosition + 210, boxY - 50, 20, 100);
	boxrightSprite.shapeColor = color(255, 0, 0);

	boxRightBody = Bodies.rectangle(boxPosition + 210, boxY - 50, 20, 100, { isStatic: true });
	World.add(world, boxRightBody);


	Engine.run(engine);

}


function draw() {

	background(0);

	if (estado === 1) {
		packageBody.position.x = helicopterSprite.x;

	}

	if (keyDown("a")) {

		helicopterSprite.x = helicopterSprite.x - 5;

	}

	if (keyDown("d")) {

		helicopterSprite.x = helicopterSprite.x + 5;
	}

	if (keyDown("s")) {
		estado = 2;
		Matter.Body.setStatic(packageBody, false);
	}

	push();
	translate(packageBody.position.x, packageBody.position.y);
	rotate(packageBody.angle);
	fill("orange");
	rect(0, 0, packageIMG.width * 0.2, packageIMG.height * 0.2);
	pop();
	/*
		packageSprite.x = packageBody.position.x;
		packageSprite.y = packageBody.position.y
	*/


	drawSprites();



}
