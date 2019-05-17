

var timeHidePop;
var objCharTarget;
document.write("<style>.tdChar{ font-family:굴림체;font-size:9pt;width:20px;background:#eeeeee;}</style>");
document.write("<div id='divSpecialChar' oncontextmenu='return false' ondragstart='return false' onselectstart='return false' style=\"margin:5; padding:5;margin-top:2;border-top:1 solid buttonshadow;border-left: 1 solid buttonshadow;border-right: 1 solid buttonshadow;border-bottom:1 solid buttonshadow;width:160px;display:none;position: absolute; z-index: 3;\"></div>");
var afterFunc;

//페이지에서 클릭시
function jsPopSpecialChar(objButton, objText, _afterFunc)
{	
	//---------------------- 위치 ------------------------//
	//버튼 왼쪽-아래 좌표 사용
	var rc = objButton.getBoundingClientRect();
	divSpecialChar.style.pixelLeft	= (document.body.scrollLeft + rc.left);
	divSpecialChar.style.pixelTop	= (document.body.scrollTop + rc.bottom - 1);
			
	if(divSpecialChar.style.display == "block"){ divSpecialChar.style.display = "none"; return; }
	if(divSpecialChar.style.display == "none") divSpecialChar.style.display = "block";

	objCharTarget = objText;
	afterFunc = _afterFunc;
		
	divHTML    = 
"<table width='100%' border='0' cellpadding='3' cellspacing='0' style='font-size:8pt;border:solid 2px #bbbbbb;'>"
 + "<tr>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('★');\">★</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('☆');\">☆</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('☎');\">☎</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('☏');\">☏</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('☜');\">☜</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('☞');\">☞</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('※');\">※</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('♥');\">♥</td>"
 + "</tr><tr>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('♡');\">♡</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('♣');\">♣</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('♠');\">♠</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('♤');\">♤</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('♧');\">♧</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('♨');\">♨</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('ㆀ');\">ㆀ</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('♩');\">♩</td>"
 + "</tr><tr>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('♪');\">♪</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('♬');\">♬</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('■');\">■</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('□');\">□</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('▣');\">▣</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('▤');\">▤</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('▦');\">▦</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('▨');\">▨</td>"
 + "</tr><tr>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('▩');\">▩</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('▒');\">▒</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('▲');\">▲</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('△');\">△</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('▶');\">▶</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('▷');\">▷</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('▼');\">▼</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('▽');\">▽</td>"
 + "</tr><tr>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('◀');\">◀</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('◁');\">◁</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('◆');\">◆</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('◇');\">◇</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('◈');\">◈</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('●');\">●</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('○');\">○</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('◎');\">◎</td>"
 + "</tr><tr>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('⊙');\">⊙</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('◐');\">◐</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('◑');\">◑</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('←');\">←</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('↑');\">↑</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('→');\">→</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('↓');\">↓</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('⇒');\">⇒</td>"
 + "</tr><tr>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('§');\">§</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('Ø');\">Ø</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('∀');\">∀</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('∃');\">∃</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('∏');\">∏</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('∞');\">∞</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('∧');\">∧</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('∪');\">∪</td>"
 + "</tr><tr>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('∬');\">∬</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('∴');\">∴</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('∽');\">∽</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('≠');\">≠</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('⊃');\">⊃</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('￠');\">￠</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"doCharCellClick('￥');\">￥</td>"
 + "<td class=\"tdChar\" onmouseover=\"doCharCellMouseOver()\" onmouseout=\"doCharCellMouseOut()\" onclick=\"divSpecialChar.style.display='none'\">"
 + "    <img src=\"img/btn_close.gif\" style=\"cursor:hand;\" title=\"특수문자 선택창을 닫습니다.\">"
 + "</td>"
 + "</tr>"
 + "</table>";
	            
    document.all.divSpecialChar.innerHTML = divHTML;
}

// 마우스 메뉴위
function doCharCellMouseOver()
{
	var el = window.event.srcElement;
	el.style.backgroundColor = "#ccddff";
	el.style.cursor = "pointer";

    //숨기기 타이머죽임
	window.clearTimeout(timeHidePop);
}

//마우스가 밖으로 이동
function doCharCellMouseOut()
{
	var el = window.event.fromElement;
	el.style.backgroundColor = "#eeeeee";
	
	//숨기기 타이머
	timeHidePop = window.setTimeout("divSpecialChar.style.display='none';", 1000);
}


// 셀 클릭
function doCharCellClick(sel)
{
    objCharTarget.value += sel;
    divSpecialChar.style.display = 'none'; // 화면에서 지움
    eval(afterFunc);
}
