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
        this.redraw(this.xPos, this.yPos);          
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
    
//    var dirX = 0, dirY = 0;
    var x = 0, y = 0;
//    var i = 0, increment = 0, loopEnd = 0;  //Loop counter
    
//    /*Get the obstacle direction*/
//    dirX = obstacle.oldPosX - obstacle.xPos; //Math.abs(obstacle.oldPosX - obstacle.xPos); //obstacle.endX - obstacle.startX;
//    dirY = obstacle.oldPosY - obstacle.yPos; //Math.abs(obstacle.oldPosY - obstacle.yPos); //obstacle.endY - obstacle.startY;
//    
//    x = obstacle.startX;
//    y = obstacle.startY;
//    
//    /*Determine which direction is smaller*/
//    if(dirX < dirY) {
//        loopEnd = obstacle.xPos;
//        increment = Math.abs(dirX);
//    }
//    else {
//        loopEnd = obstacle.yPos;
//        increment = Math.abs(dirY);
//    }
    
    //console.log("loopend " + loopEnd + " " + i + " "  + increment);
    
    x = this.xPos;
    y = obstacle.slopeX * x + obstacle.slopeY;
    
    //console.log("x= " + x + " y = " + y + " "  + " " + Math.ceil(y) + " " + this.yPos);
    
    if (Math.ceil(y) == this.yPos || Math.floor(y) == this.yPos || Math.ceil(y-1) == this.yPos || Math.ceil(y+1) == this.yPos || 
            Math.floor(y-1) == this.yPos || Math.floor(y+1) == this.yPos) {
        if (obstacle.slopeX < 0) { 
            this.dx = -this.dx + 1;
            this.dy = -this.dy;
            //this.xPos -= 1;
        }
        else {
            this.dx = -this.dx + 1;
            this.dy = -this.dy;
            //this.xPos += 1;
        }
        console.log("JFLSJDF");
    }    
    
    this.canvasWallBounce();
    
    return false;
};

physics.prototype.canvasWallBounce = function() {
    if (this.leftWall != null) {
        if (this.xPos < this.leftWall) {
            this.dx = -this.dx;
        }
    }
    if (this.rightWall != null) {
        if (this.xPos > this.rightWall) {
            this.dx = -this.dx;
        }
    }
    if (this.ceiling != null) {
        if (this.yPos < this.ceiling) {
            this.dy = -this.dy;
        }
    }
    if (this.floor != null){
        if (this.yPos > this.floor) {
            console.log("WALLYYYYYYYYYY");
            this.dy = -this.dy;
        }
    }
    
//    if (((this.xPos <= this.leftWall)  && (this.leftWall != null)) || ((this.xPos >= this.rightWall) && (this.rightWall != null))) {
//        console.log("WALLX");
//        this.dx = -this.dx;
//        this.dy = -this.dy;
//    } 
//    if (((this.yPos <= this.ceiling) && (this.ceiling != null)) || ((this.yPos >= this.floor) && (this.floor != null))) {
//        this.dx = -this.dx;
//        this.dy = -this.dy;
//        console.log("WALLYYYYYYYYYY");
//    }
    
//    if (((this.xPos <= this.leftWall) ) || ((this.xPos >= this.rightWall) )) {
//        console.log("WALLX");
//        this.dx = -this.dx;
//        //this.dy = -this.dy;
//    } 
//    if (((this.yPos <= this.ceiling) ) || ((this.yPos >= this.floor) )) {
//        //this.dx = -this.dx;
//        console.log("WALLYYYYYYYYYY" + this.dy);
//        this.dy = -this.dy;
//        console.log("-------->>>>>>>" + this.dy);
//    }
};
    
physics.prototype.canvasWallCollision = function() {
    var leftWall = 0;
    var rightWall = this.canvas.width;
    var floor = this.canvas.height;
    var ceiling = 0;
    
    if ( this.xPos < leftWall) {
        return "left";
    }
    else if (this.xPos > rightWall) {
        return "right";
    } 
    else if (this.yPos < ceiling) {
        return "top";
    }
    else if (this.yPos > floor) {
        return "bottom";
    }
    
    return "null";
};



