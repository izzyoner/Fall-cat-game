var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");

function animate(){
    
    playerone.x = movement(playerone.x);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
     if (collision(playerone,block1)){
        playerone.x = collisionDetectiony(playerone,block1);
    }
    playerone.y = Gravity(playerone.y);
    
    if  (collision(playerone,block1)){
        playerone.y = collisionDetection(playerone,block1);
    }
    
    
    playerone.draw();
    block1.draw();
    console.log(playerone);
    /*console.log(playerone.y);*/
    window.requestAnimationFrame(animate);
} 
