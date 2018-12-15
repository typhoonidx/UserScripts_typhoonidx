// ==UserScript==
// @name        jma_wheel_image
// @namespace   http://typhoonidx.org/jma_wheel_image.user.js
// @include     http://www.jma.go.jp/jp/gms/*
// @include     https://www.jma.go.jp/jp/gms/*
// @include     http://www.jma.go.jp/jp/gms150jp/*
// @include     https://www.jma.go.jp/jp/gms150jp/*
// @include     http://www.jma.go.jp/jp/g3/*
// @include     https://www.jma.go.jp/jp/g3/*
// @author      typhoonidx
// @license     GPL 3.0
// @version     1.0
// @require     https://code.jquery.com/jquery-3.3.1.min.js
// @grant       none
// @description 気象庁の衛星画像をホイールで前後にぱらぱらめくる
// ==/UserScript==

function handler(e){
	//var evt=window.event || e; //equalize event object
	//var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta; //delta returns 
//console.log("delta="+delta);
//console.log("e.deltaY="+e.deltaY);
//console.log("e.originalEvent.deltaY="+e.originalEvent.deltaY);
	//if ( delta <= -120 ) {
	if (e.originalEvent.deltaY < 0) {
		prevImage(); // この関数は気象庁のページで定義されています。
	} else {
		nextImage(); // この関数は気象庁のページで定義されています。
	}
	e.preventDefault();
}

$("#image").off('wheel');
$("#image").on('wheel', handler);
//$("#image").addEventListener('wheel', handler, true);

