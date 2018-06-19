function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null){
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
}

function use_cookie(_area_id,_index_id) {
    var areaId = pageobj.curareaid,
        indexId = pageobj.areas[pageobj.curareaid].curindex,
        days = 30,
        exp = new Date();

    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);

    document.cookie = _area_id + "="+ areaId + ";expires=" + exp.toGMTString();
    document.cookie = _index_id + "="+ indexId + ";expires=" + exp.toGMTString();
}

/*获取epgDomain*/
function getDomain(){
    var domain =  Authentication.CTCGetConfig("EPGDomain");
    var start = 0;
    if(domain.indexOf("https")>-1)start=8;
    else if((domain.indexOf("http")>-1))start=7;
    var tmp = domain.substring(start, domain.length);
    var result = domain.substring(0, tmp.indexOf("/")+start);
    return result;
}

//截取地址
function getCaption(obj){
    var index=obj.lastIndexOf("\?");
    obj=obj.substring(index+11,obj.length);
    return obj;
}

//获取参数
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

//获取数据中符合type的数据
function getPosterUrl(arr,type) {
    for(var i=0;i<arr.length;i++){
        var o = arr[i];
        if(o.type==type){
            return o.url;
        }
    }
}

//获取数据
function getDataValue(currentPage, curList, pageSize) {
    var testList = curList;
    var start = (currentPage - 1) * pageSize;
    var end = (start + pageSize);
    if (end >= testList.length) {
        end = testList.length;
    }
    var temptestList = new Array();
    for (var i = start; i < end; i++) {
        temptestList.push(testList[i]);
    }
    return temptestList;
}

//文本滚动动画
function marqueearea0dom() {
    area0.changefocusAfterEvent = function() {
        if (WkEpg.getByteLength(area0.doms[area0.curindex].contentdom) > 12)
            document.getElementById("area0_txt_" + area0.curindex).innerHTML = "<marquee direction='left' scrolldelay='100'>" + area0.doms[area0.curindex].contentdom + "</marquee>";
    };
    area0.changeunfocusBeforeEvent = function() {
        if (WkEpg.getByteLength(area0.doms[area0.curindex].contentdom) > 12)
            document.getElementById("area0_txt_" + area0.curindex).innerHTML = WkEpg.getCutedString(area0.doms[area0.curindex].contentdom, 12, true);
    };
}

function marqueearea1dom() {
    area1.changefocusAfterEvent = function() {
        if (WkEpg.getByteLength(area1.doms[area1.curindex].contentdom) > 12)
            document.getElementById("area1_txt_" + area1.curindex).innerHTML = "<marquee direction='left' scrolldelay='100'>" + area1.doms[area1.curindex].contentdom + "</marquee>";
    };
    area1.changeunfocusBeforeEvent = function() {
        if (WkEpg.getByteLength(area1.doms[area1.curindex].contentdom) > 12)
            document.getElementById("area1_txt_" + area1.curindex).innerHTML = WkEpg.getCutedString(area1.doms[area1.curindex].contentdom, 12, true);
    };
}

function marqueearea2dom() {
    area2.changefocusAfterEvent = function() {
        if (WkEpg.getByteLength(area2.doms[area2.curindex].contentdom) > 12)
            document.getElementById("area2_txt_" + area2.curindex).innerHTML = "<marquee direction='left' scrolldelay='100'>" + area2.doms[area2.curindex].contentdom + "</marquee>";
    };
    area2.changeunfocusBeforeEvent = function() {
        if (WkEpg.getByteLength(area2.doms[area2.curindex].contentdom) > 12)
            document.getElementById("area2_txt_" + area2.curindex).innerHTML = WkEpg.getCutedString(area2.doms[area2.curindex].contentdom, 12, true);
    };
}