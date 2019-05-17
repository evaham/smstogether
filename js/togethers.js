/**
* 공통.
*/
var dateObj = new Date();
dateObj.setDate(dateObj.getDate());
var year = dateObj.getFullYear();
var month = dateObj.getMonth() + 1;
var day = dateObj.getDate();

if (month < 10) month = '0' + month;
if (day < 10) day = '0' + day;

var yesterday = year + '-' + month + '-' + (day - 1);
var today = year + '-' + month + '-' + day;

var noImagePath = "../img/no_image.png";
var noBIImagePath = "/resources/img/no_bi_image.png";
var noSupportPath = "/resources/img/noSupport.png";
var noSupportPathBig = "/resources/img/noSupport1.png";

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}


/* 기간버튼 클래스 변경 */
function dateButtonEvt(param, isToday) {
    /*var param = {
    "idx" : idx,
    "dateObj" : dateObj,
    "startDateObj" : startDateObj,
    "endDateObj" : endDateObj
    }*/
    var dateColumnButtonNumber = 5;
    var dateColumnIdx = param["idx"];

    param["dateObj"].value = dateColumnIdx;

    if (dateColumnIdx != 4) {
        var now = new Date();
        var end = new Date();

        var arrStart = new Array();
        var arrEnd = new Array();

        if (isToday != null && !isToday) {
            now.setDate(now.getDate() - 1);
            end.setDate(end.getDate() - 1);
        }

        arrStart.push(now.getFullYear());
        arrStart.push((now.getMonth() + 1) >= 10 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1));
        arrStart.push((now.getDate() >= 10 ? '' + now.getDate() : '0' + now.getDate()));

        if (dateColumnIdx == 1) {
            end.setDate(end.getDate() - 7);
        }
        else if (dateColumnIdx == 2) {
            end.setMonth(end.getMonth() - 1);
        }
        else if (dateColumnIdx == 3) {
            end.setMonth(end.getMonth() - 3);
        }

        arrEnd.push(end.getFullYear());
        arrEnd.push((end.getMonth() + 1) >= 10 ? '' + (end.getMonth() + 1) : '0' + (end.getMonth() + 1));
        arrEnd.push((end.getDate() >= 10 ? '' + end.getDate() : '0' + end.getDate()));

        param["startDateObj"].value = arrEnd.join('-');
        param["endDateObj"].value = arrStart.join('-');
    } else {
        param["startDateObj"].value = "";
        param["endDateObj"].value = "";
    }

    for (var i = 0; i < dateColumnButtonNumber; i++) {
        $("#date-" + i).removeClass("active");
        if (i == dateColumnIdx) {
            $("#date-" + i).addClass("active");
        }
    }
}

/**
* 검색폼의 어제 날짜 지정.
*/
function yesterdayBtn(obj) {
    var dateObj = new Date(new Date().setDate(new Date().getDate() - 1));
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth() + 1;
    var day = dateObj.getDate();
    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }
    var yyyymmdd = year + '-' + month + '-' + day;
    $('#startDate').val(yyyymmdd);
    $('#endDate').val(yyyymmdd);
    $('#dateType').val(obj.value);
    $('.dateBtn').removeClass('active');

    $(obj).addClass('active');
}

/**
* 검색폼의 오늘 날짜 설정.
*/
function todayBtn(obj) {
    $('#startDate').val(today);
    $('#endDate').val(today);
    $('#searchDate').val('today');
    $('.dateBtn').removeClass('active');

    $(obj).addClass('active');
}

/**
* 검색폼의 일주일 단위 날짜 설정.
*/
function weekBtn(obj) {
    var dateObj = new Date(new Date().setDate(new Date().getDate() - 7));
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth() + 1;
    var day = dateObj.getDate();

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    var yyyymmdd = year + '-' + month + '-' + day;

    $('#startDate').val(yyyymmdd);
    $('#endDate').val(today);
    $('#searchDate').val('week');

    $('.dateBtn').removeClass('active');
    $(obj).addClass('active');
}

/**
* 검색폼의 한달 날짜 설정.
*/
function oneMonthBtn(obj) {
    var dateObj = new Date(new Date().setMonth(new Date().getMonth() - 1));
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth() + 1;
    var day = dateObj.getDate();

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    var yyyymmdd = year + '-' + month + '-' + day;

    $('#startDate').val(yyyymmdd);
    $('#endDate').val(today);
    $('#searchDate').val('oneMonth');

    $('.dateBtn').removeClass('active');
    $(obj).addClass('active');
}

