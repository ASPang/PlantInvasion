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
    backgroundImg = new imageLib(gameCanvas, 600, 400, 0, 0);
    
    /*Add background image to canvas*/
    backgroundImg.addImg(gameImage.loadedImg["background"]);
    
    /*Draw the character on the screen*/
    setupCharacter(gameCanvas);
    addEnemy(gameCanvas);
    
    /*Drawing out paths in the game*/
    setupObstacles();
}


function setupObstacles() {
    path[0] = new imageLib(backgroundImg.canvasName, 0, 0, 0, 0);
    path[0].endX = 0,
    path[0].endY = 0;
    path[0].slopeX = 16/13;
    path[0].slopeY = 3410/13;
    path[0].drawLine();

    path[1] = new imageLib(backgroundImg.canvasName, 0, 0, 0, 0);
    path[1].endX = 0; 
    path[1].endY = 0;
    path[1].slopeX = -16/13;
    path[1].slopeY = 3410/13;
    path[1].drawLine();
}

function setupCharacter(gameCanvas) {
    /*Size of character*/
    var height = 50;
    var width = 100;
    
    /*Add the character to the canvas*/
    character = new physics(gameCanvas, width, height, 275, 210);
    character.addImg(gameImage.loadedImg["ship"]);
}

function addEnemy(gameCanvas) {
    /*Size of plants*/
    var height = 40;
    var width = 20;
    
    enemy[0] = new physics(gameCanvas, width, height, 50, 100);
    enemy[0].addImg(gameImage.loadedImg["plant"]);
    enemy[0].dx = 1;
    enemy[0].dy = -0.2;
    
    enemy[1] = new physics(gameCanvas, width, height, 50, -100);
    enemy[1].addImg(gameImage.loadedImg["plant"]);
    enemy[1].dx = 1;
    enemy[1].dy = -0.2;
    
    enemy[2] = new physics(gameCanvas, width, height, 100, 30);
    enemy[2].addImg(gameImage.loadedImg["plant"]);
    enemy[2].dx = 1;
    enemy[2].dy = -0.2;
    
    enemy[3] = new physics(gameCanvas, width, height, 550, 200);
    enemy[3].addImg(gameImage.loadedImg["plant"]);
    enemy[3].dx = 1;
    enemy[3].dy = -0.2;
    
    enemy[4] = new physics(gameCanvas, width, height, 50, -300);
    enemy[4].addImg(gameImage.loadedImg["plant"]);
    enemy[4].dx = 1.5;
    enemy[4].dy = -1;
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





