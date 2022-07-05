// ==UserScript==
// @name        sunnyspot_wheel_image
// @namespace   http://typhoonidx.org/sunnyspot_wheel_image.user.js
// @match       https://www.sunny-spot.net/emagram/*
// @author      typhoonidx
// @license     GPL 3.0
// @version     1.0
// @grant       none
// @description エマグラムをホイールで前後にぱらぱらめくる
// ==/UserScript==



function get_token() {
	//src = $("img[name=animation]").attr("src");
	var src = document.querySelector("img[name=animation]").getAttribute("src");
	var token = src.substr( 0, 7);
	return token;
}

function handler(e){
	console.log("hadler");
	var token = get_token();
	if (e.deltaY < 0) {
		changeImg(false,token); // この関数はページで定義されています。
	} else {
		changeImg(true,token); // この関数はページで定義されています。
	}
	e.preventDefault();
}



//$("img[name=animation]").off('wheel');
//$("img[name=animation]").on('wheel', handler);
document.querySelector("img[name=animation]").
	addEventListener('wheel', handler, false);
