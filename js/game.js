var Dainty = require("./dainty.js"); // import dainty.js
var Dog = require("./dog.js"); // import dog.js

function Game() { // constructor for game
    this.board = document.querySelectorAll("#board div");
    this.dog = new Dog(); // new object Dog basen on the Dog constructor
    this.dainty = new Dainty(); // // new object Dog basen on the Dog constructor
    this.score = 0; // variable holding the game score
    this.isGameOver = false;
    this.index = function(x, y) {
        return x + (y * 10);
    }

    this.speed = 500; // variable holding Dog speed in ms
    var self = this;

    this.checkCoinCollision = function() { // Method of dog collision with delicacy
        if (this.dog.x === this.dainty.x && this.dog.y === this.dainty.y) {
            document.querySelector(".dainty").classList.remove("dainty");
            this.score += 1;
            this.speed -= 10; // increases Dog speed
            document.querySelector('span').innerText = this.score;
            this.dainty = new Dainty();
            this.showDainty();
            clearInterval(this.idSetInterval); // clear interval for increases speed
            this.idSetInterval = setInterval(function() {
                self.moveDog();
            }, this.speed)
        }
    };

    this.startGame = function() { // the method that starts the game
        this.idSetInterval = setInterval(function() {
            self.moveDog();
        }, this.speed);
    }

    var startButton = document.querySelector("#startButton"); // variable for start button
    startButton.addEventListener("click", function(e) {
        self.startGame();
        self.endEvent();
    }, false);

    this.endEvent = function() {
        startButton.removeEventListener('click');
    }
}

Game.prototype.showDog = function() {
    this.board[this.index(this.dog.x, this.dog.y)].classList.add("dog");
};

Game.prototype.showDainty = function() {
    this.board[this.index(this.dainty.x, this.dainty.y)].classList.add("dainty");
};

Game.prototype.moveDog = function() { // method for move Dog on the board
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

    this.gameOver();
    if (this.isGameOver === true) {
        return;
    }
    this.showDog();
    this.checkCoinCollision();
}

Game.prototype.hideVisibleDog = function() { // hide the dog on the previous board
    var classDog = document.querySelector(".dog");
    if (classDog) {
        classDog.classList.remove('dog');
    }
};

Game.prototype.gameOver = function() { // If the dog collides with the wall
    if (this.dog.x < 0 || this.dog.x > 9 || this.dog.y < 0 || this.dog.y > 9) {
        this.isGameOver = true;
        clearInterval(this.idSetInterval);
        this.hideVisibleDog();
        this.scoreBoard();
    }
}

Game.prototype.scoreBoard = function() { // displays the board with the final score
    var score = document.createElement('div');
    score.innerText = "Game Over, your score is " + this.score;
    var score_board = document.createElement('div');
    score_board.classList.add('scoreBoard');
    score_board.appendChild(score);
    var board = document.querySelector('#board');
    board.appendChild(score_board);
    this.playAgain();
};

Game.prototype.playAgain = function() { // play again button
    var playAgain = document.createElement('button');
    playAgain.innerText = "Play Again";
    var inScoreBoard = document.querySelector('.scoreBoard');
    inScoreBoard.appendChild(playAgain);
    playAgain.addEventListener('click', function() {
        location.reload();
    })
};

Game.prototype.turnDog = function(event) { // event for dog move
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

module.exports = Game;
