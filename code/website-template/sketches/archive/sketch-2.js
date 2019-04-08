let s2 = function(p) {

	// Recode Project
	// Structure Square Series Inwards
	// Roger Coqart
	// http://recodeproject.com/artwork/v1n3structure-square-series-inwards


	p.setup = function() {
		let canvas = p.createCanvas(600, 600);
		canvas.parent('sketch-2');
		render()
	}

	p.draw = function() {
		if(p.frameCount % 10 === 0) {
			render();
		}
		if(p.mouseIsPressed) {
	    render()
	  }
	}

	render = function() {
	  p.background(255);
		let nx = 10;
		let ny = 10;
		let w1 = p.width/nx;
		let h1 = p.width/nx;
		for(let x=0; x<nx; x++) {
			for(let y=0; y<ny; y++) {
				p.drawSquare(x,y, w1, h1)
			}
		}
	}

	p.drawSquare = function(theX, theY, theW, theH) {
		let x = theX*theW
		let y = theY*theH
		p.noFill()
		p.stroke(0)
		p.push()
		p.translate(x,y)
		let size = 20
		p.strokeWeight(1.0)
		p.rect(0,0, size, size)
		let d = p.dist(p.width/2, p.height/2, x,y)
		let amount = 11 - p.floor(p.cos(p.map(d, 0, p.width/2, 0, p.PI)) * 10)
		p.drawLines(amount, size)
		p.pop()
	}

	p.drawLines = function(theAmount,theSize) {
		for(let i=0;i<theAmount;i++) {
			let x1 = p.floor(p.random()*3)
			let y1 = p.floor(p.random()*3)
			let x2 = p.floor(p.random()*3)
			let y2 = p.floor(p.random()*3)
			let s = 10
			p.line(x1 * s, y1 * s, x2 * s, y2 * s)
		}
	}
}

p2 = new p5(s2, 'sketch-2');
