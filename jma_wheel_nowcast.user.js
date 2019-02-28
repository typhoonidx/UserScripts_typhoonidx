// ==UserScript==
// @name        jma_wheel_nowcast
// @namespace   http://typhoonidx.org/jma_wheel_nowcast.user.js
// @include     https://www.jma.go.jp/jp/radnowc/*
// @author      typhoonidx
// @license     GPL 3.0
// @version     1.0
// @grant       none
// @description 画像をホイールで前後にぱらぱらめくる
// ==/UserScript==

function handler(e){
	if (e.deltaY < 0) {
		prevImg(); // この関数は気象庁のページで定義されています。
	} else {
		nextImg(); // この関数は気象庁のページで定義されています。
	}
	e.preventDefault();
}

//$("#lbl_img_main").off('wheel');
//$("#lbl_img_main").on('wheel', handler);
document.querySelector("#lbl_img_main").addEventListener('wheel', handler);

// 画像読み込み中の画像がちらつくので無効化
showLoading = function(){
    return false;
}