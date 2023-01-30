let timer;
let time = 0;
let speedH;  //km/h
let speedS;  //m/s
let target;  //目的距離
let distance;   //距離
let seconds;    //秒

var button = document.getElementById('start');
// let jisoku = document.getElementById("jisoku");
// console.log(jisoku.value);
button.addEventListener("click", function(){
    window.location.href = "index01.html";
    console.log("hai");
    // countUP();
    
    // document.querySelector(".jnknlist").addEventListener("click",function(e){
        // conversion(speedH);
    // });
});

function countUP(){ //時間計測
    time +=1;
    console.log(time);
    timer = setTimeout("countUP()",1000);
}
function conversion(Hspeed){    //速度変換
    speedS = (Hspeed * 1000) / 3600;
}
