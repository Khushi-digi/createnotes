var container2=document.getElementsByClassName("container2")[0];
var container3=document.getElementsByClassName("container3")[0];
var checkicon=document.getElementById("check-icon");
var xicon=document.getElementById("x-icon");
var i=0;

function typenote(){
    if(container3.style.display=="none"){
        container3.style.display="block";
    }
    else{
        container3.style.display="none";
    }
 

}
xicon.addEventListener("click",function(){
    typenote();
})
checkicon.addEventListener("click",function(){
    createnote();
})
function createnote(){
var notetext=document.getElementById("note-text").value;
var node0=document.createElement("div");
var node1=document.createElement("h1");
node1.innerHTML=notetext;
node1.setAttribute("style","width:350px; height:350px;font-size:26px;padding:25px;margin-top:10px;overflow:hidden;box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)");
node1.style.margin=margin();
node1.style.transform=rotate();
node1.style.background=color();
node0.appendChild(node1);
container2.insertAdjacentElement("beforeend",node0);
node0.addEventListener("mouseenter",function()
{
    node0.style.transform="scale(1.1)";
})
node0.addEventListener("mouseleave",function()
{
    node0.style.transform="scale(1)";
})
}
function rotate(){
    var random_rotate=["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-10deg)","rotate(-5deg)"];
    return random_rotate[Math.floor(Math.random()*random_rotate.length)];
    
}
function margin(){
var random_margin=["-5px","1px","5px","10px","15px","20px"];
return random_margin[Math.floor(Math.random()*random_margin.length)];
}
function color(){
    var random_color=["teal","yellow","darkred","navy","cyan","gray","greenyellow","deeppink","lime","magenta","orchid"];
if(i>random_color.length-1)
{
    i=0;
}
    return random_color[i++];
    
}

