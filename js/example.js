var area0;
var templist0;

var areaid = 0,
    indexid = 0;


window.onload = function () {
    pageInit();
    // bindList0(getDataValue(area0.curpage, list0, list0.length));
    // bindList1(getDataValue(area1.curpage, list1, list1.length));
};

function pageInit() {
    //创建焦点
    area0 = WkEpg.AreaCreator(1, 2, new Array(-1, -1, 1, -1), "area0_list_", "className:item item_focus", "className:item");

    pageobj = WkEpg.PageCreator(areaid, indexid, new Array(area0));

    //页面点击事件
    pageobj.pageOkEvent = function () {
        var areaID = pageobj.curareaid; //当前区域
        var indexID = pageobj.areas[pageobj.curareaid].curindex; //当前位置
    };

    // 返回
    pageobj.goBackEvent = function () {

    };
}

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

function bindList0(datavalue) {
    templist0 = datavalue;
    area0.datanum = datavalue.length;
    for (var i = 0; i < datavalue.length; i++) {
        if (i < datavalue.length) {
            WkEpg.$("area0_list_" + i).style.visibility = "visible";
            WkEpg.$("area0_image_" + i).src = datavalue[i].image;
        } else {
            WkEpg.$("area0_list_" + i).style.visibility = "hidden";
        }
    }
}

//文本滚动动画
function marqueearea0dom() {
    area0.changefocusBeforeEvent = function () {
        if (WkEpg.getByteLength(area0.doms[area0.curindex].contentdom) > 20) {
            document.getElementById("area0_txt_" + area0.curindex).innerHTML = "<marquee direction='left' scrolldelay='100'>" + area0.doms[area0.curindex].contentdom + "</marquee>";
        }
    };
    area0.changeunfocusBeforeEvent = function () {
        if (WkEpg.getByteLength(area0.doms[area0.curindex].contentdom) > 20) {
            document.getElementById("area0_txt_" + area0.curindex).innerHTML = WkEpg.getCutedString(area0.doms[area0.curindex].contentdom, 20, true);
        }
    };
}