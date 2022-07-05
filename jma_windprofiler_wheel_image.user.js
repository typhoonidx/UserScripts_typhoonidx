// ==UserScript==
// @name        jma_windprofiler_wheel_image
// @namespace   http://typhoonidx.org/jma_windprofiler_wheel_image.user.js
// @include     https://www.jma.go.jp/bosai/windprofiler/*
// @author      typhoonidx
// @require     https://code.jquery.com/jquery-3.5.1.min.js
// @license     GPL 3.0
// @version     1.0
// @grant       none
// @description 画像をホイールで前後にぱらぱらめくる
// ==/UserScript==

function handler(e){
	if (e.deltaY < 0) {
		//document.querySelector("#wpr-leftbutton").click();
        var item = document.getElementById("wpr-leftbutton");
        console.log(item);
        item.click(e);
		//$("#wpr-leftbutton").click();
    
	} else {
		//document.querySelector("#wpr-rightbutton").click();
        document.getElementById("wpr-rightbutton").click(e);
		//$("#wpr-rightbutton").click();
	}
	e.preventDefault();
}
/*
//$("#lbl_img_main").off('wheel');
//$("#lbl_img_main").on('wheel', handler);
document.querySelector("#wpr-container").addEventListener('wheel', handler);

// 画像読み込み中の画像がちらつくので無効化
showLoading = function(){
    return false;
}
*/



function main()
{
    //$("#image").off('wheel');
    //$("#image").on('wheel', handler);
    var obj = document.querySelector("#wpr-container");
    if ( obj != null ) {
        obj.addEventListener('wheel', handler);
    }
}

main();

var observer = new MutationObserver(function(mutations) {
    observer.disconnect();
    main();
    observer.observe(document, config);
});

var config = {
    attributes: true,
    childList: true,
    characterData: false,
    subtree: true
};

observer.observe(document, config);