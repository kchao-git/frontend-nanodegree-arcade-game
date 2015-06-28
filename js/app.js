// Enemies our player must avoid
var Enemy = function() {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';

	this.row = 3;

	this.x = 0;
	this.y = this.row * 83 - 20;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
	// Assigning the player's sprite
	this.sprite = 'images/char-boy.png';
	
	//Setting player's starting grid square
	this.col = 2;
	this.row = 5;

	//Setting player's x and y based on col and row position
	this.x = this.col * 101;
	this.y = this.row * 83 - 30;
}

Player.prototype.update = function() {
	this.x = this.col * 101;
	this.y = this.row * 83 - 30;
}

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {
	switch(key){
		case 'left':
			player.col = (player.col == 0) ? 0 : player.col - 1;
			break;
		case 'right':
			player.col = (player.col == 4) ? 4 : player.col + 1;
			break;
		case 'up':
			player.row = (player.row == 0) ? 0 : player.row - 1;
			console.log(player.row);
			break;
		case 'down':
			player.row = (player.row == 5) ? 5 : player.row + 1;
			break;
	}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy()];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});
