let g = 0.5;
let vy = 1;
let vx = 0;


function Gravity(y){
    if (pressSpace){
        vy= -10;
    }else{
        vy += g;
    }
    
    y += vy;
    return y;
}

function jump(){
    vy = -5;
    y += vy;
}

function movement(x){
    if (pressA){
        vx = -7;
    }else if (pressD){
        vx = 7;
    }else{
        vx = 0;
    }

    x += vx;
    return x;
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
    if (vy > 0){
        y = object2.y - object1.height - 0.01;
        vy = 0;
        return  y;
    }else if (vy<0){
        y = object2.y + object2.height + 0.01;
        vy = 0;
        return  y;
    }

    }
       
function collisionDetectiony(object1,object2){
    if (vx > 0 ){
        x = object2.x - object1.width -0.01;
        vx=0;
        return x;
        
    }if (vx < 0 ){
        x = object2.x + object2.width + 0.01;
        vx=0;
        return x;
    }
        
}