var area0, area1;
var templist0, templist1;

var areaid = 0,
    indexid = 0;

window.onload = function () {
    window.focus();
    pageInit();
};

function pageInit() {
    //创建焦点
    area0 = WkEpg.AreaCreator(1, 2, new Array(-1, -1, 1, -1), "area0_list_", "className:item item_focus", "className:item");

    pageobj = WkEpg.PageCreator(areaid, indexid, new Array(area0));

    //页面点击事件
    pageobj.pageOkEvent = function () {
        var areaid = pageobj.curareaid,
            indexid = pageobj.areas[pageobj.curareaid].curindex,
            back_url = "../pages/page3.html";
        switch (areaid) {
            case 0:
                parent.goUrl(areaid, indexid, "../pages/page3.html", back_url)
                break;
        }
    };

    // 返回
    pageobj.goBackEvent = function () {
        parent.goBack();
    };
}