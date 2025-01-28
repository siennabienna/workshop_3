let imgs = [];
let rat1, rat2, rat3;

function preload(){
  rat1 = loadImage('Images/george.jpg');
  rat2 = loadImage('Images/paul.jpg');
  rat3 = loadImage('Images/ringo.jpg');
}

function setup() {
  
  createCanvas(400, 400);
  frameRate(1);
  imgs.push(rat1); 
  imgs.push(rat2);
  imgs.push(rat3);
  
}

function draw() {
  background(220);
  // image(imgs[2], 0, 0);
  let r = random(imgs);
  image(r, 0, 0, 400, 400);
  
}