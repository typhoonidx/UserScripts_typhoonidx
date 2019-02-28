// ==UserScript==
// @name        timej_gfs
// @namespace   http://typhoonidx.org/timej_gfs.user.js
// @include     https://weather.time-j.net/*
// @author      typhoonidx
// @license     GPL 3.0
// @version     1.0
// @grant       none
// @description time-jの画像をホイールで前後にぱらぱらめくる
// ==/UserScript==

function handler(e){
	if (e.deltaY < 0) {
		changeTime(-1); // この関数はtimejのページで定義されています。
	} else {
		changeTime(1); // この関数はtimejのページで定義されています。
	}
	e.preventDefault();
}


document.querySelector("#map-img").addEventListener('wheel', handler);
