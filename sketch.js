
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var rad = 50;

var paper, paperGhost;
var trash, trashImg
var lWall, rWall, dFloor, tFloor;
var trash1, trash2, trash3;


function preload() {
	trashImg = loadImage("trsh.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//var
	var pprOpt = {
		isStatic: false,
		restitution: 0.1,
		friction: 0,
		density: 0.8
	};

	//bodies
	paper = Bodies.circle(260, 100, rad / 2, pprOpt);
	World.add(world, paper);
	dFloor = new wall(windowWidth/2,windowHeight,windowWidth,20);
	tFloor = new wall(windowWidth/2,windowHeight-windowHeight,windowWidth,20);
	lWall = new wall(windowWidth-windowWidth,windowHeight/2,20,windowHeight);
	rWall = new wall(windowWidth,windowHeight/2,20,windowHeight);
	trash1 = new wall(windowWidth/2-windowWidth/16,windowHeight-windowHeight/2,20,windowWidth/13)
	trash2 = new wall(windowWidth/2+windowWidth/16,windowHeight-windowHeight/2,20,windowWidth/13)
	trash3 = new wall(windowWidth/2,windowHeight/2+windowHeight/16,windowWidth/7,20);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	ellipse(paper.position.x, paper.position.y, rad, rad);
	//dFloor.display();
	//tFloor.display();
	//lWall.display();
	//rWall.display();
	trash1.display();
	trash2.display();
	trash3.display();

	drawSprites();
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(paper,paper.position,{x:30,y:-30});
	}
	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(paper,paper.position,{x:-30,y:-30});
	}
}
