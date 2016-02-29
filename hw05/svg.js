var pic = document.getElementByID("vimage");
var c = document.createElementNS("https://www.w3.org/2000/svg", "circle");

var change = function(e){
};

var drawDot = function( x, y) {
    c.setAttribute( "cx", x);
    c.setAttribute( "cy", y);
    c.setAttribute( "r", "30");
    c.setAttribute( "fill", "yellow");
    c.setAttribute( "stroke", "black" );
    c.addEventListener( "click", change );
    pic.appendChild( c );
};
var clicked = function(e){
    if( e.toElement == this ){
	drawDot( e.offsetX, e.offsetY );
    }
};
pic.addEventListener("click",clicked);
