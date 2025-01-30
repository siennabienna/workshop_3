# workshop_3

Link to website: https://siennabienna.github.io/workshop_3/ 

# Things I looked at in this workshop
- Loading images in VSCode
- Experimenting with sizing images
- Experimenting with filters
- Learning to use an array
- Experimenting with pixels

# Loading Images into VSCode

I found some images of some of my old art that was already on my laptop as I thought this would be fun to play around with. To add the pictures, I created a new folder in my code called 'images', which I moved these pictures into. I learned to use the preload function to ensure that the images would be ready to go when I wanted to draw them.

```js
let img;

funtion preload(){
  img = loadImage('Images/ratt.jpg');

```

Next, I played around with the sizing of the image.

```js
function draw(){
  imageMode(centre);
  image(img, width/2, height/2);
}
```

![image](https://github.com/user-attachments/assets/0afed839-57be-4c7f-8ea6-2b0a5177c579)


The filters I played around with were `GRAY` `INVERT` `BLUR, X` `POSTERIZE`.

![image](https://github.com/user-attachments/assets/dfd69a5a-1da6-440c-bcf1-17d4d5feb196)

I noticed that they didn't only filter the image, but also everything else that was on the canvas.

# Learning to use an Array

In my first array, I tried just putting in text to get the hang of it. 

```js
let names = ["hello", "goodbye", "see you", "good morning"]; 

function setup() { 
  createCanvas (400, 400); 
} 

function draw() { 
  background (220); 
  text(names [2], 20, 200); 
} 

```

This meant that the array would let me select an input to show on the canvas.
I also experimented with putting `random` in instead of manually selecting the text I wanted to show.

Next, I put some images into an array. I found some pictures of the Beatles (I used Paul, George and Ringo) on pinterest and uploaded those into the code. Again, I used the preload funtion for the images, and then assigned them names in the array.

```js

let imgs = []; 
let beatle1, beatle2, beatle3;

function preload(){ 
  beatle1 = loadImage('Images/george.jpg'); 
  beatle2 = loadImage('Images/paul.jpg'); 
  beatle3 = loadImage('Images/ringo.jpg'); 
}

function setup() { 
createCanvas (400, 400); 

imgs.resize(400, 400); 
  imgs.push(beatle1); 
  imgs.push(beatle2); 
  imgs.push(beatle3); 
}

function draw() { 
  background (220);
  let r = random(imgs);
  image(r, -200, -200);
}
```

I found this video by The Coding Train very useful to understanding arrays: https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/7-arrays/1-arrays 

# Experimenting with Pixels

I learned the way to find a given pixel on the screen from the workshop video using this formula `(x value + y value * width) * 4`. This worked because each pixel has assigned 4 elements, R G B and A, so once the specific pixel is located, it must be timed by 4 in order to find out the values.

I decided to use my photo of Ringo to experiement changing the colours of the image at the pixel level. To do this, I first had to establish the pixel density is 1, to apply a consistent scale incase the pixels per inch of screen were too small. This would make the image appear way too fuzzy.

This is how I drew the image:

```js
function draw() { 
  background (220); 
  img.loadPixels(); 
  for (let y = 0; y < img.height; y ++){ 
  for (let x = 0; x < img.width; x++) {
  let index = (x + y img.width) * 4; * 
  img.pixels [index] = random(255)  
  img.pixels[index + 2] = random (255) 
  img.pixels [index + 3] = 255
  }
}

img.updatePixels(); 
  image(img, 0, 0, 300, 300);
}

```

![image](https://github.com/user-attachments/assets/82cb3be6-0477-4db6-a480-d1b64b64d1ab)

I was very happy with how this turned out, as it moved like static and had a very old laptop feel to it.


# Creating my Image Collage

I decided an interesting way to create an image collage was to do it like a Mondrian painting. My plan was to create a simple grid with lines, and then create images that would appear within the boxes of the painting. To do this, I first started by finding a Mondrian painting that I liked, and that would be simple enough to recreate in p5 using `line`. The one I found is called 'Composition with Large Red Plane, Yellow, Black, Grey and Blue', 1921.

![image](https://github.com/user-attachments/assets/0ab2461e-09bf-4848-b58e-e15b2c7cb832)

To start drawing this, I had a little experiment with creating my own grid first, just to get a feel for how the coordinates would work.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  line (125, 0, 125, 300);
  line (0, 200, 400, 200);
  line (170, 0, 170, 300);
  line (0, 100, 125, 100);
  line (0, 300, 400, 300)
  
  
}
```

I created this simple sketch, that gave me an idea of how I would do this. I decided to only use a section of the painting, just to make things a little easier whilst I was still figuring out how `line` worked. 

I decided on this section:

![image](https://github.com/user-attachments/assets/9e7a776e-1a21-4105-8f62-653ae9678bdc)





To start, I first made a boarder around the canvas. I then carefully added the lines for this, and made sure that eveything was even. After this, I added some coloured rectangles as a reference point of where the colours were on the original painting, and so that it could help me decide where to put the images better.

I used this website to help me find the RGB of his painting:

https://www.color-hex.com/color-palette/25374 

Here is my how I drew the lines:

```js

  noStroke();
  fill(40);
  rect(0, 250, 125, 400);
  
  fill(250,201,1);
  rect(250, 0, 400, 125)
  
  fill(221,1,0);
  rect(0, 0, 250, 250);
  
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

```

Link to p5 for 'Mondrian lines': https://editor.p5js.org/siennabearbum/full/fMPzCDzuY 

Next, I needed to find some images to put into the squares.

