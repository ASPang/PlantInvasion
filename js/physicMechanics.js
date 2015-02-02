/* 
 * Coder: Angela Pang
 * 
 * Assignment: CIS4500 Week 2 - Visibility (Candy 4 Aliens)
 * Date: 2015/01/23
 * 
 * Filename: physicMechanics.js
 * 
 * Description:
 * This files contains the class and function that enables physics 
 * in the gameplay
 * 
 */
 
physics.prototype = Object.create(imageLib.prototype);
physics.prototype.constructor = physics;

function physics(canvasName, width, height, xPos, yPos) {
    imageLib.call(this, canvasName, width, height, xPos, yPos);
    
    /*Jump Related Variables*/
    this.jumpHeight = 0;
    this.ground = 0;
    this.jumpSpeed = 0;
    this.fallSpeed = 0;
    
    this.character = this.image;
    
    var jumping = false;  
    
    /*Direction Variables*/
    /*this.oriStartX = xPos;
    this.oriStartY = yPos;*/
    this.dx = 0;
    this.dy = 0;
    
    /*Borders*/
    this.floor = null;
    this.ceiling = null;
    this.rightWall = null;
    this.leftWall = null;
}

physics.prototype.jump = function() {
    var i = 0;  //Loop counter
    
    if (this.jumping == true && (this.yPos > this.jumpHeight)) {
        this.yPos -= this.jumpSpeed;
        this.redraw(this.xPos, this.yPos);  // - this.jumpSpeed);
        
    }
    else {
        this.jumping = false;
        this.gravity();
    }
};

physics.prototype.gravity = function() {    
    if (this.yPos < (this.canvas.height - this.height) && (this.yPos <= this.ground)) {
        this.redraw(this.xPos, this.yPos + this.jumpSpeed);
    }
};

/*
    var x = 150;
    var y = 150;
    var dx = -0.5;
    var dy = 1;
*/

physics.prototype.obstaclebounce = function(obstacle) {
    /*if( xPos<0 || xPos>300) dx=-dx; 
    if( yPos<0 || yPos>300) dy=-dy; */
    
    var dirX = 0, dirY = 0;
    
    /*Get the obstacle direction*/
    dirX = obstacle.endX - obstacle.startX;
    dirY = obstacle.endY - obstacle.startY;
    
    this.canvasWallBounce();
};

physics.prototype.canvasWallBounce = function() {
    if ( this.xPos < this.leftWall || this.xPos > this.rightWall ) {
        this.dx = -this.dx;
    } 
    else if (this.yPos < this.ceiling || this.yPos > this.floor) {
        this.dy = -this.dy;
    }
};
    




