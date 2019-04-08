let p1;
let p2;

const s1 = function(p) {

p.blank;

p.setup = function() {
  let canvas = p.createCanvas(p.windowWidth/2, 400, p.WEBGL);
	canvas.parent('sketch-1');
  p.smooth();
  p.blank = p.createGraphics(10,10);
  p.blank.background(255,0,0);

}

p.draw = function() {
  p.background(255);

  let tubeRes = 40;
  let tubeX = [];
  let tubeY = [];
  let angle = p.TWO_PI / (tubeRes - 1);

  for (let i = 0; i < tubeRes; i++) {
    tubeX[i] = p.cos(angle * i);
    tubeY[i] = p.sin(angle * i);
  }

  p.noStroke();

  p.rotateY(p.frameCount*0.001);
  p.rotateX(p.frameCount*0.01);


  let xzScale = p.sin(p.frameCount*0.01)*200;
  let yScale = 40;


  p.texture(p.blank);

  for (let y = -10; y < 10; y++) {
    p.beginShape(p.TRIANGLE_STRIP);
    for (let i = 0; i < tubeRes; i++) {
      let x = tubeX[i] * xzScale;
      let z = tubeY[i] * xzScale;

      p.fill(255);
      p.vertex(x - p.sin(y + 1) * 20, (y+1) * yScale, z);
      p.fill(0,0,255);
      p.vertex((x) - p.sin(y) * 20, (y) * yScale, z);
      p.fill(255);
      p.vertex((x + 1) - p.sin(y + 1) * 20, (y + 1) * yScale, z);
      p.fill(0,255,0);
      p.vertex((x+1) - p.sin(y) * 20, (y) * yScale, z, 1,1);
    }
    p.endShape();
  }
}
}

p1 = new p5(s1, 'sketch-1');
