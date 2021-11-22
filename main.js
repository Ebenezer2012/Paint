var mouseEvent="empty";
var last_pos_x,last_pos_y;


canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


color="black";
width=1;
canvas.addEventListener("mousedown",my_mousedown);


function my_mousedown(e){
color=document.getElementById("color").value;
width=document.getElementById("width_of_line").value;
mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);


function my_mousemove(e){

current_pos_x=e.clientX-canvas.offsetLeft;
current_pos_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.moveTo(last_pos_x,last_pos_y);
ctx.lineTo(current_pos_x,current_pos_y);
ctx.stroke();
}
last_pos_x=current_pos_x;
last_pos_y=current_pos_y;
}


canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUP"
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}

function clearArea(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}