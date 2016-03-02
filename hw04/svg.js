/*Andrew Kratsios
SoftDev2 pd 3
HW#04 -- svg
2016-03-01*/

var IntervalID1;
var IntervalID2;

var circleDraw = function circleDraw(){
    var pic = document.getElementById("circleImage");
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx", 250);
    c.setAttribute("cy", 250);
    c.setAttribute("r", 100);
    c.setAttribute("fill","blue");
    c.setAttribute("stroke","black");
    var radius = 100;
    var growing = 1;
    var draw = function draw(){
        if (growing == 1) {radius = radius + 1;}
        else{radius = radius - 1;}
        if(radius == 250){growing = 0;}
        else if(radius == 0){growing = 1;}
        c.setAttribute("r", radius);
        pic.appendChild(c);
    }
    IntervalID1 = window.setInterval(draw, 10);
}

var dvdThing = function dvdThing(){
    var piq = document.getElementById("dvdImage");
    var q = document.createElementNS('http://www.w3.org/2000/svg','image');
    q.setAttributeNS(null,'height','100');
    q.setAttributeNS(null,'width','67');
    q.setAttributeNS('http://www.w3.org/1999/xlink','href', 'logo_dvd.jpg');
    q.setAttributeNS(null, 'visibility', 'visible');
    var xpos_dvd = 250;
    var ypos_dvd = 250;
    var xdir = 1;
    var ydir = 1;
    var DVD_draw = function DVD_draw(){
        xpos_dvd += xdir;
        ypos_dvd += ydir;
        if(xpos_dvd == 0 || xpos_dvd == 400){xdir = -1 * xdir};
        if(ypos_dvd == 0 || ypos_dvd == 433){ydir = -1 * ydir};
        q.setAttributeNS(null,'x',xpos_dvd);
        q.setAttributeNS(null,'y',ypos_dvd);
        piq.appendChild(q);
    }
    IntervalID2 = window.setInterval(DVD_draw, 10);
}


var dotDraw = function dotDraw(){
    var pic3 = document.getElementById("dotImage");
    var change = function(e){
        e.preventDefault();
        this.setAttribute("fill", "green");
    }
    var drawDot = function(x,y){
        var f = document.createElementNS("http://www.w3.org/2000/svg","circle");
        f.setAttribute("cx",x);
        f.setAttribute("cy",y);
        f.setAttribute("r", "15");
        f.setAttribute("fill", "yellow");
        f.setAttribute("stroke", "black");
        f.addEventListener("click", change);
        pic3.appendChild(f);
    };
    var clicked = function(e){
        if(e.toElement == this){drawDot(e.offsetX, e.offsetY);}
    }
    pic3.addEventListener("click", clicked);
}


var stopIt = function stopIt(){
    window.clearInterval(IntervalID1);
    window.clearInterval(IntervalID2);
}

//dvdThing();
//circleDraw();
//dotDraw();

var circleButton = document.getElementById("cirlce");
var dvdButton = document.getElementById("devede");
var dotButton = document.getElementById("dot");
var stoppy = document.getElementById("clear");

circleButton.addEventListener("click", circleDraw);
dvdButton.addEventListener("click",dvdThing);
dotButton.addEventListener("click", dotDraw);
stoppy.addEventListener("click", stopIt);


/*intervalID = window.setInterval(<FXN> , 16 );
document.getElementByTagName("circle")[0];
radius = parseInt(c.getAttribute("r"));
c.setAttribute("r",radius.toString());
window.clearInterval(IntervalID);
*/


