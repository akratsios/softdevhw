/*
Andrew Kratsios
SoftDev2 pd 3
HW 1b -- Finding Your Path Around the Canvas
2016-02-10
*/   

//.fillStyle = "#ffffff" : makes the color that objects are colored in as "#ffffff".
//.fillRect(a,b,c,d) : makes a rectangle at point (a,b) with width c and height d and filled int with the fillStyle color.
//.strokeSytle = "#ffffff" : sets the color of the lines made to "#ffffff".
//.strokeRect(a,b,c,d) : makes a non filled in rectangle at point (a,b) with width c and height d
//.beginPath() : starts a new section of shape and line drawing and filling in.
//.closepath() : closes a section of shape and line making and filling in.
//.lineTo(a,b) : draws a line from the last lineTo to point (a,b) so when lineTo(a,b) is used and the lineTo(c,d) a line is drawn from (a,b) to (c,d),
//.stroke() : Draws out all lines and arcs and shapes that were made.
//.fill() : fills in all shapes that were made.
//.arc(a,b,c,d,e) : makes a arc 

var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");
ctx.fillStyle = "#00ffff";
ctx.fillRect(0,0,538,538);

ctx.strokeStyle = "#000000";
ctx.strokeRect(0,0,538,538);
var x = 269-5;
var y = 10;
while(y <= 538){
	ctx.strokeRect(x,x,y,y);
	x -= 10;
	y += 20;
}

ctx.strokeStyle = "#ffff00";
ctx.beginPath();
ctx.lineTo(0,0);
ctx.lineTo(538,538);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineTo(0,538);
ctx.lineTo(538,0);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = "#000000"
ctx.fillStyle = "#ff0000";

ctx.beginPath();
ctx.arc(269,100,40,0,360);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(100,269,40,0,360);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(269,438,40,0,360);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(438,269,40,0,360);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.fillStyle = "#ffffff";
ctx.fillRect(145,17,250,32);
ctx.strokeRect(145,17,250,32);

ctx.fillStyle = "magenta";
ctx.font="30 px arial";
ctx.fillText("Pretty Pretty Picture",150,40);



