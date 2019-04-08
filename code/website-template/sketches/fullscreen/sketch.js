/**
 * Vertex Cylinder C
 *
 * Andreas Schlegel, 2019.
 *
 * Sound reactive. works well with
 * Elektrik and A soft throbbing of Time
 * Frank Bretschneider
 *
 */

let blank;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();
  blank = createGraphics(10, 10);
  blank.background(255);
  initSound();
  noStroke();
}

function draw() {
  background(220);

  let reactive = getSoundResponse();
  let xzScale = sin(frameCount * 0.01) * 60;
  let yScale = 60; //20 + (frameCount*2) % 200;

  let tubeRes = 16;
  let tubeX = [];
  let tubeY = [];
  const angle = TWO_PI / (tubeRes - 1);

  for (let i = 0; i < tubeRes; i++) {
    tubeX[i] = cos(angle * i);
    tubeY[i] = sin(angle * i);
  }

  rotateX(frameCount * 0.00025);
  rotateY(frameCount * 0.001);
  // rotateZ(frameCount * 0.002);

  texture(blank); // to avoid warning message produced in p5js version 7.3.

  let motion0 = frameCount * 0.01;

  for (let y = -10; y < 10; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i < tubeRes; i++) {
      let x = tubeX[i] * xzScale;
      let z = tubeY[i] * xzScale;

      fill(255,0,0);
      vertex(x - sin(y + 1 + motion0) * 200 * reactive[0],
        (y + 1) * yScale * reactive[0] * 2,
        z);
      fill(0, 255, 255);
      vertex((x) - sin(y + motion0) * 20,
        (y) * yScale,
        z);
      fill(255);
      vertex((x + 1) - sin(y + 1 + motion0) * 20,
        (y + 1) * yScale,
        z);
      fill(255, 255, 0);
      vertex((x + 1) - sin(y + motion0) * (displayWidth/2) * reactive[1],
        (y) * yScale,
        z);
    }
    endShape();
  }
}

function getSoundResponse() {
  let spectrum = fft.analyze();
  const nyquist = 22050;

  // get the centroid
  let spectralCentroid = fft.getCentroid();

  // the mean_freq_index calculation is for the display.
  let mean_freq_index = spectralCentroid / (nyquist / spectrum.length);
  let centroidplot = map(log(mean_freq_index), 0, log(spectrum.length), 0, 1);

  // extract preferred centroid bands
  let v0 = map(max(0.4, min(centroidplot, 0.6)), 0.4, 0.6, 0, 1);
  let v1 = map(max(0.5, min(centroidplot, 0.8)), 0.5, 0.8, 0, 1);

  // returns an array of centroid bands
  return [v0, v1];
}

function initSound() {
  sound = new p5.AudioIn();
  sound.start();
  fft = new p5.FFT();
  sound.connect(fft);
}



function keyPressed() {
  if (key === 'f' || key === 'F') {
    enterFullscreen();
  }
}

/* enter fullscreen-mode via
 * https://editor.p5js.org/kjhollentoo/sketches/H199a0c-x
 */
function enterFullscreen() {
  var fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}

/* full screening will change the size of the canvas */
function windowResized() {
  //resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function(event) {
  event.preventDefault();
}
