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
// @grant       none
// @description 気象庁の衛星画像/天気図をホイールで前後にぱらぱらめくる
// ==/UserScript==

function handler(e){

	if (e.deltaY < 0) {
		prevImage(); // この関数は気象庁のページで定義されています。
	} else {
		nextImage(); // この関数は気象庁のページで定義されています。
	}
	e.preventDefault();
}

//$("#image").off('wheel');
//$("#image").on('wheel', handler);
document.querySelector("#image").addEventListener('wheel', handler);
