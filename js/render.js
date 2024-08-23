var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");
var cx = 0;
var cy = -250;/*
const img = new Image();
img.src = './img/escenario.jpg';*/
function animate(){
    
    movement(playerone);
    
    mechanics(playerone)
    
    console.log(blockplayer);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (collision(playerone,block1)){
        collisionDetectiony(playerone,block1);
    }
    if (collision(playerone,block2)){
        collisionDetectiony(playerone,block2);
    }   
    
    gravity(playerone);
    
    
    if (collision(playerone,block2)){
        collisionDetection(playerone,block2);
    }   
    if  (collision(playerone,block1)){
        collisionDetection(playerone,block1);
    }   

 
    
    blockplayer.x = playerone.x - blockplayer.width/2 + playerone.width/2;
    blockplayer.y = playerone.y - blockplayer.height/2 + playerone.height/2; 

    camera(blockplayer,playerone);
    
   
   
    /*For scalate de background */
    ctx.save();
    ctx.scale(4,4);
    ctx.translate(cx, cy)
    background.draw();
    
    ctx.restore();
    /*ctx.drawImage(img, 0, 0);*/
    
    blockplayer.draw();
    
    

    playerone.draw();
    
    playersprite.position.x =playerone.x;
    playersprite.position.y =playerone.y;
    playersprite.draw();
   
    
    block1.draw();
    block2.draw();
    /*console.log(playerone);*/
    /*console.log(playerone.y);*/
    window.requestAnimationFrame(animate);
} 
