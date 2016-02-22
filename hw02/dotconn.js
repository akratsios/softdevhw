/*Andrew Kratsios
SoftDev2 pd 3
HW 2b -- Dot, Dot, Dot
2016-02-11*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var r = document.getElementById("clear");

var x;
var y;
var count = 0;
var s = 0;

ctx.beginpath();
ctx.arc(c.width/2,c.height/2,radius,0,2*Math.PI);
ctx.stroke();
ctx.fill();

window.requestAnimationFrame( drawDot );

function setup(){
    ctx.strokeRect(0,0,538,538); 
}

function make(event) {

    event.preventDefault();   

    ctx.strokeRect(0,0,538,538); 

    if (count == 1) {
	var x1 = x;
	var y1 = y;
    }

    x = event.clientX-9;
    y = event.clientY-70;

    ctx.beginPath();
    ctx.arc(x,y,15,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();    
    ctx.closePath();
 
    if (count = 1) {
	ctx.moveTo(x1,y1);
	ctx.beginPath();
	ctx.lineTo(x1,y1);
	ctx.lineTo(x,y);
	ctx.stroke();
	ctx.closePath();
    }
    
    if (count == 0)
	count = 1;
}

var empty = function empty(event){
    event.preventDefault();
    ctx.clearRect(0,0,538,538);
    ctx.strokeRect(0,0,538,538); 
    count = 0;
}

setup();
c.addEventListener("click", make);
r.addEventListener("click", empty);
