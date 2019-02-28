// ==UserScript==
// @name        jma_amedas_wheel
// @namespace   http://typhoonidx.org/jma_amedas_wheel.user.js
// @include     https://www.jma.go.jp/jp/amedas/*
// @author      typhoonidx
// @license     GPL 3.0
// @version     1.0
// @grant       none
// @run-at      document-end
// @description 画像をホイールで前後にぱらぱらめくる
// ==/UserScript==

function handler(e){
	if (e.deltaY < 0) {
		prevImg(); // この関数は気象庁のページで定義されています。
	} else {
		nextImg(); // この関数は気象庁のページで定義されています。
	}
	e.preventDefault();
}

function removeAllEventListeners(id) {
	var old_element = document.getElementById(id);
	if ( old_element == null ) {
		console.log("null: id="+id);
		return;
	}
	var new_element = old_element.cloneNode(true);
	old_element.parentNode.replaceChild(new_element, old_element);
}

//$("#lbl_img_main").off('wheel');
//$("#lbl_img_main").on('wheel', handler);
removeAllEventListeners("info");
removeAllEventListeners("lbl_img_main");
removeAllEventListeners("main_img_japan");
removeAllEventListeners("image");
document.querySelector("#lbl_img_main").addEventListener('wheel', handler);

// 画像読み込み中の画像がちらつくので無効化
/**
 * イメージを一つ取得
 * Para:	pNowDisArea			: 今表示されている地点番号
 * Para:	pNowDisTime				: 今表示されている時間番号 
 */
getSimpleImg = function() {
    var ObjMainImg = cGetObject(gMainImgID);
    var ObjElement = cGetObject(gElementID);
    
	//var NowDisElement = parseInt(ObjElement.value, 10);
	
    // Loadingイメージを表示
    //ObjMainImg.src = LoadingImg.src;
	var imageTmp = new Image();
	if ( NowDisElement != 5 ) {
    	imageTmp.src = ImageRootPath[12] + gAmedasuElementFolder[NowDisElement] + FolderInfoC[NowDisArea] + NowImageNames[NowDisTime];
	} else {
		imageTmp.src = ImageRootPath[12] + "/name/" + AreaNo[NowDisArea] + ".png";
	}
	ObjMainImg.src = imageTmp.src;
}