// ==UserScript==
// @name        fnmoc_wheel
// @namespace   http://typhoonidx.org/fnmoc_wheel.user.js
// @include     https://www.fnmoc.navy.mil/wxmap_cgi/cgi-bin/wxmap_single.cgi?*
// @author      typhoonidx
// @license     GPL 3.0
// @version     1.0
// @grant       none
// @description fnmocの画像をホイールで前後にぱらぱらめくる
// ==/UserScript==

// https://www.fnmoc.navy.mil/wxmap_cgi/dynamic/NVG/2019021912/nvg10.prp.018.wpac.gif
//https://www.fnmoc.navy.mil/wxmap_cgi/dynamic/NVG/2019021912/nvg10.prp.024.wpac.gif
function str_newtime(newtime) {
	var str = "";
	var num = Number(newtime);
	console.log("num="+num);
	if ( num < 10 ) {
		str = "00" + num;
	} else if ( num < 100 ) {
		str = "0" + num;
	} else {
		str = "" + num;
	}
	return str;
}

function handler(e){
	var src = e.target.src;
	console.log("src="+src);

	var time = Number(src.substr( 70, 3));
	console.log("time="+time);

	var newtime = Number(time);
	if (e.deltaY < 0) {
		newtime = time - 6;
		if ( newtime < 0 ) {
			newtime = 0;
		}
	} else {
		newtime = time + 6;
		if ( newtime > 240 ) {
			newtime = 240;
		}
	}

	console.log("newtime="+newtime);
	var strnewtime = str_newtime(newtime);
	console.log("strnewtime="+strnewtime);

	var newsrc = src;
	var mae = src.substr( 0, 70);
	var ato = src.substr( 73, 9);
	console.log("mae="+mae);
	console.log("ato="+ato);

	newsrc = mae + strnewtime + ato;
	console.log("newsrc="+newsrc);
	e.target.src = newsrc;

	e.preventDefault();
}

document.querySelector("#the_image").addEventListener('wheel', handler);
