class Tile {
    constructor(img, imgX, imgY, size) {
        this.img = img;
        this.imgX = imgX * size;
        this.imgY = imgY * size;
        this.size = size;
    }

    draw(x, y) {
        image(this.img, x*this.size, y*this.size, this.size, this.size, this.imgX, this.imgY, this.size, this.size);
    }
}