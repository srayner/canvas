function drawEntity(x,y,txt,icon)
{
    ctx.font = "14px Arial";
    ctx.textAlign="center";
    ctx.fillText(txt,x,y+35);
    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, x-32, y-32-10);
    };
    img.src = icon;
    
}

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

var userImage = new Image();
userImage.src = "user.png";

drawEntity(80,80,"srayner", "user.png");
drawEntity(250,50,"urn1122", "user.png");

ctx.moveTo(80.5, 80.5);
ctx.lineTo(250,50);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,200,20,0,Math.PI/2);
ctx.stroke();

ctx.beginPath();
ctx.arc(150,200,20,Math.PI/2, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(200,200,20,Math.PI, Math.PI*1.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(250,200,20,Math.PI*1.5, Math.PI*2);
ctx.stroke();



