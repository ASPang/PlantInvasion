/* 
 * Coder: Angela Pang
 * 
 * Assignment: CIS4500 Week 3 - Shooting (Plant Invasion)
 * Date: 2015/01/14
 * Modified: 2015/02/02
 * 
 * Filename: gameTimer.js
 * 
 * Description:
 * This files contains the function that keeps track of the gameplay time.
 * 
 */

var gameTimer;
var startClock;
var endGameFlag = true; //Game isn't running is true
var numGamePlay = 0;
var milSec = 1000;


function startTimer() { 
   clearInterval(gameTimer);   
   startClock = new Date().getTime();
   
   var oneSec = 30;
   setInterval(function(){updateGame();}, oneSec);     

    /*Initiate game*/
    initGame();
    endGameFlag = false;
    
}


function updateGame() {
    var i;  //Loop counter
    
    /*Clear the canvas*/
    backgroundImg.clearCanvas();
    
    /*Draw the background*/
    backgroundImg.redraw(backgroundImg.xPos, backgroundImg.yPos);
    redrawPaths();
    
    /*Draw gameplay information*/
    backgroundImg.canvasCtx.fillStyle = "Black";
    backgroundImg.canvasCtx.font = "bold 16px Arial";
    backgroundImg.canvasCtx.fillText("Score: " + points, backgroundImg.canvas.width / 2 - 30, 16);
    
    /*Draw the character*/
    character.redraw(character.xPos, character.yPos);
    
    /*Update Emeny position*/
    moveEnemies();
        
    /*Check if the image intersects with anything on the canvas*/
    checkObstacles();
    characterHit();
    
    /*Determine if the game over flag as been set*/
    if (endGameFlag == true) { 
        clearInterval(gameTimer);
                
        /*Disable all enemies*/ 
        for (i = 0; i< enemy.length; i++) {                        
            enemy[i].dx = 0;
            enemy[i].dy = 0;
        }
        
        /*Inform the user that they lost*/
        backgroundImg.canvasCtx.fillStyle = "red";
        backgroundImg.canvasCtx.font = "bold 60px Arial";
        backgroundImg.canvasCtx.fillText("GAME OVER", 125, 160);
        backgroundImg.canvasCtx.font = "bold 30px Arial";
        backgroundImg.canvasCtx.fillText("Final Score: " + points, 220, 220);
    }
}

function moveEnemies() {
    var i;  //Loop Counter
    
    /*Modify every alien image*/
    for (i = 0; i< enemy.length; i++) {            
        
        enemy[i].redraw(enemy[i].xPos + enemy[i].dx , enemy[i].yPos - enemy[i].dy);
        
        /*Determine if the alien is off screen*/
        if ((enemy[i].xPos) < 0) {
            enemy[i].dx = -enemy[i].dx;
        }
        else if ((enemy[i].xPos + enemy[i].width) > backgroundImg.canvas.width) {
            enemy[i].dx = -enemy[i].dx;
        }
        else if ((enemy[i].yPos + enemy[i].height) >= backgroundImg.canvas.height) {
            endGameFlag = true;
            enemy[i].dy = 0;
            enemy[i].dx = 0;
        }
    }
}

function moveAliens(speed) {
    var i;  //Loop counter
    
    /*Modify every alien image*/
    for (i = 0; i< aliens.length; i++) {            
        aliens[i].canvasCtx.globalAlpha = alienVisibility;    
        aliens[i].redraw(aliens[i].xPos - speed, aliens[i].yPos);
        
        /*Determine if the alien is off screen*/
        if ((aliens[i].xPos + aliens[i].width) < 0) {
            newAlien(aliens[i]);
        }        
        
        /*Modify the alien's visibility*/
        if (visible == true) {
            alienVisibility -= 0.001;
        }
        else if (visible == false) { 
            alienVisibility += 0.001;
        }
        
        if (alienVisibility >= 1.0) {
            alienVisibility = 1.0;
            visible = true;
        }
        else if (alienVisibility <= 0.0) {
            alienVisibility = 0.0;
            visible = false;
        }
        aliens[i].canvasCtx.globalAlpha = 1;  
    }
}

function addTime() {
    var countDownTime = 60;
    var sec30 = 30 * milSec; 
    
    /*Add 30 seconds of game play*/
    startClock += sec30;
    
    /*Calculate time lapse*/
    var timeRemaining = Math.round(countDownTime - (new Date().getTime() - startClock) / milSec);
    
    if (timeRemaining > 60) {
        startClock = new Date().getTime(); 
    }
}

function candyTime() {
    var powerRemaining = Math.round(powerUpEnd - (new Date().getTime() - powerUp) / milSec);
    
    if (powerRemaining > 0) {
        backgroundImg.canvasCtx.font = "bold 30px Arial";
        backgroundImg.canvasCtx.fillText("Power Up Activated", 150, 110);
    }
    
    return powerRemaining;
}

/*Convert Second to millisecond*/
function convertSecToMilSec(sec) {
    var milSec = 1000;
    
    return sec * milSec;
}

/*Convert millisecond to second*/
function convertMilSecToSec(milSec) {
    var sec = 1000;
    
    return milSec / sec;
}

function redrawPaths() {
    var i = 0, numPaths;
    
    numPaths = path.length;
    for (i = 0; i < numPaths; i++) {
        path[i].drawLine();
    }
}

function clearBoard() {
    var i = 0;
    
    /*Remove all Enemies*/
    for (i = 0; i < enemy.length; i++) {
        enemy.pop();
    }
    
    /*Remove all projectiles*/
    for (i = 0; i < projectile.length; i++) {
        projectile.pop();
    }    
}

