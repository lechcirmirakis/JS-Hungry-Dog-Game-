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

    var self = this;

    this.startGame = function() {
        this.showDog();
        this.showDainty();
        this.idSetInterval = setInterval(function() {
            self.moveDog();
        }, 500);
    }
}

Game.prototype.showDog = function() {
    var d = this.board[this.index(this.dog.x, this.dog.y)].classList.add("dog");
};

Game.prototype.showDainty = function() {
    var da = this.board[this.index(this.dainty.x, this.dainty.y)].classList.add("dainty");
};

Game.prototype.moveDog = function() {
    this.hideVisibleDog();

    if (this.dog.direction === "right") {
        this.dog.x += 1;
    } else if (this.dog.direction === "down") {
        this.dog.y += 1;
    } else if (this.dog.direction === "up") {
        this.dog.y -= 1;
    } else if (this.dog.direction === "left") {
        this.dog.x -= 1;
    }
    this.showDog();
    this.checkCoinCollision();
}

Game.prototype.hideVisibleDog = function () {
    document.querySelector('.dog').classList.remove('dog');
};

Game.prototype.turnDog = function(event){
    switch (event.which) {
        case 37:
        this.dog.direction = "left";
        break;

        case 38:
        this.dog.direction = "up";
        break;

        case 39:
        this.dog.direction = "right";
        break;

        case 40:
        this.dog.direction = "down";
        break;
    }
}

Game.prototype.checkCoinCollision = function () {
    if (this.dog.x === this.dainty.x && this.dog.y === this.dainty.y) {
        document.querySelector(".dainty").classList.remove("dainty");
        this.score += 1;
        document.querySelector('strong').innerText = this.score;
        this.dainty = new Dainty();
        this.showDainty();
    }
};

var doggy = new Game();
doggy.startGame();

document.addEventListener('keydown', function(event){
    doggy.turnDog(event);
});
