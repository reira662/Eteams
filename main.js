var speedH;  //km/h
var speedS;  //m/s
var target;  //目的距離
var distance;   //距離
var seconds;    //秒

var jisoku = document.getElementById("jisoku");
console.log(jisoku.value);
document.querySelector(".jnknlist").addEventListener("click",function(e){
        countUP();
    
    document.querySelector(".jnknlist").addEventListener("click",function(e){
        conversion(speedH);
    });
});

function countUP(){ //時間計測
    
}
function conversion(Hspeed){    //速度変換
    speedS = (Hspeed * 1000) / 3600;
}
