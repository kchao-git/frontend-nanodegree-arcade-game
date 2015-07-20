//Define some constants
var GAME_ROWS = 6;
var GAME_COLS = 5;
var PLAYER_WIDTH = 70;
var ENEMY_WIDTH = 70;

var game_reset = false;


// Enemies our player must avoid
var Enemy = function(row) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';

	this.row = row;

	this.x = -150;
	this.y = this.row * 83 - 20;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	this.x = (this.x < 505) ? this.x + (100 * dt) : -150;

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
	this.col = 0;
	this.row = 0;

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
			player.col = (player.col > 0) ? (player.col - 1) : 0;
			break;
		case 'right':
			player.col = (player.col < (GAME_COLS - 1)) ? (player.col + 1) : (GAME_COLS - 1);
			break;
		case 'up':
			if(player.row == 1) {
				game_reset = true;
			} else if (player.row > 1) {
				player.row--;
			}
			break;
		case 'down':
			player.row = (player.row < (GAME_ROWS - 1)) ? (player.row + 1) : (GAME_ROWS - 1);
			break;
	}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
	new Enemy(1),
	new Enemy(2),
	new Enemy(3)
];
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
