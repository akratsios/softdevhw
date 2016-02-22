/*Andrew Kratsios
SoftDev2 pd 3
HW#02 -- Circular
2016-02-22*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var r = document.getElementById("clear");
var go = document.getElementById("start");

var x;
var y;
var dir = 0;
var s = 0;
var radius = 0;

function setup(){
    ctx.strokeRect(0,0,538,538); 
}


var drawDot = function(){
 

    ctx.clearRect(0,0,538,538);
    ctx.strokeRect(0,0,538,538); 
    ctx.beginPath();
    ctx.arc( 538/2 , 538/2 , radius , 0 , 2*Math.PI );
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();

    if(dir == 0)
        radius+=3;
    else
        radius-=3;
    if(radius >= 538/2)
        dir = 1;
    if(radius <= 0)
        dir = 0;

    window.requestAnimationFrame( drawDot );
} 


var empty = function empty(event){
    event.preventDefault();
    ctx.clearRect(0,0,538,538);
    ctx.strokeRect(0,0,538,538); 
    radius = 0;
}

setup();
c.addEventListener("click", drawDot);
r.addEventListener("click", empty);
go.addEventListener("click", drawDot);
