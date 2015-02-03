/* 
 * Coder: Angela Pang
 * 
 * Assignment: CIS4500 Week 3 - Shooting (Plant Invasion)
 * Date: 2015/01/14
 * Modified: 2015/02/02
 * 
 * Filename: myscripts.js
 * 
 * Description:
 * This files contains the function that deals with starting the game and
 * updating the game windows.
 * 
 */

/*Start the game once the page has been loaded*/
 $(function ()  {     
    initGame();
});

/*Initialize the game*/
function initGame() {
    /*Preload images*/
     preloadGameImages();
     
    /*Display the board*/
    setupCanvas();
}

/*Initialize the canvas*/
function setupCanvas() {
     /*Setting up the canvas*/
    c = document.getElementById("gameCanvas");
    ctx = c.getContext("2d");
}



function preloadGameImages() {   
    gameImage = new preloadImages()
    
    /*Add image that needs to be preloaded*/
    for (i = 0; i < imgSrc.length; i++) {
        gameImage.setImageAry(imgSrc[i]);
    }
}


function setupCanvas() {
    var gameCanvas = "gameCanvas";
    backgroundImg = new imageLib(gameCanvas, 50, 400, 50, 0);
    
    
    
    /*Add background image to canvas*/
//    backgroundImg.repeatHor = true; //Repeat the background
//    backgroundImg.addImg(gameImage.loadedImg["background1"]);
    
    /*Draw the character on the screen*/
//    setupCharacter(gameCanvas);
//    addAliens(gameCanvas);
//    addCandy(gameCanvas);

    
    /*Testing projectiless*/
//    backgroundImg.dx = -1;
//    backgroundImg.dy = 0.5;
//    backgroundImg.xPos = 150;
//    backgroundImg.yPos = 150;
    //setInterval(function(){backgroundImg.canvasWallBounce();},4);
    
    /*Drawing out paths in the game*/
    setupObstacles();
    
    
    
}


function setupObstacles() {
    path[0] = new imageLib(backgroundImg.canvasName, 0, 0, -10, 250);
    path[0].endX = 300,
    path[0].endY = 600;
    path[0].drawLine();

    path[1] = new imageLib(backgroundImg.canvasName, 0, 0, backgroundImg.canvas.width + 10, 250);
    path[1].endX = 300; 
    path[1].endY = 600;
    path[1].drawLine();
}



function setupCharacter(gameCanvas) {
    /*Size of character*/
    var height = 115;
    var width = 77;
    
    /*Add the character to the canvas*/
    character = new physics(gameCanvas, width, height, 275, 285);
    character.addImg(gameImage.loadedImg["character"]);
    
    /*Establishing character jumping capabilities*/
    character.jumpHeight = 100;
    character.ground = character.canvas.height - character.height;
    character.jumpSpeed = 2;
    character.fallSpeed = 2;
}

function addAliens(gameCanvas) {
    /*Size of aliens*/
    var alienHeight = 50;
    var alienWidth = 50;
    
    /*Add aliens to the canvas*/
    aliens[0] = new physics(gameCanvas, alienWidth, alienHeight, 275, 200);
    aliens[0].addImg(gameImage.loadedImg["alien1"]);
    
    
    aliens[1] = new physics(gameCanvas, alienWidth, alienHeight, 550, 200);
    aliens[1].addImg(gameImage.loadedImg["alien1"]);
    
    aliens[2] = new physics(gameCanvas, alienWidth, alienHeight, 50, 100);
    aliens[2].addImg(gameImage.loadedImg["alien1"]);
    
    aliens[3] = new physics(gameCanvas, alienWidth, alienHeight, 100, 150);
    aliens[3].addImg(gameImage.loadedImg["alien1"]);
}

function addCandy(gameCanvas) {
    /*Size of candy*/
    var width = 50;
    var height = 50;
    
    /*Add aliens to the canvas*/
    candy = new physics(gameCanvas, width, height, 400, 350);
    candy.addImg(gameImage.loadedImg["candy"]);
}





