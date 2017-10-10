var Game = require("./game.js");

var doggy = new Game();

document.addEventListener('keydown', function(event) {
    doggy.turnDog(event);
});
