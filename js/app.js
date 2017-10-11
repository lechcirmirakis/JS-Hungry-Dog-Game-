var Game = require("./game.js");

var doggy = new Game();

doggy.showDainty();
doggy.showDog();

document.addEventListener('keydown', function(event) {
    doggy.turnDog(event);
});