/**
* 검색폼의 3달 날짜 설정.
*/
function threeMonthsBtn(obj) {
    var dateObj = new Date(new Date().setMonth(new Date().getMonth() - 3));
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth() + 1;
    var day = dateObj.getDate();

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    var yyyymmdd = year + '-' + month + '-' + day;

    $('#startDate').val(yyyymmdd);
    $('#endDate').val(today);
    $('#searchDate').val('threeMonths');

    $('.dateBtn').removeClass('active');
    $(obj).addClass('active');
}

/**
* 검색폼의 6달 날짜 지정.
*/
function sixMonthsBtn(obj) {
    var dateObj = new Date(new Date().setMonth(new Date().getMonth() - 6));
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth() + 1;
    var day = dateObj.getDate();
    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }
    var yyyymmdd = year + '-' + month + '-' + day;
    $('#startDate').val(yyyymmdd);
    $('#endDate').val(today);
    $('#searchDate').val("sixMonths");

    $('.dateBtn').removeClass('active');
    $(obj).addClass('active');
}

/**
* 검색폼의 전체 날짜 설정.
*/
function allBtn(obj) {
    $('#startDate').val('');
    $('#endDate').val('');
    $('#searchDate').val('all');

    $('.dateBtn').removeClass('active');
    $(obj).addClass('active');
}

/**
* DatePicker 설정.
*/
function setDatepicker(arrIds) {
    var options = {
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        changeMonth: true,
        changeYear: true,
        yearSuffix: '년',
        showButtonPanel: false
    };
    for (var i = 0; i < arrIds.length; i++) {
        $("#" + arrIds[i]).datepicker(options);
    }
}

/**
* 공백제거
*/
function compactTrim(str) {
    return str.replace(/(\s*)/g, '');
}

/**
* 바이트 체크.
*/
function fnChkByte(obj, max, textInfo) {
    var str = obj.value;
    var str_len = str.length;
    var maxByte = (typeof max == "undefined") ? 50 : parseInt(max);
    var rbyte = 0;
    var rlen = 0;
    var one_char = "";
    var str2 = "";
    if (typeof textInfo == "undefined") {
        textInfo = "byteInfo";
    }

    for (var i = 0; i < str_len; i++) {
        one_char = str.charAt(i);

        if (escape(one_char).length > 4) {
            rbyte += 2;
        } else {
            rbyte++;
        }
        if (rbyte <= maxByte) {
            rlen = i + 1;
        }
    }

    if (rbyte > maxByte) {
        alert(maxByte + "Byte 미만으로 작성해주세요");
        str2 = str.substr(0, rlen);
        obj.value = str2;
        fnChkByte(obj, maxByte);
    } else {
        document.getElementById(textInfo).innerText = rbyte;
    }
}

