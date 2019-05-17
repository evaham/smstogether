	var target;																	// 호출한 Object의 저장
	var target2;
	var stime;
	
	//초기 입력값 표시용 : added by yamoochi : 2005-05-25
	//Show_cal로 전달되는 날짜는 선택 이동시 계속 바뀌며
	//기존 표시는 Show_cal로 전달되는 날짜가 현재월에 해당해야만 다른 색으로 표시하는 어정쩡한 상태여서
	//처음 달력팝업시 초기값으로 들어오는 색을 다르게 표시하기 위해
	var iOrgYYYY;
	var iOrgMM;
	var iOrgDD;
		
	document.write("<div id=minical oncontextmenu='return false' ondragstart='return false' onselectstart='return false' style=\"background:buttonface; margin:5; padding:5;margin-top:2;border-top:1 solid buttonshadow;border-left: 1 solid buttonshadow;border-right: 1 solid buttonshadow;border-bottom:1 solid buttonshadow;width:130px;display:none;position: absolute; z-index: 99\"></div>");

//페이지에서 달력버튼 클릭시
//
function Calendar(objButton, objText,objText2)
{
    if(!objButton) return;
    
	var now = objText.value.split("-");
	
	target = objText;																// Object 저장;
	if(objText2){target2 = objText2;}
	
	//---------------------- 달력위치 ------------------------//
	//1. 마우스 클릭 포이트 사용
	//var x, y;
	//x = (document.layers) ? loc.pageX : event.clientX;
	//y = (document.layers) ? loc.pageY : event.clientY;
	//minical.style.pixelLeft	= x - 150 + document.body.scrollLeft;
	//minical.style.pixelTop	= y + 15 + document.body.scrollTop;
		
	//2007-01-05	
	//2. 버튼 오른쪽-아래 좌표 사용
	var rc = objButton.getBoundingClientRect();
	minical.style.pixelLeft	= document.body.scrollLeft + rc.right - 130;    //130 = 레이어폭
	minical.style.pixelTop	= document.body.scrollTop + rc.bottom;

	
	minical.style.display = (minical.style.display == "block") ? "none" : "block";

	if (now.length == 3)
	{																			// 정확한지 검사
																				// 넘어온 값을 년월일로 분리
		//초기 입력값 표시용 : added by yamoochi : 2005-05-25
		iOrgYYYY = parseInt(now[0]);
		iOrgMM = parseInt(now[1]);
		iOrgDD = parseInt(now[2]);
	}
	else
	{
		now = new Date();														// 현재 년/월/일을 설정하여 넘김.
		
		//초기 입력값 표시용 : added by yamoochi : 2005-05-25
		iOrgYYYY = now.getFullYear();
		iOrgMM = now.getMonth()+1;
		iOrgDD = now.getDate();		
	}

    Show_cal(iOrgYYYY, iOrgMM, iOrgDD, "Current");

    return false;									
}

// 마우스가 칼렌다위에 있으면
function doOver()
{
	var el = window.event.srcElement;
	cal_Day = el.title;

	if (cal_Day.length > 7)
	{																			// 날짜 값이 있으면.
		el.style.borderTopColor = el.style.borderLeftColor = "buttonhighlight";
		el.style.borderRightColor = el.style.borderBottomColor = "buttonshadow";
	}
	window.clearTimeout(stime);													// Clear
}

// 날자를 선택하였을 경우
function doClick()
{															
	cal_Day = window.event.srcElement.title;
	window.event.srcElement.style.borderColor = "red";							// 테두리 색을 빨간색으로
	if (cal_Day.length > 7)														// 날자 값이있으면
	{																				
		target.value=cal_Day;
		if(target2){target2.value=cal_Day;}										// 값 설정
	}
	
	minical.style.display='none';												// 화면에서 지움
}

function doOut()
{
	var el = window.event.fromElement;
	cal_Day = el.title;

	if (cal_Day.length > 7)
	{
		el.style.borderColor = "white";
	}
	//stime=window.setTimeout("minical.style.display='none';", 200);
}

// 2자리 숫자료 변경
function day2(d) 
{																
	var str = new String();
	
	if (parseInt(d) < 10) 
	{
		str = "0" + parseInt(d);
	} 
	else 
	{
		str = "" + parseInt(d);
	}
	return str;
}

