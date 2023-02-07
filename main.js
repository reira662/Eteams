var timer = 20;
var difference;
var time;
let speedH;  //km/h
let speedS;  //m/s
let target = 10;  //目的距離[m]
let distance = 0;   //距離[m]
let seconds;    //秒

//ページを読み込んだ時実行
window.addEventListener("load", function(){
    // window.location.href:URLを取得
    // split('/'):'/'区切りの配列
    // pop():配列の最終要素のみを取得  
    var str = window.location.href.split('/').pop();//ファイル名の取得
    // if(str == "index.html"){
    //     document.getElementById('start').addEventListener("click", function(){

    //     });
    // }
    if(str == "index01.html"){
        time = 0;
        speedH = document.getElementById("jisoku");//時速のDOM
        countUP();
        distanceUP();  
    }
    if(str == "index02.html"){
        console.log(time);
        console.log(timer);
        var difference = localStorage.difference;
        document.getElementsByTagName("p")[0].innerHTML = "目的の時間と"+ difference +"秒の差がありました。";
    }
});

//時間計測
function countUP(){
    setInterval(() => {
        time +=1;
        conversion(speedH.value);
        // console.log(speedS);
        // console.log(speedH.value);
        console.log(time);
    }, 1000);
    // timer = setTimeout("countUP()",1000);
}

//速度変換
function conversion(Hspeed){    
    speedS = (Hspeed * 1000) / 3600;
}

//距離測定
function distanceUP(){
    setInterval(() => {
        distance += speedS;
        console.log(distance);
        if(target <= distance){//距離に達したら移動
            localStorage.difference = time-timer;
            location.href = "index02.html";//?difference="+difference;
        }   
    }, 1000);
}
