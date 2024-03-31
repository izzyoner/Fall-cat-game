var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");

function animate(){
    
    movement(playerone);
    mechanics(playerone)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
     if (collision(playerone,block1)){
        collisionDetectiony(playerone,block1);
    }
    gravity(playerone);
    
    if  (collision(playerone,block1)){
        collisionDetection(playerone,block1);
    }
    
    
    playerone.draw();
    block1.draw();
    console.log(playerone);
    /*console.log(playerone.y);*/
    window.requestAnimationFrame(animate);
} 
