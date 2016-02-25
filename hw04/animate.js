/*Andrew Kratsios
SoftDev2 pd 3
HW#03 -- Are We Ever Going to Start the Movie?
2016-02-23*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var r = document.getElementById("clear");
var go = document.getElementById("start");
var d = document.getElementById("devede");

var requestID;
var dir = 0;
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

var dvdLogoSetup = function(){

    window.cancelAnimationFrame(requestID);

    var x_dvd = c.width/2 +  Math.floor((Math.random() * 100) + 1);
    var y_dvd = c.height/2 + Math.floor((Math.random() * 100) + 1);
    var x_dir = 1.5;
    var y_dir = -1.5;
    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    
    var drawDVD_Logo = function(){
	clearBox();
	if ( x_dvd >= (c.width - 60) || x_dvd <= 0 ) {
	    x_dir = -x_dir;
	} 
	if ( y_dvd >= (c.height - 40) || y_dvd <= 0 ) {
	    y_dir = -y_dir;
	}
	x_dvd += x_dir;
	y_dvd += y_dir;
	ctx.drawImage(logo,x_dvd,y_dvd,60,40);
	
	requestID = window.requestAnimationFrame(drawDVD_Logo);
	
    }

    drawDVDLogo();

}

//* outlines the canvas that the user can draw in
function makeBox(x,y,w,h){
    ctx.strokeStyle = "#0000ff";
    ctx.strokeRect(x,y,w,h);
    ctx.stroke();
}
//*

function clearBox(){
    console.log("clear box called");
    ctx.clearRect(0,0,538,538);
    makeBox(0,0,538,538);
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
d.addEventListener("click",dvdLogoSetup);
go.addEventListener("click", drawDot);
