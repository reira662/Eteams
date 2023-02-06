let timer =10;
let time = 0;
let speedH;  //km/h
let speedS;  //m/s
let target;  //目的距離
let distance;   //距離
let seconds;    //秒

var button = document.getElementById('start');
// let jisoku = document.getElementById("jisoku");
// console.log(jisoku.value);
window.addEventListener("load", function(){
    // console.log("hai");
    // window.location.href:URLを取得
    // split('/'):'/'区切りの配列
    // pop():配列の最終要素のみを取得
    time = 0;
    var str = window.location.href.split('/').pop();//ファイル名の取得
    if(str == "index01.html")
        countUP();
    // location.href = "index01.html";
    
    
    // document.querySelector(".jnknlist").addEventListener("click",function(e){
        // conversion(speedH);
    // });
});

function countUP(){ //時間計測
    setInterval(() => {
        time +=1;
        console.log(time);
        if(timer <= time)
        location.href = "index02.html";
    }, 1000);
    // timer = setTimeout("countUP()",1000);
}
function conversion(Hspeed){    //速度変換
    speedS = (Hspeed * 1000) / 3600;
}
