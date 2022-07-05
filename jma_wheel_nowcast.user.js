// ==UserScript==
// @name        jma_wheel_nowcast
// @namespace   http://typhoonidx.org/jma_wheel_nowcast.user.js
// @include     https://www.jma.go.jp/jp/radnowc/*
// @author      typhoonidx
// @license     GPL 3.0
// @version     1.0
// @grant       none
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

//$("#lbl_img_main").off('wheel');
//$("#lbl_img_main").on('wheel', handler);
document.querySelector("#lbl_img_main").addEventListener('wheel', handler);

// 画像読み込み中の画像がちらつくので無効化
showLoading = function(){
    return false;
}
/**
 * イメージを一つ取得
 */
getSimpleImg = function() {
    var ObjMainImg = cGetObject(gMainImgID);
    
	var tmpClass = "";
	if ( NowDisArea == 0 ) {
    	tmpClass='img_japan';
	} else {
    	tmpClass='img_place';
    }
    
    /* Loadingイメージを表示 */
    //ObjMainImg.src = LoadingImg.src;
    var imageTmp = new Image();
	if (NowDisContentType==0) {
		imageTmp.src = ImageRootPath[0] + FolderInfoB[NowDisArea] + NowImageNames[NowDisTime];
		var appendStr = '_nowcast';
		if ( NowDisTime > NewestImageIndex ) {
			imageTmp.src = ImageRootPath[2] + FolderInfoB[NowDisArea] + NowImageNames[NowDisTime];
			appendStr = "";
		}
		tmpClass = tmpClass + appendStr;
	}
	if (NowDisContentType==1) {
		imageTmp.src = ImageRootPath[24] + FolderInfoB[NowDisArea] + NowImageNames[NowDisTime];
		if ( NowDisTime > NewestImageIndex ) {
			imageTmp.src = ImageRootPath[25] + FolderInfoB[NowDisArea] + NowImageNames[NowDisTime];
		}
	}
	if (NowDisContentType==2) {
		imageTmp.src = ImageRootPath[26] + FolderInfoB[NowDisArea] + NowImageNames[NowDisTime];
		if ( NowDisTime > NewestImageIndex ) {
			imageTmp.src = ImageRootPath[27] + FolderInfoB[NowDisArea] + NowImageNames[NowDisTime];
		}
	}

	ObjMainImg.className = tmpClass;
    ObjMainImg.src = imageTmp.src;
}
