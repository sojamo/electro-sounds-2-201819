function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
  background(0,255,128);
  fill(128,0,255);
  let s = sin(frameCount * 0.01) * 100;
  ellipse(width/2, height/2, 100 + s, 100 + s);
}
