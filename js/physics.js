let g = 0.5;
let vx = 0;

function gravity(object){
    object.y += object.vy;
    object.vy += g;
}

function movement(player){
    if (pressA){
        player.vx = -7;
    }else if (pressD){
        player.vx = 7;
    }else{
        player.vx = 0;
    }
    player.x += player.vx;
}

function mechanics(player){
    if (pressSpace){
        player.vy = -10;
    }else if (pressS){
        player.vy = 25;
    }
}

function collision(object1,object2){
    if(object1.y + object1.height > object2.y && object1.y < object2.y + object2.height
        && object1.x + object1.width > object2.x && object1.x < object2.x + object2.width){
        console.log("colitions on"); 
        return true;
    }else{
        return false;
    }   
}

function collisionDetection(object1,object2){
    if (object1.vy >= 0){
        object1.y = object2.y - object1.height - 0.01;
        object1.vy = 0;
    }else if (object1.vy<0){
        object1.y = object2.y + object2.height + 0.01;
        object1.vy = 0;
    }

    }
       
function collisionDetectiony(object1,object2){
    if (object1.vx > 0 ){
        object1.x = object2.x - object1.width -0.01;
        object1.vx=0;

    }else if (object1.vx < 0 ){
        object1.x = object2.x + object2.width + 0.01;
        object1.vx=0;
    }
        
}