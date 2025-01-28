# workshop_3
## Images

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

Here is my code:

```js

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // background(255, 255, 255);
  
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

