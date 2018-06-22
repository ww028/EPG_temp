var area0, area1, area2, area3;
var templist0, templist1, templist2, templist3;

var list1 = [{
    text: "区域一 栏目一"
}, {
    text: "区域一 栏目二"
}, {
    text: "区域一 栏目三"
}, {
    text: "区域一 栏目四"
}, {
    text: "区域一 栏目五"
}, {
    text: "区域一 栏目6"
}, {
    text: "区域一 栏目7"
}, {
    text: "区域一 栏目8"
}, {
    text: "区域一 栏目9"
}]

var list2 = [{
    text: "欢迎欢迎，热烈欢迎"
}]

// console.log(parent.foc_obj);
var areaid = parent.areaid || 0,
    indexid = parent.indexid || 0;

window.onload = function () {
    window.focus();
    pageInit();
    bindList1(getDataValue(area1.curpage, list1, 4));
    bindList2(getDataValue(area2.curpage, list2, 1));
    // marqueearea1dom();
    marqueearea2dom();
};

function pageInit() {
    //创建焦点
    area0 = WkEpg.AreaCreator(1, 2, new Array(-1, -1, 1, -1), "area0_list_", "className:item item_focus", "className:item");
    area1 = WkEpg.AreaCreator(1, 4, new Array(0, -1, -1, -1), "area1_list_", "className:item item_focus", "className:item");
    area2 = WkEpg.AreaCreator(1, 2, new Array(-1, -1, -1, -1), "area2_list_", "className:item item_focus", "className:item");
    area3 = WkEpg.AreaCreator(1, 3, new Array(-1, -1, -1, -1), "area3_list_", "className:item item_focus", "className:item");

    pageobj = WkEpg.PageCreator(areaid, indexid, new Array(area0, area1, area2, area3));

    //判断页面的页码
    if (parent.page.index_page) {
        area1.curpage = parent.page.index_page;
    } else {
        area1.curpage = 1;
    }
    area1.setbroadwiseCrossturnpage(true);//设置横向自动翻页
    area1.pagecount = Math.ceil(list1.length/4);
    area1.areaPageTurnEvent = function(num){
        bindList1(getDataValue(area1.curpage, list1, 4));
    };//设置本区域的翻页事件 通常是绑定数据

    //页面点击事件
    pageobj.pageOkEvent = function () {
        var areaid = pageobj.curareaid,
            indexid = pageobj.areas[pageobj.curareaid].curindex,
            back_url = "index.html";
        switch (areaid) {
            case 0:
                parent.goUrl(areaid, indexid, "../pages/page2.html", back_url)
                break;

            case 1:
                parent.goUrl(areaid, indexid, "../pages/page2.html", back_url, area1.curpage)
                break;
        }
    };
}//pageInit

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

function bindList1(datavalue){
    templist1=datavalue;
    area1.datanum=datavalue.length;
    for (var i = 0; i< 4; i++) {
         if(i<datavalue.length){
            WkEpg.$("area1_list_"+i).style.visibility ="visible";
            WkEpg.$("area1_txt_"+i).innerHTML=datavalue[i].text;
            area1.doms[i].contentdom = datavalue[i].text;
            if(WkEpg.getByteLength(area1.doms[i].contentdom)>14){
              document.getElementById("area1_txt_"+i).innerHTML=WkEpg.getCutedString(area1.doms[i].contentdom, 14,true);
            }
         }else{
             WkEpg.$("area1_list_"+i).style.visibility ="hidden";
         }
    }
}

function bindList2(datavalue) {
    templist2 = datavalue;
    area2.datanum = datavalue.length;
    for (var i = 0; i < datavalue.length; i++) {
        if (i < datavalue.length) {
            WkEpg.$("area2_list_" + i).style.visibility = "visible";
            WkEpg.$("area2_txt_" + i).innerHTML = datavalue[i].text;
            area2.doms[i].contentdom = datavalue[i].text;
            if (WkEpg.getByteLength(area2.doms[i].contentdom) > 10) {
                document.getElementById("area2_txt_" + i).innerHTML = WkEpg.getCutedString(area2.doms[i].contentdom, 10, true);
            }
        } else {
            WkEpg.$("area2_list_" + i).style.visibility = "hidden";
        }
    }
}


// 文本滚动动画
function marqueearea1dom() {
    area1.changefocusAfterEvent = function () {
        if (WkEpg.getByteLength(area1.doms[area1.curindex].contentdom) > 10)
            document.getElementById("area1_txt_" + area1.curindex).innerHTML = "<marquee direction='left' scrolldelay='0'>" + area1.doms[area1.curindex].contentdom + "</marquee>";
    };
    area1.changeunfocusBeforeEvent = function () {
        if (WkEpg.getByteLength(area1.doms[area1.curindex].contentdom) > 10)
            document.getElementById("area1_txt_" + area1.curindex).innerHTML = WkEpg.getCutedString(area1.doms[area1.curindex].contentdom, 10, true);
    };
}

function marqueearea2dom() {
    // area2.changefocusAfterEvent = function () {
    // if (WkEpg.getByteLength(area2.doms[area2.curindex].contentdom) > 6)
    document.getElementById("area2_txt_" + area2.curindex).innerHTML = "<marquee direction='left' scrolldelay='0'>" + area2.doms[area2.curindex].contentdom + "</marquee>";
    // };
    // area2.changeunfocusBeforeEvent = function () {
    //     if (WkEpg.getByteLength(area0.doms[area0.curindex].contentdom) > 12)
    //         document.getElementById("area0_txt_" + area0.curindex).innerHTML = WkEpg.getCutedString(area0.doms[area0.curindex].contentdom, 12, true);
    // };
}