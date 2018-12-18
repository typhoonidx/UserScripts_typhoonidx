// ==UserScript==
// @name        jma_wheel_sst
// @namespace   http://typhoonidx.org/jma_wheel_sst.user.js
// @include     https://www.data.jma.go.jp/gmd/kaiyou/data/db/kaikyo/*
// @author      typhoonidx
// @license     GPL 3.0
// @version     1.0
// @require     https://code.jquery.com/jquery-3.3.1.min.js
// @grant       none
// @description 気象庁の海面水温をホイールで前後にぱらぱらめくる
// ==/UserScript==

function handler(e){
	if (e.originalEvent.deltaY < 0) {
		ShiftTime(-1); // この関数は気象庁のページで定義されています。
	} else {
		ShiftTime(1); // この関数は気象庁のページで定義されています。
	}
	e.preventDefault();
}

$("#right > img").off('wheel');
$("#right > img").on('wheel', handler);

