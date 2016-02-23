/*Andrew Kratsios
SoftDev2 pd 3
HW#02 -- Circular
2016-02-22*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var r = document.getElementById("clear");
var go = document.getElementById("start");
var requestID;

var x;
var y;
var dir = 0;
var xdir = 0;
var ydir = 0;
var s = 0;
var radius = 0;
var logo = new Image();
logo.src="logo_dvd.jpg"

function setup(){
    ctx.strokeRect(0,0,538,538); 
}


var drawDot = function(){
 

    ctx.clearRect(0,0,538,538);
    ctx.strokeRect(0,0,538,538); 
    ctx.beginPath();
    ctx.arc( 538/2 , 538/2 , radius , 0 , 2*Math.PI );
    ctx.stroke();
    ctx.fillStyle = "green";
    ctx.fill();

    if(dir == 0)
        radius+=3;
    else
        radius-=3;
    if(radius >= 538/2)
        dir = 1;
    if(radius <= 0)
        dir = 0;

    requestID = window.requestAnimationFrame( drawDot );
} 

var stopIt = function(){
    window.cancelAnimationFrame(requestID);
}

var dvd = function(event){
    ctx.clearRect(0,0,538,538);
    ctx.strokRect(0,0,538,538);

    x = event.offsetX;
    y = event.offsetY;
    ctx.drawImage(logo,x,y,100,66.6666666);

    if (xdir == 0)
	x++;
    else
	x--;

    if (ydir == 0)
	y++;
    else
	y--;

    requestID = window.requestAnimationFrame(dvd);
}

var empty = function empty(event){
    event.preventDefault();
    ctx.clearRect(0,0,538,538);
    ctx.strokeRect(0,0,538,538); 
    radius = 0;
}

setup();
c.addEventListener("click", drawDot);
r.addEventListener("click", stopIt);
go.addEventListener("click", drawDot);
