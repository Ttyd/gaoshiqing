$(function () {
    //左侧折线图
    function fangwenOption(data) {
        return {
            tooltip : {
                trigger: 'axis',
                showDelay : 0,
                axisPointer:{
                    show: true,
                    type : 'cross',
                    lineStyle: {
                        type : 'dashed',
                        width : 1,
                        color:data.color
                    }
                }
            },
            calculable: true,
            padding:25,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: data.wholemonth,
                    axisLine:{
                        lineStyle:{
                            color:'#4d6b97',
                            type:'dashed'
                        }
                    },
                    axisLabel:{
                        textStyle:{
                            color:'#4d6b97'
                        }
                    },
                    splitLine:{
                        show:false,
                        lineStyle:{
                            color:'#4d6b97'
                        }
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    min:10,
                    lineStyle:{
                        color:"#4d6b97"
                    },
                    splitNumber:3,
                    splitLine:{
                        show:false,
                        lineStyle:{
                            color:'#4d6b97',
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#4d6b97',
                            type:'dashed'
                        }
                    },
                    axisLabel:{
                        formatter: '{value}',
                        margin:5,
                        textStyle:{
                            color:'#4d6b97'
                        }
                    },
                }
            ],
            series: [
                {
                    name: 'CPU使用',
                    type: 'line',
                    data: data.monthdata,
                    symbol: 'none',
                    itemStyle:{
                        normal:{
                            lineStyle:{color:data.color}
                        }
                    },
                }
            ]
        };
    }
    var wholemonth=[],
        monthdata=[];
    for(var i=1;i<31;i++){
        wholemonth.push(i);
        monthdata.push((Math.ceil(Math.random()*6))*i)
    }
    var usecpu = echarts.init(document.getElementById('usecpu')),
        useneicun = echarts.init(document.getElementById('useneicun')),
        usecunchu = echarts.init(document.getElementById('usecunchu'));
    var usecpudata = {wholemonth:wholemonth, monthdata:monthdata,color:'#6f9eff'},
        useneicundata = {wholemonth:wholemonth, monthdata:monthdata,color:'#d56666'},
        usecunchudata = {wholemonth:wholemonth, monthdata:monthdata,color:'#1fc3ba'};
    usecpu.setOption(fangwenOption(usecpudata));
    useneicun.setOption(fangwenOption(useneicundata));
    usecunchu.setOption(fangwenOption(usecunchudata));

//中间折线图
    var twodayoption = {
        calculable : true,
        /*title:{
            x:'right',
            y:'top',
            text:'访问量对比',
            textStyle:{
                color:'#fff',
                fontSize:'11',
                padding:20
            }
        },*/
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            orient:'vertical',
            x:'right',
            padding:[10,30,10,10],
            data:['今日访问量','昨日访问量'],
            textStyle:{
                color:'#ffffff',

            }
        },
        grid:{
            top:50,
            bottom:40
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                axisLine:{
                    lineStyle:{
                        color:'#4d6b97'
                    }
                },
                axisLabel:{
                    textStyle:{
                        color:'#4d6b97'
                    }
                },
                splitLine:{
                    show:false,
                    lineStyle:{
                        color:'#4d6b97'
                    }
                },
            }
        ],
        yAxis : [
            {
                lineStyle:{
                    color:"#4d6b97"
                },
                splitNumber:2,
                splitLine:{
                    show:false,
                    lineStyle:{
                        color:'#4d6b97'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#4d6b97'
                    }
                },
                axisLabel:{
                    formatter: '{value}',
                    textStyle:{
                        color:'#4d6b97'
                    }
                },
            }
        ],
        series : [
            {
                name:'今日访问量',
                type:'line',
                data:[601, 911, 815, 803, 1802, 1603, 1340, 1202, 903, 1040],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'}
                    ],
                   /* itemStyle:{
                        normal:{
                            color:'#9372e7', //改变标注颜色
                            borderColor:'#9372e7'
                        }
                    },*/
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ],
                    itemStyle:{
                        normal:{
                            lineStyle:{color:'#9372e7'}
                        }
                    },

                },
                itemStyle:{
                    normal:{
                        lineStyle:{color:'#9372e7'}
                    }
                },
            },
            {
                name:'昨日访问量',
                type:'line',
                data:[300, 340, 402, 903, 1001, 911, 815, 1003, 1302, 940],
                symbol:'none',
                itemStyle:{
                    normal:{
                        lineStyle:{color:'#6f9eff'}
                    }
                },
            }
        ]
    };
    var twodayecharts = echarts.init(document.getElementById('twodayecharts'))
    twodayecharts.setOption(twodayoption);


    //中间访问系统图
    var placeHolderStyle = {
        normal : {
            color: 'rgba(0,0,0,0)',
            label: {show:false},
            labelLine: {show:false}
        },
        emphasis : {
            color: 'rgba(0,0,0,0)'
        }
    };
    var phoneoption = {
        tooltip : {
            show: true,
            formatter: "{a} {b} : {c} ",
            padding:1
        },
        grid:{
            top:30,
            left:0
        },
        legend: {
            orient : 'vertical',
            x:110,
            y:80,
            itemGap:4,
            padding:0,
            data:['IOS','Android','其他'],
            textStyle:{
                color:"#fff",
                fontSize:10
            }
        },
        series : [
            {
                name:' ',
                type:'pie',
                clockWise:false,
                radius : [50, 70],
                itemStyle : {
                    normal: {
                        color:"#1d79ff",
                        label: {show:false},
                        labelLine: {show:false},
                    }
                },
                data:[
                    {
                        value:60,
                        name:'IOS'
                    },
                    {
                        value:40,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:' ',
                type:'pie',
                clockWise:false,
                radius : [30, 50],
                itemStyle : {
                    normal: {
                        color:"#1fc4ba",
                        label: {show:false},
                        labelLine: {show:false},
                    }
                },
                data:[
                    {
                        value:30,
                        name:'Android',
                    },
                    {
                        value:60,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:' ',
                type:'pie',
                clockWise:false,
                radius : [10, 30],
                itemStyle : {
                    normal: {
                        color:"#a37bdc",
                        label: {show:false},
                        labelLine: {show:false},
                    }
                },
                data:[
                    {
                        value:10,
                        name:'其他'
                    },
                    {
                        value:90,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            }
        ]
    };
    var markphone = echarts.init(document.getElementById('markphone'))
    markphone.setOption(phoneoption);

    /*中间雷达图*/
    var broweroption = {
       /* grid:{
            top:30,
            left:50
        },*/
        calculable : true,
        polar : [
            {
                indicator : [
                    {text : 'IE7-', max  : 100},
                    {text : 'IE8', max  : 100},
                    {text : 'IE9+', max  : 100},
                    {text : 'Chrome', max  : 100},
                    {text : 'Firefox', max  : 100},
                    {text : 'Safari', max  : 100}
                ],
                radius : 50,
                splitArea:{
                    show:false,
                    areaStyle : {
                        color: ["#ff1"]  // 图表背景网格的颜色
                    }
                }
            }
        ],
        series : [
            {
                name: '浏览器',
                type: 'radar',
                itemStyle: {
                    normal: {
                        color:'#1d79ff',
                        areaStyle: {
                            type: 'default',
                        }
                    }
                },
                center:['55%','50%'],
                symbol:'none',
                data : [
                    {
                        value : [60, 60, 93, 94,93, 60],
                        name : '比例'
                    }
                ]
            }
        ]
    };
    var markbrower = echarts.init(document.getElementById('markbrower'))
    markbrower.setOption(broweroption);

    //中间饼图
    var sysoption = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : ({c}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            padding:1,
            itemHeight:10,
            itemGap:0,
            textStyle:{
                fontSize:8,
                color:'#fff',
            },
            data:['Windows','MacOS','Linux','Unix','其他']
        },
        calculable : true,
        series : [
            {
                name: '系统',
                type: 'pie',
                radius: ['40%', '75%'],
               /* itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold'
                            }
                        }
                    }
                },*/
                label:{
                    normal:{
                        position:'inner',
                        formatter:'{c}%'
                    }
                },
                labelLine:{
                  normal:false
                },
                data: [
                    {value: 30, name: 'Windows'},
                    {value: 25, name: 'Linux'},
                    {value: 20, name: 'MacOS'},
                    {value: 15, name: 'Unix'},
                    {value: 5, name: '其他'}
                ]






            }
        ]
    };
    var marksys = echarts.init(document.getElementById('marksys'))
    marksys.setOption(sysoption);

// 底部折线图
    function getoption(data) {
        return  {
            background:'#21488b',
            title:{
                text:data.perce+"    ",
                x:'right',
                padding:5,
                textStyle:{
                    color:data.color,
                    fontSize:'1.2rem'
                },
            },
            xAxis : [
                {
                    show:false,
                    type : 'category',
                    boundaryGap : false,
                    data : ['一','二','三','四','五','六','七','八','九','十']
                }
            ],
            yAxis : [
                {
                    show:false,
                    type : 'value',
                    name:data.listname

                }
            ],
            series : [
                {
                    type:'line',
                    smooth:false,
                    symbol:'none',//不显示圆点
                    itemStyle: {
                        normal: {
                            lineStyle:{color:data.color},
                            areaStyle: {type: 'default',backgroundColor:data.bgcolor,color:data.bgcolor}
                        }
                    },
                    data:data.data
                }
            ]
        };
    }
    var jifangshidu = echarts.init(document.getElementById('jifangshidu')),
        jifangwendu = echarts.init(document.getElementById('jifangwendu')),
        jifangdianliu = echarts.init(document.getElementById('jifangdianliu')),
        gongjiweixie = echarts.init(document.getElementById('gongjiweixie')),
        xitongfangwenqushi = echarts.init(document.getElementById('xitongfangwenqushi'));
    var shidudata={data:[2,30,25,35,20,15,35,50,30,8],listname:'机房湿度',perce:'50%',color:"#6d9bfb",bgcolor:'#6d9bfb'},
        wendudata={data:[22,20,25,35,20,25,15,20,15,10],listname:'机房湿度',perce:'22℃',color:"#57ffff",bgcolor:'#1a6b97'},
        dianliudata={data:[5,10,15,10,15,15,13,2,15,18],listname:'机房湿度',perce:'20A',color:"#a37bdc",bgcolor:'#31438c'},
        gongjidata={data:[22,20,15,25,20,15,18,10,8,7],listname:'机房湿度',perce:'61.7%',color:"#47d98d",bgcolor:'#156075'},
        xitongfangwen={data:[2,7,2,5,10,5,6,10,5,2],listname:'机房湿度',perce:'1000',color:"#2e4c78",bgcolor:'#999999'};

    jifangshidu.setOption(getoption(shidudata));
    jifangwendu.setOption(getoption(wendudata));
    jifangdianliu.setOption(getoption(dianliudata));
    gongjiweixie.setOption(getoption(gongjidata));
    xitongfangwenqushi.setOption(getoption(xitongfangwen));



})