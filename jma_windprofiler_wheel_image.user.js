// ==UserScript==
// @name        jma_windprofiler_wheel_image
// @namespace   http://typhoonidx.org/jma_windprofiler_wheel_image.user.js
// @include     https://www.jma.go.jp/jp/windpro/*
// @author      typhoonidx
// @license     GPL 3.0
// @version     1.0
// @require     https://code.jquery.com/jquery-3.3.1.min.js
// @grant       none
// @description 画像をホイールで前後にぱらぱらめくる
// ==/UserScript==

function handler(e){
	if (e.originalEvent.deltaY < 0) {
		getPrevImage(); // この関数は気象庁のページで定義されています。
	} else {
		getNextImage(); // この関数は気象庁のページで定義されています。
	}
	e.preventDefault();
}

$("#lbl_img_main").off('wheel');
$("#lbl_img_main").on('wheel', handler);
//$("#image").addEventListener('wheel', handler, true);

// 画像読み込み中の画像がちらつくので無効化
showLoading = function(){
    return false;
}