function Show_cal(sYear, sMonth, sDay, sCommand)
{
	var Months_day = new Array(0,31,28,31,30,31,30,31,31,30,31,30,31)
	var Weekday_name = new Array("일", "월", "화", "수", "목", "금", "토");
	var intThisYear = new Number(), intThisMonth = new Number(), intThisDay = new Number();
	document.all.minical.innerHTML = "";
    
    //오늘
	dtToday = new Date();													
	intTodayYear    = dtToday.getFullYear();
	intTodayMonth   = dtToday.getMonth()+1;
	intTodayDay     = dtToday.getDate();

    //표시할 날짜(넘겨진 날짜) --------------------------------------------------
	intThisYear     = parseInt(sYear);
	intThisMonth    = parseInt(sMonth);
	intThisDay      = parseInt(sDay);
	
	if (intThisYear==0 || intThisMonth==0 || intThisDay==0)
	{   
	    //값이 없을 경우 --> 오늘
	    intThisYear     = dtToday.getFullYear();			
	    intThisMonth    = parseInt(dtToday.getMonth())+1;	// 월값 = 실제월값-1
	    intThisDay      = dtToday.getDate();
	}
	
	dtThisDay = new Date(intThisYear, intThisMonth, intThisDay);				// 넘어온 값의 날자 생성
	intThisWeekday = dtThisDay.getDay();										// 넘어온 날자의 주 요일
	varThisWeekday = Weekday_name[intThisWeekday];								// 현재 요일 저장
	
	// 4년마다 1번이면 (사로나누어 떨어지면)
	if ((intThisYear % 4)==0)
	{													
		if ((intThisYear % 100) == 0)
		{
			if ((intThisYear % 400) == 0) Months_day[2] = 29;
		}
		else
		{
			Months_day[2] = 29;
		}
	}
	//--------------------------------------------------------------------
	
	//전월, 익월
	switch (sCommand) {
	    case "Current":
	        break;
	    case "PrevYear":
	        intThisYear = intThisYear - 1;
	        break;
	    case "PrevMonth":
	        if (intThisMonth == 1) {
	            intThisYear = intThisYear - 1;
	            intThisMonth = 12;
	        }
	        else {
	            intThisMonth = intThisMonth - 1;
	        }
	        break;
	    case "NextYear":
	        intThisYear = intThisYear + 1;
	        break;
	    case "NextMonth":
	        if (intThisMonth == 12) {
	            intThisYear = intThisYear + 1;
	            intThisMonth = 1;
	        }
	        else {
	            intThisMonth = intThisMonth + 1;
	        }
	        break;
	    default:
	        break;
	}

	switch (intThisMonth) {
	    case 1:
	        intPrevYear = intThisYear - 1;
	        intPrevMonth = 12;
	        intNextYear = intThisYear;
	        intNextMonth = 2;
	        break;
	    case 12:
	        intPrevYear = intThisYear;
	        intPrevMonth = 11;
	        intNextYear = intThisYear + 1;
	        intNextMonth = 1;
	        break;
	    default:
	        intPrevYear = intThisYear;
	        intPrevMonth = parseInt(intThisMonth) - 1;
	        intNextYear = intThisYear;
	        intNextMonth = parseInt(intThisMonth) + 1;
	        break;
	}

	//전월분 표시할 날수 = 이번달 1일 요일값(0:일요일, 1:월요일)
	dtThisFirstDay = new Date(intThisYear, intThisMonth - 1, 1);
	intPrevDaysLast = Months_day[intPrevMonth];
	intPrevDaysToShow = dtThisFirstDay.getDay();
	
	//익월분 표시할 날짜시작
	intNextDayShow = 1;

    // 달의 시작 일자	
	intShowDay = 1	
	Stop_Flag = 0
	
	//이달말일
	intLastDay = Months_day[intThisMonth];
	var MonthDigit = "";
	if(intThisMonth < 10)
	    MonthDigit = "0" + intThisMonth;
	else
	    MonthDigit = intThisMonth;

	Cal_HTML = "<table width='100%' border=0 cellpadding=0 cellspacing=0 OnMouseOver=doOver(); OnMouseOut=doOut(); style='font-size:8pt;border: solid 1px #80bb00;'>"
			+ "<tr height='20' align=center style='background:#80bb00;color:white;'><td colspan=7 nowrap=nowrap align=center><span title='작년' style=\"cursor:hand;font-family:Dotum;\" onClick='Show_cal(" + intThisYear + "," + intThisMonth + ",1, \"PrevYear\");'><font color='blue'>&lt;&lt;</font></span><span title='이전달' style=\"cursor:hand;font-family:Dotum;\" onClick='Show_cal(" + intThisYear + "," + intThisMonth + ",1, \"PrevMonth\");'><font color='#FFD700'>◀</font></span> "
			// 2007-01-05 : 연도, 월 직접 이동 드롭다운 제거
			//+ get_Yearinfo(intThisYear,intThisMonth,intThisDay) + " " + get_Monthinfo(intThisYear,intThisMonth,intThisDay)
			+ "<b>" + intThisYear + "</b>년<b>" + MonthDigit + "</b>월"
			+ " <span title='다음달' style=\"cursor:hand;font-family:Dotum;\" onClick='Show_cal(" + intThisYear + "," + intThisMonth + ",1, \"NextMonth\");'><font color='#FFD700'>▶</font></span><span title='내년' style=\"cursor:hand;font-family:Dotum;\" onClick='Show_cal(" + intThisYear + "," + intThisMonth + ",1, \"NextYear\");'><font color='blue'>&gt;&gt;</font></span></td></tr>"
			+ "<tr height='18' align=center bgcolor='#666666' style='color:#FFFFFF;'><td><font color='#FFAAAA'>일</font></td><td>월</td><td>화</td><td>수</td><td>목</td><td>금</td><td><font color='#AAAAFF'>토</font></td></tr>";
			
	
	// 주단위 루프 시작, 최대 6주
	for (intLoopWeek=1; intLoopWeek < 7; intLoopWeek++)
	{						
		Cal_HTML += "<tr align=RIGHT BGCOLOR=WHITE style=\"height:16px;\">"

		// 요일단위 루프 시작, 일요일 부터
		for (intLoopDay=1; intLoopDay <= 7; intLoopDay++)
		{	
			// 첫주 시작일이 1보다 크면
			if (intPrevDaysToShow > 0)
			{											
				intPrevDaysToShow--;
				intPrevDayShow = intPrevDaysLast - intPrevDaysToShow;
				Cal_HTML += "<td onClick=doClick();  ";
				Cal_HTML += " title= "+intPrevYear+"-"+day2(intPrevMonth)+"-"+day2(intPrevDayShow);
				Cal_HTML += " style=\"cursor:Hand;color:gray;\" >" + intPrevDayShow;
			}
			// 입력 날짜가 월말보다 크다면
			else if (intShowDay > intLastDay)
			{								
			    Cal_HTML += "<td onClick=doClick();  ";
			    Cal_HTML += " title= " + intNextYear + "-" + day2(intNextMonth) + "-" + day2(intNextDayShow);
			    Cal_HTML += " style=\"cursor:Hand;color:gray;\" >" + intNextDayShow;
			    intNextDayShow++;
			}
			else
			{
				//초기 입력값 표시
				if (intThisYear == iOrgYYYY && intThisMonth==iOrgMM && intShowDay==iOrgDD)					
				{
					Cal_HTML += "<td bgcolor='#ffd700'";
				}
				//오늘
				else if (intThisYear == intTodayYear && intThisMonth==intTodayMonth && intShowDay==intTodayDay)					
				{
					Cal_HTML += "<td bgcolor='#99ff33'";
				}
				else
				{ 
					Cal_HTML += "<td bgcolor='#EFEFEF'";
				}
				
				Cal_HTML += " onClick=doClick(); title=" + intThisYear + "-" + day2(intThisMonth) + "-" + day2(intShowDay) + " style=\"cursor:Hand;border:1px solid white;";
				
				
				switch(intLoopDay)
				{
					case 1:	//일요일
						Cal_HTML += "color:red;"
						break;
					case 7:
						Cal_HTML += "color:blue;"
						break;
					default:
						Cal_HTML += "color:black;"
						break;
				}
				
				Cal_HTML += "\">"+intShowDay;
					
				intShowDay++;
				
				// 날짜 값이 월말값보다 크면 루프탈출
				if (intShowDay > intLastDay) Stop_Flag = 1;
				
			}
			Cal_HTML += "</td>";
		}
		Cal_HTML += "</tr>";
		if (Stop_Flag==1) break;
	}
	Cal_HTML += "</table>";

	document.all.minical.innerHTML = Cal_HTML;

	return false;
}

