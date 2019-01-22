class Tile {
    constructor(img, imgX, imgY, size) {
        this.img = img;
        this.imgX = imgX * size;
        this.imgY = imgY * size;
        this.size = size;
    }

    draw(x, y) {
        image(this.img, x*this.size, y*this.size, this.size, this.size, this.imgX, this.imgY, this.size, this.size);
        push();
        noFill();
        strokeWeight(2);
        stroke(51);
        rect(x*this.size, y*this.size, this.size, this.size);
        pop();
    }

    copy() {
        return new Tile(this.img, this.imgX / this.size, this.imgY / this.size, this.size);
    }
}