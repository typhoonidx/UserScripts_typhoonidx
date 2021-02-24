// ==UserScript==
// @name        jma_image_sakiyomi
// @namespace   http://typhoonidx.org/jma_image_sakiyomi.user.js
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
// @description 画像先読み（jma_wheel_image.user.jsの拡張スクリプト）
// ==/UserScript==

console.log("jma_image_sakiyomi start!");
var g_imgcount = 0;


function main()
{
	console.log("main start!");

	var option_index = 0;
	document.querySelectorAll("#slt_time > option").forEach( function(elem) {
		var value = elem.value;
		//console.log("value="+value);
		// value=201812200300

		var selected_index = document.querySelector("#slt_time").selectedIndex;
		console.log("selected_index="+selected_index);

		var baseurl = "https://www.jma.go.jp/jp/gms/imgs/6/infrared/1/";


		// https://www.jma.go.jp/jp/gms/imgs/6/infrared/1/201812200250-00.png
		var main_image = document.querySelector("#image");
		var main_image_src = main_image.getAttribute('src');
		var index = main_image_src.lastIndexOf("/");
		baseurl = main_image_src.substring( 0, index + 1);
		console.log("baseurl="+baseurl);

		var imgurl = baseurl + value + "-00.png";
		//console.log("imgurl="+imgurl);

		var start = selected_index - 5;
		var end = selected_index + 5;
		//if ( g_imgcount < 5 ) {
		if ( option_index > start && option_index < end ) {
/*
			$("#main").append( $("<img/>", {
				src: imgurl,
				style: "display:none;",
			}));
*/
			//$("<img src=\"" + imgurl + "\">");
			var img = document.createElement("img");
			img.src = imgurl;
			main_image.appendChild(img);

			g_imgcount ++;
			console.log("setimg, imgurl="+imgurl);
		}

		option_index++;
	});
}
main();

var observer = new MutationObserver(function(mutations) {
    observer.disconnect();
    main();
    observer.observe( document, config);
});

var config = { attributes: false, childList: true, characterData: false, subtree:true };

observer.observe( document, config);