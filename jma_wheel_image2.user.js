// ==UserScript==
// @name        jma_wheel_image2
// @namespace   http://typhoonidx.org/jma_wheel_image.user.js
// @include     https://www.jma.go.jp/bosai/weather_map/
// @author      typhoonidx
// @require     https://code.jquery.com/jquery-3.5.1.min.js
// @license     GPL 3.0
// @version     2.0
// @grant       none
// @description 気象庁の衛星画像/天気図をホイールで前後にぱらぱらめくる
// ==/UserScript==

function handler(e){
console.log(e.deltaY);  // この値
	if (e.deltaY <= 0) {
		//timeCallback(list, state, viewArea, timeLabel, prevButton, nextButton, 1); // この関数は気象庁のページで定義されています。
        $('img.contents-clickable[src="../common/image/slider_skip_backward_y.svg"]').click();
	} else {
		//timeCallback(list, state, viewArea, timeLabel, prevButton, nextButton, -1); // この関数は気象庁のページで定義されています。
        $('img.contents-clickable[src="../common/image/slider_skip_forward_y.svg"]').click();
	}
	e.preventDefault();
}



function main()
{
    //$("#image").off('wheel');
    //$("#image").on('wheel', handler);
    var obj = document.querySelector(".contents-block");
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