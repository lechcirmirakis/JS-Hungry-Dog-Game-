function Dog(n) { //
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

function Dainty() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

function Game() { // C
    this.board = document.querySelectorAll("#board div");
    this.dog = new Dog();
    this.dainty = new Dainty();
    this.score = 0;

    this.index = function(x, y) {
        return x + (y * 10);
    }
}

Game.prototype.showDog = function() {
    var d = this.board[this.index(this.dog.x, this.dog.y)].classList.add("dog");
};

Game.prototype.showDainty = function() {
    var da = this.board[this.index(this.dainty.x, this.dainty.y)].classList.add("dainty");
};

Game.prototype.startGame = function() {
    this.idSetInterval = setInterval(function() {
        console.log("hura z setIntervala");
    });

    }

var gra = new Game();
gra.startGame();
gra.showDog();
gra.showDainty();
