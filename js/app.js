var Game = require("./game.js");

var doggy = new Game();

doggy.startGame();

document.addEventListener('keydown', function(event) {
    doggy.turnDog(event);
});
