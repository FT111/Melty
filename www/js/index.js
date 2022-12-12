

var name1 = "デフォルト";
var name2 = "デフォルト";

//ボタン押したときの関数、指定したジャンルを渡す
function buttonClick(category){
    if(category == "愛と関係"){
        location = 'home_ai.html';
    }else if(category == "趣味と仕事"){ 
        location = 'home_hobby.html';
    }else if(category == "子供時代と家族"){
        location = 'home_child.html';
    }else if(category == "夢"){
        location = 'home_dreams.html';
    }
}
