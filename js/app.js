console.log("Legia mistrzem POlski i Swiata");
function Furry(n) {
    this.x = 0;
    this.y = 0;
    this.direction = right;
}

function Coin() {
    this.x = Math.floor(Math.random()*10);
    this.y = Math.floor(Math.random()*10);
}

function Game() {
    this.board = queryselectorAll('#board div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;

    this.index = function(x,y) {
    return x + (y * 10);
}

}
