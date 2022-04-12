let source;

let tiles = [];
let cols = 5;
let rows = 5;
let w,h;
let board = [];

function preload() {
    source = loadImage("killua.jpg");
}

function setup() {
    createCanvas(500, 500);
    w = width/cols;
    h = height/rows;

    for (let i = 0; i < cols; i++){
       for (let j = 0; j < cols; j++){ 
           let x = i*w;
           let y = j*h;
           let img = createImage(w,h);
           source.loadPixels();
           //img.loadPixels();
           img.copy(source, x,y,w,h,0,0,w,h);
           //img.updatePixels();
           let index = i + j * cols;
           board.push(index);
           let tile = new Tile(index, img);
           tiles.push(tile);
       }
    }
}

function draw() {
    //image(source, 0, 0);

    for (let i=0; i < cols; i++){
        for (let j=0; j < rows; j++){
            let index = i + j * cols;
            let x = i * w;
            let y = j * h;
            let timeIndex = board[index];
            let img = tiles[tileIndex].img;
            image(img, x, y);
        }
    }
}