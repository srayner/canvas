var curX, curY;
var originX, originY;
var mousePos;
var downPos;
var isMouseDown = false;
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

function getMousePos(event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function drawCoords() {
    context.font = "12px Arial";
    context.textAlign="left";
    context.fillStyle = "#000000";
    if (undefined !== mousePos) {
        context.fillText("X: " + mousePos.x.toString(), canvas.width - 70, 15);
        context.fillText("Y: " + mousePos.y.toString(), canvas.width - 70, 30);
    }
    if (undefined !== downPos) {
        context.fillText("dX: " + downPos.x.toString(), canvas.width - 70, 45);
        context.fillText("dY: " + downPos.y.toString(), canvas.width - 70, 60);
    }
    context.fillText("Mouse: " + isMouseDown.toString(), canvas.width - 70, 75);
}

function drawEntity(x,y,txt,icon)
{
    context.font = "14px Arial";
    context.textAlign="center";
    context.fillStyle = "#000000";
    context.fillText(txt,x,y+35);
    var img = new Image();
    img.onload = function () {
        context.drawImage(img, x-32, y-32-10);
    };
    img.src = icon;
    
}

function drawCross(x,y)
{
    context.strokeStyle = "#0000ff"; // blue
    
    context.beginPath();
    context.moveTo(x-5, y-5);
    context.lineTo(x+5,y+5);
    context.moveTo(x-5, y+5);
    context.lineTo(x+5, y-5);    
    context.stroke();
}

function drawArcRightUp(x,y,r)
{
    context.strokeStyle = "#aaaaaa";
    context.beginPath();
    context.arc(x,y-r,r,0,Math.PI/2);
    context.stroke();
    
    curX = curX + r;
    curY = curY - r;
}

function drawArcRightDown(x,y,r)
{
    context.strokeStyle = "#aaaaaa";
    context.beginPath();
    context.arc(x,y+r,r,Math.PI*1.5,Math.PI*2);
    context.stroke();
}

function drawArcUpRight(x,y,r)
{
    context.strokeStyle = "#aaaaaa";
    context.beginPath();
    context.arc(x+r,y,r,Math.PI,Math.PI*1.5);
    context.stroke();
    
    curX = curX + r;
    curY = curY - r;
}

function drawArcDownRight(x,y,r)
{
    context.strokeStyle = "#aaaaaa";
    context.beginPath();
    context.arc(x+r,y,r,Math.PI*0.5,Math.PI);
    context.stroke();
}

function drawLineRight(x,y,l, txt)
{
    context.strokeStyle = "#aaaaaa";
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+l, y);
    context.stroke();
    
    context.font = "14px Arial";
    context.textAlign="center";
    context.fillStyle = "#aaaaaa";
    context.fillText(txt,x+(l/2),y-10);
    
    curX = curX + l;
}

function redraw()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCoords();
    curX=originX;
    curY=originY;
    drawEntity(curX,curY,"srayner", "user.png");
    drawLineRight(curX,curY,100, "");
    drawArcRightUp(curX,curY,20);
    drawArcUpRight(curX,curY,20);
    drawLineRight(curX,curY,200, "Uses");
    drawEntity(curX, curY, "urn1122", "laptop.png");
}



canvas.addEventListener('mousedown', function(event) {
    isMouseDown = true;
    downPos = getMousePos(event);
}, false);

canvas.addEventListener('mouseup', function(event) {
    isMouseDown = false;
}, false);

canvas.addEventListener('mousemove', function(event) {
    mousePos = getMousePos(event);
    if (isMouseDown) {
        var dX = mousePos.x - downPos.x;
        var dY = mousePos.y - downPos.y;
        originX = originX + dX;
        originY = originY + dY;
        downPos.x = mousePos.x;
        downPos.y = mousePos.y;
        redraw();
    }
}, false);

originX = 200;
originY = 300;

redraw();


