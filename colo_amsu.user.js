// ==UserScript==
// @name        colo_amsu
// @namespace   http://typhoonidx.org/colo_amsu.user.js
// @include     http://rammb.cira.colostate.edu/products/tc_realtime/image_amsuplot.asp?product=amsuplot&storm_identifier=*
// @author      typhoonidx
// @license     GPL 3.0
// @version     1.0
// @require     https://code.jquery.com/jquery-3.3.1.min.js
// @grant       none
// @description ホイールで前後にぱらぱらめくる
// ==/UserScript==

// test page
// http://rammb.cira.colostate.edu/products/tc_realtime/storm.asp?storm_identifier=WP302018

function make_img_list(e) {
	//var url = location.href ;
	//console.log("url="+url);
	src = e.target.src;
	console.log("src="+src);

	var loc = src;
	var dir = loc.substring(0, loc.lastIndexOf('/'));	
	console.log("dir="+dir);

fetch(dir)
  .then(function(response) { 
	//console.log("fetch");
	return response.json();
	})
  .then(function(myJson) { 
	console.log(JSON.stringify(myJson));
	})
  .catch(function(error) { 
	console.error(error);
	});
/*動く
fetch(dir)
  .then((response) => response.text())
  .then((text) => console.log(text))
  .catch((error) => console.log(error));
*/
/*動かない
	fetch(dir)
	.then(function(response) {
		console.log("fetch");
		console.log("response="+response);
		return response.json();
	})
	.then(function(myJson) {
		console.log(JSON.stringify(myJson));
	});
*/
}

function handler(e){
	console.log("hadler");
	make_img_list(e);

	if (e.originalEvent.deltaY < 0) {
		//prevImage(); // この関数は気象庁のページで定義されています。
	} else {
		//nextImage(); // この関数は気象庁のページで定義されています。
	}
	e.preventDefault();
}

$("#content > img").off('wheel');
$("#content > img").on('wheel', handler);
//$("#image").addEventListener('wheel', handler, true);

