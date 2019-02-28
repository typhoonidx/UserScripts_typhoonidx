// ==UserScript==
// @name        wm_wheel_image
// @namespace   http://typhoonidx.org/wm_wheel_image.user.js
// @include     https://weather-models.info/latest/*
// @author      typhoonidx
// @license     GPL 3.0
// @version     1.0
// @run-at      document-end
// @grant       none
// @description 画像をホイールで前後にぱらぱらめくる
// ==/UserScript==




function handler(e){
	console.log("hadler");
	var src = document.querySelector("#img").src;
	console.log("src="+src);
	//images/gfs/06Z/wpac-precip-036.png

	var hour = src.substr(-7,3); // 036
	hour = parseInt(hour);
	console.log("hour="+hour);
	
	if (e.deltaY < 0) {
		hour = hour - 3;
		if ( hour < 3 ) {
			hour = 3;
		}
	} else {
		hour = hour + 3;
		console.log("hour="+hour);
		if ( hour > 240 ) {
			hour = 240;
		}
	}

	var base = src.slice( 0, -7);
	console.log("base="+base);

	var hour3 = ( '000' + hour ).slice( -3 );

	var newurl = base + hour3 + ".png";
	console.log("newurl="+newurl);
	document.querySelector("#img").src = newurl;

	e.preventDefault();
}




function main()
{
	var imgtag = document.querySelector("#img");
	if ( imgtag != null ) {
		imgtag.addEventListener('wheel', handler, false);
	}
}



var observer = new MutationObserver(function(mutations) {
    observer.disconnect();
    main();
    observer.observe( document, config);
});

var config = { attributes: true, childList: true, characterData: true, subtree:true };

observer.observe( document, config);