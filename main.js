var timer;
var difference;
var time;
let speedH;  //km/h
let speedS;  //km/s
let target;  //目的距離[m]
let distance = 0;   //距離[m]
let seconds;    //秒
let hiscore;

var name = ["盛岡駅","一ノ関駅","花巻駅"]
var timers = [12,70,25];
var targets = [11,90,30];

//ページを読み込んだ時実行
window.addEventListener("load", function(){
    // window.location.href:URLを取得
    // split('/'):'/'区切りの配列
    // pop():配列の最終要素のみを取得  
    var str = window.location.href.split('/').pop();//HTML名の取得
    
    if(str == "index.html"){
        var d_sel = document.getElementById("distance_selection");
        // var t_sel =document.getElementById("time_selection");
        document.getElementsByClassName('bottom')[0].addEventListener("click", function(){
            localStorage.target = d_sel.value;
            // localStorage.timer = t_sel.value;
        });
    }
    if(str == "index01.html"){
        time = 0;
        var i = localStorage.target;
        timer = timers[i];
        target = targets[i];//localStorage.target;
        speedH = document.getElementById("jisoku");//時速のDOM
        countUP();
        distanceUP();  
    }
    if(str == "index02.html"){
        console.log(time);
        difference = localStorage.difference;
        hiscore = localStorage.hiscore;
            document.getElementsByTagName("p")[0].innerHTML = "目的の時間と"+ difference +"秒の差がありました。";
            document.getElementsByTagName("p")[2].innerHTML = hiscore;

    }
});

//時間計測
function countUP(){
    setInterval(() => {
        time +=1;
        conversion(speedH.value);
        // console.log(speedS);
        // console.log(speedH.value);
        //console.log(time);
    }, 1000);
    // timer = setTimeout("countUP()",1000);
}

//速度変換
function conversion(Hspeed){    
    speedS = (Hspeed ) / 60;
}

//距離測定
function distanceUP(){
    setInterval(() => {
        distance += speedS;
        console.log(distance);
        if(target <= distance){//距離に達したら移動
            localStorage.difference = time-timer;
            hiscore = parseInt(localStorage.hisc);
            if(hiscore < (time-timer))
                localStorage.hiscore = time-timer;
            location.href = "index02.html";
        }   
    }, 1000);
}
