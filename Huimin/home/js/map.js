var dataDKBM;
stringarray = "3716211152150300187,3716211152150300109,3716211152020300181,3716211152020300180,3716211152010000036,3716211152010000007,3716211152010000005,3716211152010000004,3716211152010000003,3716211152010000013,3716211152010000012,3716211152010000020,3716211152010000026,3716211152010000237,3716211152010000236,3716211152010000241,3716211152010000242,3716211152010000243,3716211152010000244,3716211152010000635,3716211152010000633,3716211152020300558,3716211152020300117,3716211152020200118,3716211152020300119,3716211152020300120,3716211152020300121,3716211152020300122,3716211152020300123,3716211152020300124,3716211152020300125,3716211152020300126,3716211152020300127,3716211152020300128,3716211152020300129,3716211152020300130,3716211152020300131,3716211152020300132,3716211152020300133,3716211152020300134,3716211152020300135,3716211152020300136,3716211152020300137,3716211152020300138,3716211152020300100,3716211152020300101,3716211152020200102,3716211152020300001,3716211152020300002,3716211152020300003,3716211152020300004,3716211152020300005,3716211152020300006,3716211152020300007,3716211152020300008,3716211152020300009,3716211152020300010,3716211152020300011,3716211152020300012,3716211152020300013,3716211152020300014,3716211152020300015,3716211152020300016,3716211152020300017,3716211152020300018,3716211152020300019,3716211152020300020,3716211152020300021,3716211152020300022,3716211152020300023,3716211152020300024,3716211152020300139,3716211152020300140,3716211152020300141,3716211152020300142,3716211152020300143,3716211152020300144,3716211152020200145,3716211152020300146,3716211152020300147,3716211152020300148,3716211152020300149,3716211152020300150,3716211152020300151,3716211152020300152,3716211152020300153,3716211152020300154,3716211152020300155,3716211152020300156,3716211152020300185,3716211152020300184,3716211152020300183,3716211152020300182,3716211152020200025,3716211152020200026,3716211152020200027,3716211152020200028,3716211152020200029,3716211152020200030,3716211152020200031,3716211152020200032,3716211152020200033,3716211152020200034,3716211152020200035,3716211152020200036,3716211152020200037,3716211152020200038,3716211152020200039,3716211152020200040,3716211152020200041,3716211152020200042,3716211152020200095,3716211152020200096,3716211152020300097,3716211152020300098,3716211152020200099,3716211152020200094,3716211152020200093,3716211152020200092,3716211152020200091,3716211152020300090,3716211152020200089,3716211152020200088,3716211152020200087,3716211152020200086,3716211152020300085,3716211152020300084,3716211152020300083,3716211152020200082,3716211152020200081,3716211152020200080,3716211152020200107,3716211152020200105,3716211152020200103,3716211152020200106,3716211152020200104,3716211152020200108,3716211152020200109,3716211152020200110,3716211152020200111,3716211152020200112,3716211152020200207,3716211152020200211,3716211152020200210,3716211152020200209,3716211152020200208,3716211152020200206,3716211152020200205,3716211152020300204,3716211152020300203,3716211152020200202,3716211152020200201,3716211152020200200,3716211152020200199,3716211152020200198,3716211152020200197,3716211152020200196,3716211152020200195,3716211152020200194,3716211152020200186,3716211152020200187,3716211152020200188,3716211152020200189,3716211152020200190,3716211152020200191,3716211152020200192,3716211152020200193,3716211152020100064,3716211152020100063,3716211152020100062,3716211152020100061,3716211152020100060,3716211152020100059,3716211152020100058,3716211152020100057,3716211152020100056,3716211152020100055,3716211152020100054,3716211152020300053,3716211152020100052,3716211152020100051,3716211152020100050,3716211152020100049,3716211152020100048,3716211152020100047,3716211152020100046,3716211152020100045,3716211152020100044,3716211152020100043,3716211152020100072";
liuzhuanarray = stringarray.split(',');
var map;
var graphict;
var graphicl;
require(["esri/map",
    "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/layers/FeatureLayer",
    "dojo/dom",
    "dojo/on",
    "esri/tasks/QueryTask",
    "esri/tasks/query",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/graphic",
    "esri/dijit/PopupTemplate",
    "esri/InfoTemplate",
    "esri/geometry/Point",
    "esri/SpatialReference",
    "dojo/domReady!"],
    function (Map, ArcGISDynamicMapServiceLayer, FeatureLayer, dom, on,
        QueryTask, Query,
        SimpleLineSymbol, SimpleFillSymbol, Graphic, PopupTemplate, InfoTemplate, Point, SpatialReference) {
        const viewSpatialReference = new SpatialReference({
            wkid: 32650 // winkel III
        });
        const point = new Point({
            x: 568000,
            y: 4132000,
            spatialReference: viewSpatialReference
        });

         map = new Map("mapDiv", {
            logo: false,
            slider: false,
            center:point,
            //basemap: "hybrid",
            //center: [117.434626,37.427608],
            isZoomSlider: false,
            showAttribution: false,
            zoom: 16
        });
        var json;
        $('#tree_region').tree({
            onClick: function (node) {
                var xzbm = node.id;
                treeselect(xzbm);
              //  console.log(dkbm12);
            }
        });
        var dkbm12;
        function treeselect(data) {

                var queryTaskt = new QueryTask
                    ("http://localhost:6080/arcgis/rest/services/MyMapService/MapServer/0");
                var queryt = new Query();
                 
                queryt.where = "DKBM LIKE '%"+data+"%'";

                queryt.outFields = ["*"];
                queryt.returnGeometry = true;
                queryTaskt.execute(queryt, showQueryResultt);
          
            function showQueryResultt(queryResult) {
                var lineSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH, new dojo.Color([255, 0, 0, 0.1]), 3);
                var fill = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, lineSymbol, new dojo.Color([0, 255, 0]));
                if (queryResult.features.length == 0) {
                    alert("未查询到数据");
                    return;
                }
                if (queryResult.features.length >= 1) {
                    for (var i = 0; i < queryResult.features.length; i++) {

                         graphict = queryResult.features[i];
                        graphict.setSymbol(fill);
                        map.graphics.add(graphict);
                       
                    
                        
                        
                    }
                   // console.log(graphict.geometry.rings[0][0]);
                    const viewSpatialReference = new SpatialReference({
                        wkid: 32650 // winkel III
                    });
                    const point = new Point({
                        x: graphict.geometry.rings[0][0][0],
                        y: graphict.geometry.rings[0][0][1],
                        spatialReference: viewSpatialReference
                    });
                    map.centerAt(point);

                    function adf() {
                        map.graphics.clear();
                     
                            var liuzhuanDKBM = dkstr.split(',');
                            for (var i = 0; i < liuzhuanDKBM.length; i++) {
                                var queryTaska = new QueryTask
                                    ("http://localhost:6080/arcgis/rest/services/MyMapService/MapServer/0");
                                var querya = new Query();
                                querya.where = "DKBM = '" + liuzhuanDKBM[i] + "'";
                                querya.outFields = ["*"];
                                querya.returnGeometry = true;
                                queryTaska.execute(querya, showQueryResulta);
                            }
                            function showQueryResulta(queryResult) {
                                var lineSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH, new dojo.Color([0, 0, 0, 0.1]), 3);
                                var fill = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, lineSymbol, new dojo.Color([255, 0, 0, 0.5]));
                                if (queryResult.features.length == 0) {

                                    return;
                                }
                                var htmls = "";
                                if (queryResult.features.length >= 1) {
                                    htmls = htmls + "<table style=\"width: 100%\">";
                                    htmls = htmls + "<tr><td>名称</td></tr>";
                                    for (var i = 0; i < queryResult.features.length; i++) {
                                        graphicl = queryResult.features[i];
                                        graphicl.setSymbol(fill);
                                        map.graphics.add(graphicl);

                                    }

                                }
                            }




                    }


       setTimeout(adf, 1000);

                }
            }
        }

        var dkstr;
        var layer = new FeatureLayer("http://localhost:6080/arcgis/rest/services/MyMapService/MapServer/0", {
            outFields: ["*"],
            id: "ylz",
            opacity: 0.55
        });
        map.addLayer(layer);
        map.on("load", function () {
            $.ajax({
                type: "post",
                url: "../business/getLiuzhuanDKBM.ashx",
                datatype: "json",
                success: function (data) {
                    if (data != "" && data != null) {
                        dkstr = data;
                        load(data);
                    } else {
                        alert("no");
                    }
                }
            });

        });
        //地块编码
        var selectionstr;
        var str;

        function isInArray(arr, value) {
            for (var i = 0; i < arr.length; i++) {
                if (value === arr[i]) {
                    return true;
                }
            }
            return false;
        }
        var gra;
        var scr;
        var tit;
        var con;
        var infoTemplate = new InfoTemplate();
        var dkbm, dklb, dldj, tdyt, scmj;
        function dengji() {
            alert("123");
        }
        //点击要素后台请求
        function selectfeature() {
            if (isInArray(dkstr.split(','), dkbm) == true) {
               
                $.ajax({
                    type: "post",
                    url: "../business/getLiuzhuanData.ashx",
                    datatype: "json",
                    data: { DKBM: dkbm },
                    success: function (data) {
                        if (data != "" && data != null) {
                            json = eval(data);
                            //alert(json[0].CBJYQZBM);
                            str = "DKLB:" + json[0].DKLB + "<br>" +
                                "DLDJ:" + json[0].DLDJ + "<br>" +
                                "TDYT:" + json[0].TDYT + "<br>" +
                                "CBMJ:" + json[0].CBMJ + "<br>" +
                                "SCMJ:" + json[0].SCMJ + "<br>" +
                                "FBFBM:" + json[0].FBFBM + "<br>" +
                                "ZCFBM:" + json[0].ZCFBM + "<br>" +
                                "CBJYQZBM:" + json[0].CBJYQZBM + "<br>" +
                                "LZFS:" + json[0].LZFS + "<br>" +
                                "LZQXKSRQ:" + json[0].LZQXKSRQ + "<br>" +
                                "LZQXJSRQ:" + json[0].LZQXJSRQ + "<br>" +
                                "LZQX:" + json[0].LZQX + "<br>" +
                                "LZJG:" + json[0].LZJG + "<br>" +
                                "HTQDRQ:" + json[0].HTQDRQ + "<br>" +
                                "LZHTBM:" + json[0].LZHTBM + "<br>" +
                                "SRFBM:" + json[0].Reporter + "<br>" ;     
                                   console.log(str);
                                   // layer.setInfoTemplate(infoTemplate);
                                    map.infoWindow.setContent(str);
                                    map.infoWindow.setTitle("地块属性(已流转)：");
                                    map.infoWindow.show(scr, map.getInfoWindowAnchor(scr));
                        } else {
                            alert("no");
                        }
                    }
                }); 
            }
            else {
                infoTemplate.setTitle("地块属性(未流转)：");
                infoTemplate.setContent("地块编码：${DKBM}");
                layer.setInfoTemplate(infoTemplate);
                var conttem = gra.getContent() + "<div id=\"dengjiDiv\"><button id=\"dengji\" style=\"width: 70px;height: 30px; color: #0E2D5F; font - size:15px; font - weight:bold\">登记</button></div>";
                map.infoWindow.setContent(conttem);
                    map.infoWindow.setTitle(gra.getTitle());
                    map.infoWindow.show(scr, map.getInfoWindowAnchor(scr));
            }
            selectionstr = "";
            dklb_d = "";
            dldj_d = "";
            tdyt_d = "";
            scmj_d = "";
             str="";


           
        }
        map.on("click", function (e) {
            gra = e.graphic;
            scr = e.screenPoint;
            var querya = new Query();
            querya.geometry = e.mapPoint;
            var deferred = layer.selectFeatures(querya, FeatureLayer.SELECTION_NEW, function (selection) {
                if (selection.length > 0) {
                    dkbm = selection[0].attributes.DKBM;
                    dklb = selection[0].attributes.DKLB;
                    dldj = selection[0].attributes.DLDJ;
                    tdyt = selection[0].attributes.TDYT;
                    scmj = selection[0].attributes.SCMJ;
                      console.log(selection[0].attributes);
                    tit = selection[0];
                  //  console.log(layer);
                    selectfeature();
                 //   console.log(gra);
                  //  console.log(tit);
                }
            });
        });

        //点击登记，跳到登记页面
        $('body').on('click', "#dengji", function () {
            $("#guanli").hide();
            $("#mapDiv").hide();
            $("#tongji").hide();
            $("#fabu").hide();
            $("#dengji").show();
            $("#DKBM").textbox("setValue", dkbm);
            $("#DKLB").textbox("setValue", dklb);
            $("#DLDJ").textbox("setValue", dldj);
            $("#TDYT").textbox("setValue", tdyt);
            $("#SCMJ").textbox("setValue", scmj);
        });
     
        function load(data) {
            var liuzhuanDKBM = data.split(',');
            for (var i = 0; i < liuzhuanDKBM.length; i++) {
                var queryTaska = new QueryTask
                    ("http://localhost:6080/arcgis/rest/services/MyMapService/MapServer/0");
                var querya = new Query();
                querya.where = "DKBM = '" + liuzhuanDKBM[i] + "'";
                querya.outFields = ["*"];
                querya.returnGeometry = true;
                queryTaska.execute(querya, showQueryResulta);
            }
            function showQueryResulta(queryResult) {
                var lineSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH, new dojo.Color([0, 0, 0,0.1]), 3);
                var fill = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, lineSymbol, new dojo.Color([255, 0, 0, 0.5]));
                if (queryResult.features.length == 0) {
                   
                    return;
                }
                if (queryResult.features.length >= 1) {
                    for (var i = 0; i < queryResult.features.length; i++) {
                         graphicl = queryResult.features[i];
                        graphicl.setSymbol(fill);
                        map.graphics.add(graphicl);
                      
                    }

                }
            }
        }//load
    });

