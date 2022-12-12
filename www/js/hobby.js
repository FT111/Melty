// This is a JavaScript file


var arry2 =                                         //趣味と仕事
["趣味は？",
"休日にすることは？",
"今の職業は？",
"上司、先輩に一言",
"家では何してる？",
"目標年収は？",
"今ハマっていることは？",
"月いくら趣味に使う？",
"趣味へのこだわりについて熱弁して",
"仕事は楽しい？"
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
location = 'qs_hobby.html';
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
        msg.innerHTML += arry2[arr[count]]; 
    }


    //交互にa,b
    if(arr2[0] == 1){
        arr2[0] = 0;
    }else{
        arr2[0] = 1;
    }
    count++;
}