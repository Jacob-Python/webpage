var i = 0
var input
var zoom = 180
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	cfrac(3)
}



function cfrac(i) {
strokeWeight(5)
clear()
rotateX(frameCount * 0.1);
rotateY(frameCount * 0.1);	
if (mouseIsPressed) {
 zoom = mouseX - windowWidth / 2
}
sqfrac(0, 0, 0, zoom, i)
}

function sqfrac(x, y, z, s, i) {
	if (i > 0) {
	 if (int(i / 2) === i / 2) {
		stroke(0, 0, 255)
	 } else {
		stroke(0, 255, 0)
	 }
	 cube(x, y, z, s)
	 sqfrac(x, y + s / 2, z, s / 2, i - 1)
	 sqfrac(x, y - s / 2, z, s / 2, i - 1)
	 sqfrac(x, y, z - s / 2, s / 2, i - 1)
	 sqfrac(x, y, z + s / 2, s / 2, i - 1)
	 sqfrac(x - s / 2, y, z, s / 2, i - 1)
	 sqfrac(x + s / 2, y, z, s / 2, i - 1)
	}
}

function cube(x, y, z, s) {
	var ds = s / 2
	line(x - ds, y - ds, z - ds, x - ds, y + ds, z - ds)
	line(x - ds, y + ds, z - ds, x + ds, y + ds, z - ds)
	line(x + ds, y + ds, z - ds, x + ds, y - ds, z - ds)
	line(x + ds, y - ds, z - ds, x - ds, y - ds, z - ds)
	line(x - ds, y - ds, z + ds, x - ds, y + ds, z + ds)
	line(x - ds, y + ds, z + ds, x + ds, y + ds, z + ds)
	line(x + ds, y + ds, z + ds, x + ds, y - ds, z + ds)
	line(x + ds, y - ds, z + ds, x - ds, y - ds, z + ds)
	line(x - ds, y - ds, z - ds, x - ds, y - ds, z + ds)
	line(x + ds, y - ds, z - ds, x + ds, y - ds, z + ds)
	line(x + ds, y + ds, z - ds, x + ds, y + ds, z + ds)
	line(x - ds, y + ds, z - ds, x - ds, y + ds, z + ds)
}