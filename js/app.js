var Game = require("./game.js"); // import game.js

var doggy = new Game(); // Creates a new game "doggy" based on the constructor Game

doggy.showDainty();
doggy.showDog();

var popup = document.querySelector('.popup a');
popup.addEventListener('click', function() {
    this.parentElement.style.display = "none";
});

document.addEventListener('keydown', function(event) {  // Event for keyboard key`s
    doggy.turnDog(event);
});
