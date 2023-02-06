timer = 20;
let time = 0;
let speedH;  //km/h
let speedS;  //m/s
let target = 1000;  //目的距離[m]
let distance = 0;   //距離[m]
let seconds;    //秒

window.addEventListener("load", function(){
    // window.location.href:URLを取得
    // split('/'):'/'区切りの配列
    // pop():配列の最終要素のみを取得  
    var str = window.location.href.split('/').pop();//ファイル名の取得
    time = 0;
    if(str == "index01.html"){
        speedH = document.getElementById("jisoku");
        countUP();
        distanceUP();  
    }
});

function countUP(){ //時間計測
    setInterval(() => {
        time +=1;
        conversion(speedH.value);
        // console.log(speedS);
        // console.log(speedH.value);
        console.log(time);
    }, 1000);
    // timer = setTimeout("countUP()",1000);
}
function conversion(Hspeed){    //速度変換
    speedS = (Hspeed * 1000) / 3600;
}
function distanceUP(){//距離測定
    setInterval(() => {
        distance += speedS;
        console.log(distance);
        if(target <= distance)//距離に達したら移動
            location.href = "index02.html";    
    }, 1000);
}
