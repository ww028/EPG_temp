var area0, area1, area2;
var templist0, templist1;

var list2=[{
    text:"欢迎欢饮，热烈欢迎"
}]

// console.log(parent.foc_obj);
var areaid = parent.areaid || 0,
    indexid = parent.indexid || 0;

window.onload = function () {
    window.focus();
    pageInit();
    bindList2(getDataValue(area2.curpage, list2, 1));
    marqueearea2dom();
};

function pageInit() {
    //创建焦点
    area0 = WkEpg.AreaCreator(1, 2, new Array(-1, -1, 1, -1), "area0_list_", "className:item item_focus", "className:item");
    area1 = WkEpg.AreaCreator(1, 3, new Array(0, -1, -1, -1), "area1_list_", "className:item item_focus", "className:item");
    area2 = WkEpg.AreaCreator(1, 1, new Array(-1, -1, -1, -1), "area2_list_", "className:item item_focus", "className:item");

    pageobj = WkEpg.PageCreator(areaid, indexid, new Array(area0, area1,area2));

    //页面点击事件
    pageobj.pageOkEvent = function () {
        var areaid = pageobj.curareaid,
            indexid = pageobj.areas[pageobj.curareaid].curindex,
            back_url = "../pages/index.html"
        switch (areaid) {
            case 0:
                parent.goUrl(areaid, indexid, "../pages/page2.html", back_url)
                break;

            case 1:
                parent.goUrl(areaid, indexid, "../pages/page2.html", back_url)
                break;
        }
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

function bindList2(datavalue) {
    templist2 = datavalue;
    area2.datanum = datavalue.length;
    for (var i = 0; i < datavalue.length; i++) {
        if (i < 1) {
            WkEpg.$("area2_list_" + i).style.visibility = "visible";
            WkEpg.$("area2_txt_" + i).innerHTML = datavalue[i].text;
            area2.doms[i].contentdom = datavalue[i].contName;
            if (WkEpg.getByteLength(area2.doms[i].contentdom) > 12) {
                document.getElementById("area2_txt_" + i).innerHTML = WkEpg.getCutedString(area2.doms[i].contentdom, 12, true);
            }
        } else {
            WkEpg.$("area2_list_" + i).style.visibility = "hidden";
        }
    }
}

// 文本滚动动画
function marqueearea2dom() {
    // area2.changefocusAfterEvent = function () {
        console.log(WkEpg.getByteLength(area2.doms[area2.curindex].contentdom));
        // if (WkEpg.getByteLength(area2.doms[area2.curindex].contentdom) > 6)
            document.getElementById("area2_txt_" + area2.curindex).innerHTML = "<marquee direction='left' scrolldelay='100'>" + area2.doms[area2.curindex].contentdom + "</marquee>";
    // };
    // area2.changeunfocusBeforeEvent = function () {
    //     if (WkEpg.getByteLength(area0.doms[area0.curindex].contentdom) > 12)
    //         document.getElementById("area0_txt_" + area0.curindex).innerHTML = WkEpg.getCutedString(area0.doms[area0.curindex].contentdom, 12, true);
    // };
}