/**
* 이미지 미리보기
*/
function previewImage(targetObj, previewId) {
    var preview = document.getElementById(previewId);
    var ua = window.navigator.userAgent;
    var prevImg = "";
    var info = "";
    var src = "";
    var img = "";
    var width = 0;
    var height = 0;
    var selectionRange = "";
    var btnArea1 = document.getElementById(previewId + "-btn-area1");
    var btnArea2 = document.getElementById(previewId + "-btn-area2");
    var btnArea3 = document.getElementById(previewId + "-del-btn");

    if (typeof window.FileReader == "undefined") {
        var vUserAgent = window.navigator.userAgent;
        if (vUserAgent.indexOf("MSIE 6") > -1 || vUserAgent.indexOf("MSIE 7") > -1 || vUserAgent.indexOf("MSIE 8") > -1 || vUserAgent.indexOf("MSIE 9") > -1) {
            var vImgPath = "";
            var vWidth = 0;
            var vHeight = 0;
            var imageParentNode = "";

            targetObj.select();

            /* oSlectionRange 변수에 대한 정의가 없어 동작하지 않는 문제가 발생하여 그 부분을 주석처리 [2017-02-20 김정하] */
            //if (targetObj.value.indexOf("\\fakepath\\") > -1) {
            vImgPath = document.selection.createRangeCollection()[0].text.toString();
            //} else {
            //	vImgPath = oSelectionRange.text.toString();
            //	targetObj.blur();
            //}
            if (vImgPath == "") {
                if (document.getElementById("prev_" + previewId).height < 100) {
                    document.getElementById("prev_" + previewId).src = noSupportPath;
                } else {
                    document.getElementById("prev_" + previewId).src = noSupportPathBig;
                }
            } else {
                document.getElementById("prev_" + previewId).src = ctx + "/resources/img/blank.png";
                document.getElementById("prev_" + previewId).style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='fi" + "le://" + vImgPath + "', sizingMethod='scale')";
            }
        }
    } else {
        targetObj.select();

        var files = targetObj.files;
        var file = "";
        var imageType = "";
        for (var i = 0; i < files.length; i++) {
            file = files[i];
            imageType = /image.*/;
            if (!file.type.match(imageType)) continue;

            prevImg = document.getElementById("prev_" + previewId);
            if (prevImg) {
                preview.removeChild(prevImg);
                width = prevImg.width;
                height = prevImg.height;
            }

            img = document.createElement("img");
            img.id = "prev_" + previewId;
            img.classList.add("obj");
            img.file = file;
            img.width = width;
            img.height = height;

            preview.appendChild(img);
            var reader = new FileReader();
            reader.onloadend = (function (aImg) {
                return function (e) {
                    aImg.src = e.target.result;
                };
            })(img);
            reader.readAsDataURL(file);
        }
    }
    if (btnArea1 != null) {
        btnArea1.style.display = "none";
    }
    if (btnArea2 != null) {
        btnArea2.style.display = "block";
    }
    if (btnArea3 != null) {
        btnArea3.style.display = "block";
    }
}

/**
* 업로드 파일 확장자 체크.
*/
function fileCheck(id) {
    var thumbext = "";
    if (typeof id == "object") {
        thumbext = id.value;
    } else {
        thumbext = document.getElementById(id).value;
    }
    thumbext = thumbext.slice(thumbext.lastIndexOf(".") + 1).toLowerCase();
    if (thumbext != "jpg" && thumbext != "png" && thumbext != "gif" && thumbext != "jpeg") {
        alert('이미지 파일(jpg, png, gif, jpeg)만 등록 가능합니다.');
        return false;
    } else {
        return true;
    }
}

/**
* 파일 삭제.
*/
function deleteImg(fileId, imgId, methodId) {
    var isMethodId = (typeof methodId == "undefined") ? false : true;
    if (confirm("이미지를 삭제하시겠습니까?")) {
        var width = 0;
        var height = 0;
        var btnArea1 = document.getElementById(imgId + "-btn-area1");
        var btnArea2 = document.getElementById(imgId + "-btn-area2");
        var btnArea3 = document.getElementById(imgId + "-del-btn");
        var preview = document.getElementById(imgId);
        var prevImg = document.getElementById("prev_" + imgId);

        width = prevImg.width;
        height = prevImg.height;
        preview.removeChild(prevImg);

        var oImg = document.createElement("img");
        if (fileId == "biFile") {
            oImg.setAttribute("src", noBIImagePath);
        } else {
            oImg.setAttribute("src", noImagePath);
        }
        oImg.setAttribute("width", width);
        oImg.setAttribute("height", height);
        oImg.setAttribute("id", "prev_" + imgId);

        preview.appendChild(oImg);

        //버튼 변경
        if (btnArea1 != null) {
            btnArea1.style.display = "block";
        }
        if (btnArea2 != null) {
            btnArea2.style.display = "none";
        }
        if (btnArea3 != null) {
            btnArea3.style.display = "none";
        }
        //파일 정보 삭제 ie까지
        var f = document.getElementById(fileId);
        f.removeAttribute("value");
        f.parentNode.replaceChild(f.cloneNode(true), f);

        if (isMethodId) {
            $("#" + methodId).val("delete");
        }
    }
}

/**
* 검색 버튼.
*/
function searchBtn() {
    var f = document.searchFrm;
    f.submit();
}

/**
* 초기화 버튼.
*/
function resetBtn() {
    var urls = location.pathname.split("/");
    var method = urls[urls.length - 1];
    var f = document.searchFrm;
    var url = location.pathname;

    switch (method) {
        case "bbsList.do":
            url += "?bbsSeqno=" + f.bbsSeqno.value
            break;
        case "orderList.do":
            url += "?pageParam=" + f.pageParam.value
            break;
        case "martOrderImageList.do":
            url += "?owner=" + f.owner.value
            break;
    }

    location.href = url;
}

