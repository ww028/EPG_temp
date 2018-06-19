var area0, area1;
var templist0, templist1;

console.log(parent.cookie_obj)
console.log(parent.indexid)
var areaid = parent.areaid || 0,
    indexid = parent.indexid || 0;

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
        var areaId = pageobj.curareaid; //当前区域
        var indexId = pageobj.areas[pageobj.curareaid].curindex; //当前位置
        switch(areaId){
            case 0:
                parent.goUrl(areaId,indexId,"../pages/page3.html","../pages/page2.html")
                break;
        }
    };

    // 返回
    pageobj.goBackEvent = function () {
        parent.goBack();
    };
}