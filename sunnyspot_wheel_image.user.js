// ==UserScript==
// @name        sunnyspot_wheel_image
// @namespace   http://typhoonidx.org/sunnyspot_wheel_image.user.js
// @include     https://www.sunny-spot.net/emagram/*
// @author      typhoonidx
// @license     GPL 3.0
// @version     1.0
// @require     https://code.jquery.com/jquery-3.3.1.min.js
// @grant       none
// @description エマグラムをホイールで前後にぱらぱらめくる
// ==/UserScript==



function get_token() {
	src = $("img[name=animation]").attr("src");
	token = src.substr( 0, 7);
	return token;
}

function handler(e){
	token = get_token();
	if (e.originalEvent.deltaY < 0) {
		changeImg(false,token); // この関数はページで定義されています。
	} else {
		changeImg(true,token); // この関数はページで定義されています。
	}
	e.preventDefault();
}



$("img[name=animation]").off('wheel');
$("img[name=animation]").on('wheel', handler);

