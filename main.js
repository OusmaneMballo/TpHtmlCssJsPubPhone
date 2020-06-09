var cicle=document.getElementById("cicle");
var Upbtn=document.getElementById("Upbtn");
var downbtn=document.getElementById("downbtn");
var rotateValue=cicle.style.transform;
var rotateSum;
Upbtn.onclick=function(){
    rotateSum=rotateValue + "rotate(-90deg)";
    cicle.style.transform=rotateSum;
    rotateValue=rotateSum;

}