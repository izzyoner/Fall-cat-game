
const playerone = new player(250,100,50,50,0,1);
const block1 = new blocks( 0,canvas.height/2 + 40, 710, 320);
const block2 = new blocks( 669,canvas.height/2-90, 41, 130);
const blockplayer = new blocks(playerone.x-175, playerone.y-150, 400,250);
const background = new sprite({
    position: {x: 0 , y:0,},
    imageSrc: './img/escenario.jpg',
})

function game(){
    animate();
}
    game();


    






