do{

var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

if((user_hand == "グー") || (user_hand == "チョキ") || (user_hand == "パー")){

var js_hand = getJShand(); //出す手を作成

var judge = winLose(user_hand, js_hand);　//比べる関数を呼び出し、judgeで結果を入れる

alert('あなたの選んだ手は' + user_hand + 'です。　\nJavaScriptの選んだ手は' + js_hand + 'です。 \n結果は' + judge + 'です。');

}else if(user_hand == null){
	alert('またチャレンジしてね');

}else{
	alert('グー・チョキ・パーのいずれかを入力してください');
}

}while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null));

function getJShand(){
	var js_hand_num = Math.floor(Math.random() * 3);
	var hand;

	if(js_hand_num == 0){
		hand = "グー";
	}else if(js_hand_num == 1){
		hand = "チョキ";
	}else if(js_hand_num == 2){
		hand = "パー";
	}

	return hand;
}

function winLose(user, js){
    var winLoseStr;

    if(user == "グー"){
        if(js == "グー"){
            winLoseStr = "あいこ";
        }else if(js == "チョキ"){
            winLoseStr = "勝ち";
        }else if(js == "パー"){
            winLoseStr = "負け";
        }
    }else if(user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        }else if(js == "チョキ"){
            winLoseStr = "あいこ";
        }else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        }else if(js == "チョキ"){
            winLoseStr = "負け";
        }else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }

    return winLoseStr;
}