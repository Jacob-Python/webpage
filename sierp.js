function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	fractal(windowWidth / 2, windowHeight / 2, 100, 4)
}

function fractal(x, y, s, iter) {
	if (iter > 0) {
fractal_iteration(x, y, s)
fractal(x, y + s / 2, s / 2, iter - 1)
fractal(x + 0.866 * s, y + -1 * s, s / 2, iter - 1)
fractal(x + -0.866 * s, y + -1 * s, s / 2, iter - 1)
}
}

function dot(x, y, s) {
strokeWeight(s)
	point(x, y);
}

function fractal_iteration(x, y, s) {
stroke(255, 69, 0)
dot(x, y, s)
dot(x - s * 0.9, y - s * 1.55, s)
dot(x + s * 0.9, y - s * 1.55, s)
stroke (40, 255, 0)
dot(x, y - s, s)
}