/**
* 파일 추가.
*/
function addFileBtn(pFileElementName) {
    // 파일 추가 10개까지
    var fileElementName = (typeof pFileElementName == "undefined") ? "file" : pFileElementName;
    var cnts = document.getElementsByName(fileElementName);
    var cnt = cnts.length;

    if (cnt == 10) {
        alert('이미지는 10개까지 등록 가능합니다.');
        return false;
    }
    cnt++;

    var data = '';
    data = '<li class="text-center">';
    data += '<div class="box_thumbnail">';
    data += '<div id="imageArea' + cnt + '" class="thumb_comm">';
    data += '<img width="140px" height="140px" id="prev_imageArea' + cnt + '" src="' + noImagePath + '" >';
    data += '</div>';
    data += '</div>';
    data += '<div class="box_thumbnail_info">';
    data += '<div id="imageArea' + cnt + '-btn-area1">';
    data += '<label for="file' + cnt + '" class="btn btn-sm btn_style2"><i class="glyphicon glyphicon-plus"></i> 등록</label>';
    data += '</div>';
    data += '<div id="imageArea' + cnt + '-btn-area2" style="display: none;">';
    data += '<label for="file' + cnt + '" class="btn btn-sm btn_style2" style="margin-right:5px;"><i class="glyphicon glyphicon-wrench"></i> 변경</label>';
    data += '<a class="btn btn-sm btn_style2" onclick="deleteImg(' + '\'file' + cnt + '\'' + ',' + '\'imageArea' + cnt + '\'' + ');return false;" role="button"><i class="glyphicon glyphicon-remove txt_red"></i> 삭제</a>';
    data += '</div>';
    data += '</div>';
    data += '<input type="file" id="file' + cnt + '" name="file" class="input-file hidden" onchange="if(fileCheck(' + '\'file' + cnt + '\'' + '))previewImage(this,' + '\'imageArea' + cnt + '\'' + ');" style="width:0px; height:0px; outline:none;"/>';
    data += '<input type="hidden" class="hidden" name="fileSeqnos" value="0" />';
    data += '<input type="hidden" id="fileMethod' + cnt + '"  class="hidden" name="fileMethods" value="insert"/>';
    data += '</li>';

    var img = document.getElementById('img-row');
    $(img).append(data);
}

function excelDown() {
    var pathNames = location.pathname.split("/");
    var methodName = pathNames[pathNames.length - 1];

    if (confirm('엑셀 다운로드를 하시겠습니까?')) {
        location.href = ctx + "/excel/" + methodName + "?" + $("#searchFrm").serialize();
    }
}

/**
* URL의 파라메터 값 획득.
* @param name
* @returns
*/
function getParam(name) {
    var result = "";
    var queryString = window.location.search;
    var paramMap = {}
    if (queryString == "") result = undefined;
    if (typeof result != "undefined") {
        var params = queryString.split("?")[1];

        if (params == "") result = undefined;

        if (typeof result != "undefined") {
            var paramObj = params.split("&");
            for (var i = 0; i < paramObj.length; i++) {
                var datas = paramObj[i].split("=");
                paramMap[datas[0]] = datas[1];
            }
            result = paramMap[name];
        }
    }

    return result;
}

/*점포명 클릭 - 점주용 페이지 팝업 띄우기*/
function martOwner(mart) {

    if (isNaN(mart) || parseInt(mart) == 0) {
        alert("조회할 수 없는 점포입니다.");
        return false;
    }

    $.ajax({
        method: "get",
        url: ctx + '/mart/ajax/martOwner.json?martSeqno=' + mart,
        success: function (data) {
            if (data.url) {
                var win = window.open(data.url, "MartOwner" + mart, "width=1024, height=600, resizable=yes, scrollbars=yes");
                if (win) win.focus();
                return false;
            }
            else {
                alert(data.error);
                return false;
            }
        },
        error: function () {
            alert('점포 정보를 찾을 수 없습니다.');
            return false;
        }
    });
}

/* 회원정보 상세보기 */
function userInfo(userSeqno) {
    var leftUser = parseInt($(window).width() / 2) - 350;
    var url = ctx + "/user/popup/userInfoPop.do?userSeqno=" + userSeqno;
    var win = window.open(url, "userInfo", "width=700, height=500,left=" + leftUser + ",top=100,resizable=yes, scrollbars=yes")
    if (win) win.focus();
    return false;
}