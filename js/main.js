let img;
let puzzle;
let imgSize = 512;
let size = 4;

function preload() {
    img = loadImage('img/giraffe.jpg');
}

function setup() {
    let canvas = createCanvas(512,512);
    canvas.parent('canvas-frame');
    background(51);
    puzzle = new Puzzle(size, img, imgSize);
    puzzle.draw();
}

function mouseClicked() {
    if(mouseX > imgSize || mouseY > imgSize) { return; }
    puzzle.clicked(mouseX, mouseY);
}

function scramble() {
    puzzle.randomize();
}