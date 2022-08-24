const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var backgroundimg
var tower;

function preload() {

  backgroundimg = loadImage("./assets/background.gif")
}

function setup() {
  createCanvas(1000, 600);

  engine = Engine.create();
  world = engine.world;
  tower = new Tower(150, 350, 160, 320);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);

  image(backgroundimg, 0, 0, width, height)
  tower.display()

  Engine.update(engine);
}

