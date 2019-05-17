//글자수표시
//2013-06-03 : 초과시 alert + 뒷부분을 잘랐으나 --> 빨간색 + 안내메시지표시..로 변경.
function jsUpdateMsgLen(txtObj)
{           
    var lblMsgLen = document.getElementById("lblMsgLen");
    var iTextLen = jsGetByteLength(txtObj.value);
    var isLMS = document.getElementById("chkLMS").checked;
    var spanMsgInfo = document.getElementById("spanMsgInfo");
    var iMaxLen = isLMS==1 ? 2000 : 90;

    spanMsgInfo.innerText = iTextLen <= iMaxLen ? "" : "메시지는 " + iMaxLen + "바이트(한글 " + iMaxLen/2 + "자, 영문 " + iMaxLen + "자)까지 입력하실 수 있습니다.";
    lblMsgLen.style.color = iTextLen <= iMaxLen ? "#000090" : "#ff0000";
    lblMsgLen.innerText = iTextLen + "/" + iMaxLen;
    
}

//글자수카운트
function jsGetByteLength(message) 
{
    var nBytes = 0;

    for (i=0; i<message.length; i++) 
    {
        var ch = message.charAt(i);
        if(escape(ch).length > 4) nBytes += 2;  // 한글일때 2씩 더함
        else if(ch == '\n') 
        {
            if (message.charAt(i-1) != '\r') nBytes += 1;  // Enter일때 1씩 더함
        } else nBytes += 1;  // 기타 문자들일때 1씩 더함
    }
    return nBytes;
}

//자르기
function jsGetStringByte(nMaxLen, message)
{
    var nBytes = 0;
    var strText = "";
    for (i=0; i<message.length && nBytes <= nMaxLen; i++) 
    {
        var ch = message.charAt(i);
        if(escape(ch).length > 4) nBytes += 2;  // 한글일때 2씩 더함
        else if(ch == '\n') 
        {
            if (message.charAt(i-1) != '\r') nBytes += 1;  // Enter일때 1씩 더함
        } else nBytes += 1;  // 기타 문자들일때 1씩 더함
        
        if(nBytes <= nMaxLen) strText += ch;
    }
    return strText;
}     


//메일머지 필드 추가 하기
function jsOnMergeFieldClick(tdObj)
{
    var strField = "{"+tdObj.innerText.trim() + "}";
    var txtSMSMsg = document.getElementById("txtSMSMsg");
    txtSMSMsg.focus();        
    var str = txtSMSMsg.value + strField;   // 메일머지 추가
    if(jsGetByteLength(str)<=90)    // 90 byte 이하이면 처리함.
    {
        txtSMSMsg.value = str;
        jsUpdateMsgLen(txtSMSMsg);
        txtSMSMsg.focus();
    }
    else
        alert("메일머지 필드가 추가되면 90바이트를 초과하게 됩니다\n추가 하시려면 메세지를 수정 하십시오");
}
// end ---------------------------- SMS 메세지 관련 -------------------------------//