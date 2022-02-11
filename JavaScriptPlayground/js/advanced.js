//Variables to keep track of player, aliens, and keys
var ninja = {
    speed: 256
};

var alien = {};

var aliensCaught = 0;

var keysDown = {};

//Add an event listener to the document to react when any keys are pressed
document.addEventListener("keydown", function (e) {

    //When a key is pressed, take the keyCode of that key and add it as an index of keysDown
    keysDown[e.keyCode] = true;

    //Prevents the keys from scrolling the browser window
    e.preventDefault();

});

//Add an event listener to the document to react when a key is released
document.addEventListener("keyup", function (e) {

    //Removes the keycode of the released key from keysDown
    delete keysDown[e.keyCode];

    //Prevent keys from scrolling the browser window
    e.preventDefault();

});

var gameboard = document.getElementById("gameboard");
var score = document.getElementById('score');

var alienElement = document.getElementById('alien');
alienElement.style.display = "inline-block";
alienElement.style.position = "absolute";

//Write a function to be called on reload/first load to grab alien & place it on the board
var reload =

    function () {
        alien.x = 32 + (Math.random() * (gameboard.offsetWidth - 64));
        alien.y = 32 + (Math.random() * (gameboard.offsetHeight - 64));

        alienElement.style.top = alien.y + "px";
        alienElement.style.left = alien.x + "px";

        score.textContent = aliensCaught;
    }

//The variables and reload() above are helping us grab the alien image and move it around the board affter the alien is banished

var ninjaElement = document.getElementById("ninja");

//Write a function to set the ninjas starting position, then call reload() to place alien
var set = function () {

    ninja.x = gameboard.offsetWidth / 2;
    ninja.y = gameboard.offsetHeight / 2;
    ninjaElement.style.top = ninja.y + "px";
    ninjaElement.style.left = ninja.x + "px";
    reload(); //This gets the alien on the screen for the first time

}

//The variable and set() above help us move the ninja around on the screen

//Write a function to update our ninja (think redraw)
var update = function (modifier) {

    //LEFT arrow key
    if (37 in keysDown) {
        ninja.x -= ninja.speed * modifier;
        ninjaElement.style.left = ninja.x + "px";
        ninjaElement.style.transform = "scaleX(-1)";//Ninja faces left
    }

    //UP arrow key
    if (38 in keysDown) {
        ninja.y -= ninja.speed * modifier;
        ninjaElement.style.top = ninja.y + "px";
    }

    //RIGHT arrow key
    if (39 in keysDown) {
        ninja.x += ninja.speed * modifier;
        ninjaElement.style.left = ninja.x + "px";
        ninjaElement.style.transform = "scaleX(1)";//Ninja faces right

    }

    //Down arrow key
    if (40 in keysDown) {
        ninja.y += ninja.speed * modifier;
        ninjaElement.style.top = ninja.y + "px";
    }

    //If the ninja and the alien are close enough, we will consider them to have collided
    //So, increase the number of aliens caught and use reload() to place another alien on the board
    if (ninja.x <= (alien.x + 32) && alien.x <= (ninja.x + 32) && ninja.y <= (alien.y + 32) && alien.y <= (ninja.y + 32)) {
        ++aliensCaught;
        reload();


    }


}
    //Write the function to calculate the time & it's impact on our ninja's movement 
    //This will be the main function used to play the game
    var main = function () {

        //Note the time
        var now = Date.now();
        var delta = now - then;

        update(delta / 1000);

        //Note the time
        then = now;

        requestAnimationFrame(main);
        //is a function built into javascript that helps execute animation in an efficient and optimized manner. (smooth instead of jerky)
    }

//note the time
var then = Date.now()
set();
main();