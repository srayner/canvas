var curX, curY;

function drawEntity(x,y,txt,icon)
{
    ctx.font = "14px Arial";
    ctx.textAlign="center";
    ctx.fillStyle = "#000000";
    ctx.fillText(txt,x,y+35);
    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, x-32, y-32-10);
    };
    img.src = icon;
    
}

function drawCross(x,y)
{
    ctx.strokeStyle = "#0000ff"; // blue
    
    ctx.beginPath();
    ctx.moveTo(x-5, y-5);
    ctx.lineTo(x+5,y+5);
    ctx.moveTo(x-5, y+5);
    ctx.lineTo(x+5, y-5);    
    ctx.stroke();
}

function drawArcRightUp(x,y,r)
{
    ctx.strokeStyle = "#aaaaaa";
    ctx.beginPath();
    ctx.arc(x,y-r,r,0,Math.PI/2);
    ctx.stroke();
    
    curX = curX + r;
    curY = curY - r;
}

function drawArcRightDown(x,y,r)
{
    ctx.strokeStyle = "#aaaaaa";
    ctx.beginPath();
    ctx.arc(x,y+r,r,Math.PI*1.5,Math.PI*2);
    ctx.stroke();
}

function drawArcUpRight(x,y,r)
{
    ctx.strokeStyle = "#aaaaaa";
    ctx.beginPath();
    ctx.arc(x+r,y,r,Math.PI,Math.PI*1.5);
    ctx.stroke();
    
    curX = curX + r;
    curY = curY - r;
}

function drawArcDownRight(x,y,r)
{
    ctx.strokeStyle = "#aaaaaa";
    ctx.beginPath();
    ctx.arc(x+r,y,r,Math.PI*0.5,Math.PI);
    ctx.stroke();
}

function drawLineRight(x,y,l, txt)
{
    ctx.strokeStyle = "#aaaaaa";
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+l, y);
    ctx.stroke();
    
    ctx.font = "14px Arial";
    ctx.textAlign="center";
    ctx.fillStyle = "#aaaaaa";
    ctx.fillText(txt,x+(l/2),y-10);
    
    curX = curX + l;
}

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

var userImage = new Image();
userImage.src = "user.png";



curX=100;
curY=300;
drawEntity(curX,curY,"srayner", "user.png");
drawLineRight(curX,curY,100, "");
drawArcRightUp(curX,curY,20);
drawArcUpRight(curX,curY,20);
drawLineRight(curX,curY,200, "Uses");
drawEntity(curX, curY, "urn1122", "laptop.png");

