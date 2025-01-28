let imgs = [];
let rat1, rat2, rat3; rat4; rat5; rat6;

function preload(){
  rat1 = loadImage('Images/beatle.jpg');
  rat2 = loadImage('Images/beatles.jpg');
  rat3 = loadImage('Images/ringo.jpg');
  rat4 = loadImage('Images/glasses.jpg')
  rat5 = loadImage('Images/paul mccartney.jpg')
  rat6 = loadImage('Images/paul.jpg')

}

function setup() {
  
  createCanvas(400, 400);
  pixelDensity(1);
  frameRate(1);
  imgs.push(rat1); 
  imgs.push(rat2);
  imgs.push(rat3);
  imgs.push(rat4);
  imgs.push(rat5);
  imgs.push(rat6);

    // image(imgs[2], 0, 0);
    let r = random(imgs);
    drawBeatle(8, 8, 238, 238, 221, 1, 0);
    drawBeatle(125, 325, 125, 68, 128, 128, 128);
    drawMondrian()
    noStroke()
    textAlign(CENTER,CENTER);
  text('twist and shout', 325, 290);
  
}

function draw() {
}

function drawMondrian(){
   // background(255, 255, 255);
  
   noStroke();
   fill(40);
   rect(0, 250, 125, 400);
   
   fill(250, 201, 1);
   rect(250, 0, 400, 125)
   
   fill(34,80,149);
   rect(250, 325, 400, 400);
   
   stroke(0),
   strokeWeight(16);
   line(0, 400, 400, 400);
   line(0, 0, 0, 400);
   line(0, 0, 400, 0);
   line(400, 0, 400, 400);
   
   strokeWeight(8);
   line(0, 250, 400, 250);
   line(250, 0, 250, 400);
   
   line(125, 250, 125, 400);
   line(250, 125, 400, 125);
   line(62.5, 250, 62.5, 400)
   
   line(0, 325, 400, 325);
   line(325, 125, 325, 250);
}

function drawBeatle(x, y, width, height, R, G, B){
  let srcImg = random(imgs);
    let img = createImage(srcImg.width, srcImg.height);
    img.copy(srcImg, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
    

    img.loadPixels();

    for (let y = 0; y < img.height; y ++){
      for (let x = 0; x < img.width; x ++){
        let index = (x + y * img.width) * 4;
        img.pixels[index] += R
        img.pixels[index + 1] += G
        img.pixels[index + 2] += B
        img.pixels[index + 3] = 255
    
      }
    }
  
    img.updatePixels();
    image(img, x, y, width, height);
}
