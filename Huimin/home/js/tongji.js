
$.ajax({
    type: "post",
    url: "../business/getAreaByCjbm.ashx",
    data: { CJQYBM: "37162110422000" },
    datatype: "json",
    success: function (data) {
        var data = eval(data);
        var chartpie = {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            credits: {
                enabled: false //不显示LOGO
            },
        };
        var titlepie = {
            text: '流转面积占比'
        };
        var tooltippie = {
            pointFormat: '{series.name}:{point.percentage:.1f} 面积：{point.y}'
        };
        var plotOptionspie = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        };
        var seriespie = [{
            type: 'pie',
            name: '%',
            colors: ['#5DADDD', '#f7a35c'],
            data: [['已流转面积', data[0].value],
            ['全部面积', data[1].value]],
        }];
        var jsonpie = {};
        jsonpie.chart = chartpie;
        jsonpie.title = titlepie;
        jsonpie.tooltip = tooltippie;
        jsonpie.series = seriespie;
        jsonpie.plotOptions = plotOptionspie;
        $('#pieArea').highcharts(jsonpie);
    }
});
$.ajax({
    type: "post",
    url: "../business/getScaleByCjbm.ashx",
    data: { CJQYBM: "37162110422000" },
    datatype: "json",
    success: function (data) {
        var data = eval(data);
        var chartpie = {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            credits: {
                enabled: false //不显示LOGO
            },
        };
        var titlepie = {
            text: '流转户数占比'
        };
        var tooltippie = {
            pointFormat: '{series.name}:{point.percentage:.1f} 户数：{point.y}'
        };
        var plotOptionspie = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        };
        var seriespie = [{
            type: 'pie',
            name: '%',
            colors: ['#5DADDD', '#f7a35c'],
            data: [['已流转户数', data[0].value],
            ['未流转户数', data[1].value]],
        }];
        var jsonpie = {};
        jsonpie.chart = chartpie;
        jsonpie.title = titlepie;
        jsonpie.tooltip = tooltippie;
        jsonpie.series = seriespie;
        jsonpie.plotOptions = plotOptionspie;
        $('#piePerson').highcharts(jsonpie);
    }
});