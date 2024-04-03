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
    if(object1.y+object1.height > object2.y+5){

    
    if (object1.vx > 0 ){
        object1.x = object2.x - object1.width -0.01;
    }else if (object1.vx < 0 ){
        object1.x = object2.x + object2.width + 0.01;
    }}
        
}

function camera(block,player){
    console.log("cx:" +cy);
    if(block.x < 0){
        if(cx<0){
            cx+=2;
            block1.x +=2*4;
            block2.x +=2*4;
        }
        player.x = (block.width/2)-player.width/2+0.01;
        block.x = player.x - block.width/2 + player.width/2;
        
    }
    if(block.x + block.width > canvas.width){
        if(cx > -180){
            cx-=2;
            block1.x -=2*4;
            block2.x -=2*4;
        }
        
        player.x = canvas.width - block.width/2 - player.width/2-0.01;
        block.x = player.x - block.width/2 + player.width/2;
    }
    if(block.y + block.height > canvas.height){
        if(cy >-325){
            cy-=2;
            block1.y -=2*4;
            block2.y -=2*4;
        }
        player.y = canvas.height - block.height/2 - player.height/2 -0.01;
        block.y = player.y - block.height/2 + player.height/2; 
        
    }
    if(block.y < 0){
        if(cy <0){
            cy+=2;
            block1.y +=2*4;
            block2.y +=2*4;
        }
        player.y = block.height/2 - player.height/2 + 0.01;
    }


}