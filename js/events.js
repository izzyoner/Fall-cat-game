document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
var pressA = false;
var pressS = false;
var pressD = false;
var pressW = false;
var pressSpace = false;

function keyDownHandler(e){
    console.log(e);
    switch (e.code){
        case "KeyA": 
            pressA = true;
            break
        case "KeyS": 
            pressS = true;
            break
        case "KeyD": 
            pressD = true;
            break
        case "KeyW": 
            pressW = true;
            break
        case "Space": 
            pressSpace = true;
            break
    }
}
   
function keyUpHandler(e){
    switch (e.code){
        case "KeyA": 
            pressA = false;
            break
        case "KeyS": 
            pressS = false;
            break
        case "KeyD": 
            pressD = false;
            break
        case "KeyW": 
            pressW = false;
            break
        case "Space": 
            pressSpace = false;
            break
    }
}