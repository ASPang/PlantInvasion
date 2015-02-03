/* 
 * Coder: Angela Pang
 * 
 * Assignment: CIS4500 Week 2 - Visibility (Candy 4 Aliens)
 * Date: 2015/01/23
 * 
 * Filename: intersection.js
 * 
 * Description:
 * This files contains the function that determine if any objects in 
 * the game touches.
 * 
 */
 
function checkObstacles() {
    var i = 0, numPro = 0;
    
    numPro = projectile.length;
    for (i = 0; i < numPro; i++) {
        console.log(i + " " + numPro);
        /*Determine if the project collided with a wall*/
        projectile[i].obstaclebounce(path[0]);
        var end = projectile[0].canvasWallCollision();
        //console.log(end);
        //console.log(truth +  " "  + projectile[0].dx + " " + projectile[0].dy);
        /*Determine if the projectile hit a wall*/
        if (end != "bottom" && end == "null") {
            /*Draw projectile*/
            projectile[i].drawProjectile();
        }
        else if (i >= 0 && numPro > 0){
            /*Remove projectile from the array*/
            //projectile.pop();
            projectile.splice(i,1); //Remove one item from the ith position
            numPro -= 1;
            i--;
            console.log("HERE");
        }
        else if (i < 0 && numPro <= 0) {
            break;
        }
        /*Shift array position for next projectile*/
        //projectile.shift();
    }
}

function checkIntersection2() {
    var i, touch;  //loop counter
    
    /*Go through all the enemies to see if they intersect*/
    for (i = 0; i< aliens.length; i++) {        
        touch = character.intersect(aliens[i]);
        
        if (touch == true && candyTime() <= 0) {
            endGameFlag = true; 
        }
        else if (touch == true && candyTime() > 0) {
            newAlien(aliens[i]);
            points += 1;
        }
    }
}

function foundCandy() {
    touch = character.intersect(candy);
        
    if (touch == true) {
        /*Generate new candy in the game world*/
        genNewCandy();
        points += 1;
        powerUp = new Date().getTime();
        
        /*Add playtime*/
        //addTime();
    }
    else if (candy.xPos < -50) {
        /*Generate new candy in the game world*/
        genNewCandy();
    }
}

/*Regenerate Alien*/
function newAlien(alien) {
    alien.xPos =  alien.canvas.width + genNumRange(100, 500); 
    alien.yPos = genNumRange(character.jumpHeight, alien.canvas.height-alien.height); 
}

/*Regenerate Candy*/
function genNewCandy() {
    candy.xPos = candy.canvas.width + genNumRange(200, 800); 
    candy.yPos = genNumRange(character.jumpHeight, candy.canvas.height-candy.height); 
}

