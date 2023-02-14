var timer;
var difference = 0;
var time = 0;
let speedH;  //km/h
let speedS;  //km/s
let target;  //目的距離[m]
let distance = 0;   //距離[m]
let dseconds = 0;    //秒
let hiscore = 0;

var name = ["盛岡駅", "花巻駅", "一ノ関駅"]
var timers = [12, 25, 70];
var targets = [11, 30, 90];

//ページを読み込んだ時実行
window.addEventListener("load", function () {
    // window.location.href:URLを取得
    // split('/'):'/'区切りの配列
    // pop():配列の最終要素のみを取得  
    var str = window.location.href.split('/').pop();//HTML名の取得

    if (str == "index.html") {
        var d_sel = document.getElementById("distance_selection");
        document.getElementsByClassName('bottom')[0].addEventListener("click", function () {
            if (d_sel.value == 100)
                window.alert("出発駅を選択してください。");
            else {
                localStorage.target = d_sel.value;
                location.href = "index01.html";
            }

        });
    }
    if (str == "index01.html") {
        time = 0;
        var i = localStorage.target;
        timer = timers[i];
        target = targets[i];//localStorage.target;
        this.window.alert("目標時間は" + timer + "分です。")
        speedH = document.getElementById("jisoku");//時速のDOM
        countUP();
        distanceUP();
    }
    if (str == "index02.html") {
        console.log(time);
        difference = parseFloat(localStorage.difference);
        hiscore = parseInt(localStorage.hiscore);
        if (difference < 0) {
            difference *= (-1);
            document.getElementsByTagName("p")[4].innerHTML = "約" + difference.toFixed(2) + "分早まっております。";
        } else if (0 < difference)
            document.getElementsByTagName("p")[4].innerHTML = "約" + difference.toFixed(2) + "分の遅れが出ております。";
        else
            document.getElementsByTagName("p")[4].innerHTML = "時間通り運行しております。";
        // if (hiscore < difference && 0 <= hiscore || difference < hiscore && hiscore <= 0) {
        //     localStorage.hiscore = difference;
        //     hiscore = localStorage.hiscore;
        //     document.getElementsByTagName("p")[5].innerHTML = hiscore;

        // }


        document.getElementsByClassName("return")[0].addEventListener("click", function () {
            localStorage.removeItem('target');
            localStorage.removeItem('difference');
            //            localStorage.removeItem('key');
            //            storage.clear();
        });
        // document.getElementsByClassName("reset")[0].addEventListener("click", function () {
        //     localStorage.clear();

        // });
    }
});

//時間計測
function countUP() {
    setInterval(() => {
        setInterval(() => {
            dseconds += 1;
            if (100 <= dseconds)
                dseconds = 0;
        }, 100)
        console.log(time);

        time += 1;
        conversion(speedH.value);
    }, 1000);
    // timer = setTimeout("countUP()",1000);
}

//速度変換
function conversion(Hspeed) {
    speedS = (Hspeed) / 60;
}

//距離測定
function distanceUP() {
    setInterval(() => {
        distance += speedS;
        document.querySelector(".dist").innerHTML = (Number(target) - Number(distance)).toFixed(2)
        console.log(Number(target) - Number(distance));
        if (target <= distance) {//距離に達したら移動
            localStorage.difference = time + (dseconds * 0.01) - timer;
            location.href = "index02.html";
        }
    }, 1000);
}
