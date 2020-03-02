
var play1=document.getElementById("p1");
var play2=document.getElementById("p2");
var p1score=0;
var p2score=0;
var gamepoint=6;
var gameover=false;
var reset=document.getElementById("rest");
var input=document.querySelector("input");
var play=document.getElementById("play");
play1.addEventListener("click",function(){
    if(!gameover){
    p1score++;
    if(p1score==gamepoint)
    {
    gameover=true;
    }
    p1display.textContent=p1score;
} 
});
    play2.addEventListener("click",function(){
        if(!gameover){    
        p2score++;
        if(p2score==gamepoint){
            gameover=true;
        }
        p2display.textContent=p2score;
    }
});
reset.addEventListener("click",function(){
    var p1score=0;
    var p2score=0;
    p1display.textContent=0;
    p2display.textContent=0;
    gameover=false;
    
});
input.addEventListener("change",function(){
play.textContent=input.value; 
gamepoint=Number(input.value);


})
