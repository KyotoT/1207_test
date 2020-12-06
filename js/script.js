window.addEventListener("load", function(event) {
	PR.prettyPrint()
});

// Q1
// ボックスを表示して、タイマーを開始
function showBox() {
  document.getElementById("temporaryBox").style.display = "block"; // ボックスを表示
  timerId = setTimeout( closeBox , 30000 ); // タイマーを開始
  document.getElementById("btnShowBox").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox() {
  document.getElementById("temporaryBox").style.display = "none"; // ボックスを消す
  clearTimeout( timerId ); // タイマーを終了
  document.getElementById("btnShowBox").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target').t({
    speed:5,
    // speed_vary:true,
  });
});


// Q2
// ボックスを表示して、タイマーを開始
function showBox2() {
  document.getElementById("temporaryBox2").style.display = "block"; // ボックスを表示
  timerId2 = setTimeout( closeBox2 , 5000 ); // タイマーを開始
  document.getElementById("btnShowBox2").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox2() {
  document.getElementById("temporaryBox2").style.display = "none"; // ボックスを消す
  clearTimeout( timerId2 ); // タイマーを終了
  document.getElementById("btnShowBox2").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target2').t({
    speed_vary:true,
  });
});


// Q3
// ボックスを表示して、タイマーを開始
function showBox3() {
  document.getElementById("temporaryBox3").style.display = "block"; // ボックスを表示
  timerId3 = setTimeout( closeBox3 , 5000 ); // タイマーを開始
  document.getElementById("btnShowBox3").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox3() {
  document.getElementById("temporaryBox3").style.display = "none"; // ボックスを消す
  clearTimeout( timerId3 ); // タイマーを終了
  document.getElementById("btnShowBox3").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target3').t({
    speed_vary:true,
  });
});