/*
//연도이동 드롭다운
function get_Yearinfo(year,month,day) {											// 년 정보를 콤보 박스로 표시

	//var min = parseInt(year) - 100;
	//var max = parseInt(year) + 10;
	var min = 1999;
	var max = parseInt(year) + 10;
	var i = new Number();
	var str = new String();
	
	str = "<SELECT onChange='Show_cal(this.value,"+month+","+day+");' ONMOUSEOVER=doOver();>";
	for (i=min; i<=max; i++) {
		if (i == parseInt(year)) {
			str += "<OPTION VALUE="+i+" selected ONMOUSEOVER=doOver();>"+i+"</OPTION>";
		} else {
			str += "<OPTION VALUE="+i+" ONMOUSEOVER=doOver();>"+i+"</OPTION>";
		}
	}
	str += "</SELECT>";
	return str;
}

//월이동 드롭다운
function get_Monthinfo(year,month,day) {										// 월 정보를 콤보 박스로 표시
	var i = new Number();
	var str = new String();
	
	str = "<SELECT onChange='Show_cal("+year+",this.value,"+day+");' ONMOUSEOVER=doOver();>";
	for (i=1; i<=12; i++) {
		if (i == parseInt(month)) {
			str += "<OPTION VALUE="+i+" selected ONMOUSEOVER=doOver();>"+i+"</OPTION>";
		} else {
			str += "<OPTION VALUE="+i+" ONMOUSEOVER=doOver();>"+i+"</OPTION>";
		}
	}
	str += "</SELECT>";
	return str;
}
*/