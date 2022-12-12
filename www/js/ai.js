// This is a JavaScript file


var arry1 = 
["あなたと私の共通点を3つ挙げてみて。",
"好きな人の気を引くために、どんな風に自分を装った。",
"パートナーとの素敵な週末はどんな風に過ごしたい？",
"頻繁に電話やメールをする人を3人教えて。",
"あなたにとって、恋愛関係で最も重要な3つのことは何？",
"困ったときに最初に電話をする相手は誰？",
"私があなたを好きな理由は何だと思う？",
"ロマンチックだと思う国は？",
"私の何が一番好き？",
"恋愛関係で一番大切にしていることはなに？"
];

var count = 0;
arr = [0,1,2,3,4,5,6,7,8,9];
arr = randam();
var arr2 = [0];


function randam(){
    //消した
    var a = arr.length;

//シャッフルアルゴリズム
    while (a) {
        var j = Math.floor( Math.random() * a );
         t = arr[--a];
        arr[a] = arr[j];
        arr[j] = t;
    }
    return arr;
}

function home_click(){
// name1 = document.getElementById("name_txt1").value;
// name2 = document.getElementById("name_txt2").value;
//homeの右矢印を押すとランダムな配列を作る関数を呼び出す
location = 'qs_ai.html';
//チェンジ関数呼び出し
}


function changeMsg() {
    // テキストを表示する要素を取得します。
    var msg = document.getElementById("msg");

    var a = arr2.length;

    //シャッフルアルゴリズム
    while (a) {
        var j = Math.floor( Math.random() * a );
         t = arr2[--a];
        arr2[a] = arr[j];
        arr2[j] = t;
    }

    //ここにif文とロケーション
    if(count < 10){
        
        if(arr2[0]==0){
                msg.innerHTML="Aさん<br><br>";
            }else{
                msg.innerHTML="Bさん<br><br>";
            }  
    }

    if(count >= 10){
        location = 'select.html';
    }else{
        msg.innerHTML += arry1[arr[count]]; 
    }


    //交互にa,b
    if(arr2[0] == 1){
        arr2[0] = 0;
    }else{
        arr2[0] = 1;
    }
    count++;
}