class Puzzle {
    constructor(size, img, imgSize) {
        this.size = size;
        this.img = img;
        this.imgSize = imgSize;
        this.tileSize = this.imgSize / this.size;
        this.tileMap = [];
        this.constructTileMap();
    }

    constructTileMap() {
        for(let x = 0; x < this.size; x++) {
            this.tileMap[x] = [];
            for(let y = 0; y < this.size; y++) {
                if(x == this.size-1 && y == this.size-1) { continue; }
                this.tileMap[x][y] = new Tile(this.img, x, y, this.tileSize);
            }
        }
    }

    draw() {
        background(51);
        for(let x = 0; x < this.size; x++) {
            for(let y = 0; y < this.size; y++) {
                if(this.tileMap[x][y] === undefined) { continue; }
                this.tileMap[x][y].draw(x,y);
            }
        }
    }

    clicked(dx,dy) {
        let x = Math.floor(dx / this.tileSize);
        let y = Math.floor(dy / this.tileSize);
        let empty = this.checkForEmpty(x,y);

        if(empty) {
            console.log('test');
            this.tileMap[empty.x][empty.y] = this.tileMap[x][y];
            this.tileMap[x][y] = undefined;
            background(51);
            this.draw();
        }
    }

    checkForEmpty(x,y) {
        if(x-1 >= 0 && this.tileMap[x-1][y] === undefined) {
            return {x: x-1, y: y};
        }
        if(x+1 < this.size && this.tileMap[x+1][y] === undefined) {
            return {x: x+1, y: y};
        }
        if(y-1 >= 0 && this.tileMap[x][y-1] === undefined) {
            return {x: x, y: y-1};
        }
        if(y+1 < this.size && this.tileMap[x][y+1] === undefined) {
            return {x: x, y: y+1};
        }
        return null;
    }

    randomize() {
        for(let i = 0; i < 25; i++) {
            let rand1 = this.getRandomLocation();
            let rand2 = this.getRandomLocation();

            console.log(rand1, rand2);

            let temp = this.tileMap[rand1.x][rand1.y];
            this.tileMap[rand1.x][rand1.y] = this.tileMap[rand2.x][rand2.y];
            this.tileMap[rand2.x][rand2.y] = temp;
        }
        this.draw();
    }

    getRandomLocation() {
        return {
            x: Math.floor(Math.random() * this.size),
            y: Math.floor(Math.random() * this.size)
        }
    }
}