function openwin() {
    $('#w').window('open');
    var map_w;
    var graphicl_w;
    var layer_w;
    var stringarray_w = "3716211042200000456,3716211042200000452";
    var graphic_w;
    var dkstr_w;
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
        "esri/geometry/Point",
        "esri/SpatialReference",
        "esri/InfoTemplate",
        "dojo/domReady!"],
        function (Map, ArcGISDynamicMapServiceLayer, FeatureLayer, dom, on,
            QueryTask, Query,
            SimpleLineSymbol, SimpleFillSymbol, Graphic, Point, SpatialReference, InfoTemplate) {
            //根据div的id属性创建地图
             map_w = new Map("w");
            //定义一个动态地图服务
           //  layer_w = new ArcGISDynamicMapServiceLayer
           //      ("http://localhost:6080/arcgis/rest/services/MyMapService/MapServer");

             var layer_w = new FeatureLayer("http://localhost:6080/arcgis/rest/services/MyMapService/MapServer/0", {
                 outFields: ["*"],
                 id: "ylz",
                 opacity: 0.55
             });
            //将图层添加到地图
             map_w.addLayer(layer_w);
            //给属性查询按钮添加click事件

             map_w.on("load", function () {

                 $.ajax({
                     type: "post",
                     url: "../business/getLiuzhuanDKBM.ashx",
                     datatype: "json",
                     success: function (data) {
                         if (data != "" && data != null) {
                             dkstr_w = data;
                             //load(data);
                         } else {
                             alert("no");
                         }
                     }
                 });

                var a_W = stringarray_w.split(',');
                for (var i = 0; i < a_W.length; i++) {
                    var queryTask = new QueryTask
                        ("http://localhost:6080/arcgis/rest/services/MyMapService/MapServer/0");
                    //定义查询参数对象
                    var query = new Query();
                    //查询条件，类似于sql语句的where子句
                    query.where = "DKBM = '" + a_W[i] + "'";
                    //返回的字段信息：*代表返回全部字段
                    query.outFields = ["*"];
                    //是否返回几何形状
                    query.returnGeometry = true;
                    
                    //执行属性查询
                    queryTask.execute(query, showQueryResult);
                }
                

            });

            function showQueryResult(queryResult) {
                //创建线符号
                var lineSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH, new dojo.Color([0, 0, 0,0.1]), 3);
                //创建面符号
                var fill = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, lineSymbol, new dojo.Color([0, 255, 0, 0.5]));
                if (queryResult.features.length == 0) {
                    return;
                }
                if (queryResult.features.length >= 1) {
                    for (var i = 0; i < queryResult.features.length; i++) {

                         graphic_w = queryResult.features[i];

                        graphic_w.setSymbol(fill);
                        map_w.graphics.add(graphic_w);

                    }
                    const viewSpatialReference = new SpatialReference({
                        wkid: 32650 // winkel III
                    });
                    const point = new Point({
                        x: graphic_w.geometry.rings[0][0][0],
                        y: graphic_w.geometry.rings[0][0][1],
                        spatialReference: viewSpatialReference
                    });
                    map.centerAt(point,15);

                }
            }








            //地块编码
            var selectionstr_w;
            var str_w;

            function isInArray_w(arr, value) {
                for (var i = 0; i < arr.length; i++) {
                    if (value === arr[i]) {
                        return true;
                    }
                }
                return false;
            }
            var gra_w;
            var scr_w;
            var tit_w;
            var con_w;
            var infoTemplate_w = new InfoTemplate();
            //点击要素后台请求
            function selectfeature_w() {
                
                if (isInArray_w(dkstr_w.split(','), selectionstr_w) == true) {
                    
                    $.ajax({
                        type: "post",
                        url: "../business/getLiuzhuanData.ashx",
                        datatype: "json",
                        data: { DKBM: selectionstr_w },
                        success: function (data) {
                            if (data != "" && data != null) {
                                json = eval(data);
                                //alert(json[0].CBJYQZBM);
                                str_w = "DKLB:" + json[0].DKLB + "<br>" +
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
                                    "SRFBM:" + json[0].Reporter + "<br>";

                                // layer.setInfoTemplate(infoTemplate);
                                map_w.infoWindow.setContent(str_w);
                                map_w.infoWindow.setTitle("地块属性(已流转)：");
                                map_w.infoWindow.show(scr_w, map_w.getInfoWindowAnchor(scr_w));
                            } else {
                                alert("no");
                            }
                        }
                    });
                }
                else {
                    infoTemplate_w.setTitle("地块属性(未流转)：");
                    infoTemplate_w.setContent("地块编码：${DKBM}");
                    layer_w.setInfoTemplate(infoTemplate_w);
                  //  map_w.infoWindow.setContent(gra_w.getContent());
                 //   map_w.infoWindow.setTitle(gra_w.getTitle());
                  //  map_w.infoWindow.show(scr_w, map_w.getInfoWindowAnchor(scr_w));
                }
                selectionstr_w = "";
                str_w = "";



            }
            map_w.on("click", function (e) {
                gra_w = e.graphic;
                scr_w = e.screenPoint;
                var querya_w = new Query();
                querya_w.geometry = e.mapPoint;
                var deferred_w = layer_w.selectFeatures(querya_w, FeatureLayer.SELECTION_NEW, function (selection) {
                    if (selection.length > 0) {
                        selectionstr_w = selection[0].attributes.DKBM;
                        tit_w = selection[0];
                        //  console.log(layer);
                        selectfeature_w();
                        //   console.log(gra);
                        //  console.log(tit);
                    }
                });
            });








        });//requ


















}//openwin