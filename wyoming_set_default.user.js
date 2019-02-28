// ==UserScript==
// @name        wyoming_set_default
// @namespace   http://typhoonidx.org/wyoming_set_default.user.js
// @include     http://weather.uwyo.edu/upperair/*
// @author      typhoonidx
// @license     GPL 3.0
// @version     1.0
// @run-at      document-end
// @grant       none
// @description ワイオミングでステーションをデフォルト47807福岡にする。
// ==/UserScript==

function main()
{
	// Stationを47807福岡にする
	var stnm = document.querySelector("input[name='STNM']");
	console.log("stnm="+stnm);
	stnm.value = 47807;
	stnm.setAttribute("style", "border-color:red;");

	// TypeをGIF:Skew-Tにする
	var type = document.querySelector("select[name='TYPE']");
	type.selectedIndex = 3; // 3=GIF:Skew-T
	type.setAttribute("style", "border-color:red;");


	// StationにキーボードフォーカスをあててEnter押下で即表示できるようにする
	stnm.focus();
}

main();