 /**
 * Created by Administrator on 2018/7/12.
 */

$(function(){

    var hrcpu = echarts.init(document.getElementById('hrcpu')),
        hrneicun = echarts.init(document.getElementById('hrneicun')),
        hrcunchu = echarts.init(document.getElementById('hrcunchu'));
    hrcpu.setOption(hroption({name:'CPU', value:40,color:'#1fc4ba'}), true);
    hrneicun.setOption(hroption({name:'内存', value:30,color:'#adde93'}), true);
    hrcunchu.setOption(hroption({name:'存储', value:60,color:'#1d79ff'}), true);
    //仪表盘
    function hroption(data) {
        return {

            series : [
                {
                    type:'gauge',
                    radius:'100%',

                    axisLine:{
                        lineStyle:{
                            width:3,
                            color:[[1, data.color]]
                        }
                    },
                    axisTick:{  //坐标轴小标记
                        show:true,
                        splitNumber:6,
                        length:10,
                        lineStyle:{
                            width:5,
                            type:'solid',
                            color:data.color
                        }
                    },
                    splitLine:{
                        show:true,
                        length:6,
                        lineStyle:{
                            width:10,
                            color:'#125634'
                        }
                    },
                    /*axisTick:{ //刻度样式
                        show:false
                    },*/
                    detail:{//显示详情
                        width:100,
                        height:30,
                        textStyle:{
                            color:data.color
                        }
                    },
                    axisLabel:{ //刻度数值
                        show:false,
                    },
                    pointer:{
                        show:true,
                        length:'50%',
                        width:5
                    },
                    splitNumber:1,
                    center:['50%','95%'],
                    title:{  // 显示文字
                        show:true,
                        offsetCenter:[0,'-55%'],
                        textStyle:{
                            color:data.color,
                            fontWeight:300,
                        }
                    },
                    legendHoverLink:true,
                    data:[{value: data.value, name:data.name}]
                },

            ]

        }
    }
//系统访问趋势
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
                    },

                }
            },
            grid:{
                top:30,
                bottom:40
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: data.wholemonth,
                    axisLine:{
                        lineStyle:{
                            color:'#4d6b97'
                        }
                    },
                }
            ],

            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}'
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#4d6b97'
                        }
                    },
                    splitNumber:2,
                    splitLine:{
                        lineStyle:{
                            color:'#4d6b97'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '访问量',
                    type: 'line',
                    data: data.monthdata,
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ],
                        itemStyle:{
                            normal:{
                                color:'#4d6b97',
                                lineStyle:{
                                    color:'#4d6b97'
                                }
                            }
                        }

                    },
                    symbol: 'none',
                    itemStyle:{
                        normal:{
                            color:'#9372e7'
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
        monthdata.push((Math.ceil(Math.random()*10))*i)
    }
    var fangwenecharts = echarts.init(document.getElementById('fangwenecharts'));
    var datafangwen = {wholemonth:wholemonth, monthdata:monthdata};
    fangwenecharts.setOption(fangwenOption(datafangwen))


    //物理攻击
    var wuliecharts = echarts.init(document.getElementById('wuliecharts'));
    function wuliOption(data) {
        return {
            tooltip : {
                trigger: 'axis',
                showDelay : 0,
                axisPointer:{
                    show: true,
                    type : 'cross',
                    lineStyle: {
                        type : 'dashed',
                        width : 1
                    }
                }
            },
            grid:{
                top:30,
                bottom:40
            },
            xAxis : [
                {
                    type : 'value',
                    scale:true,
                    data:data.wholemonth,
                    axisLabel : {
                        formatter: '{value}'
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#4d6b97'
                        }
                    },
                    splitLine:{
                        show:false
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    scale:true,

                    axisLine:{
                        lineStyle:{
                            color:'#4d6b97'
                        }
                    },
                    splitNumber:2,
                    splitLine:{
                        lineStyle:{
                            color:'#4d6b97',
                            type:'dashed'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'显示',
                    type:'scatter',
                    data: data.monthdata,
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    },
                    symbolSize:8,
                    itemStyle:{
                        normal:{
                            color:'#1d79ff'
                        }
                    },
                },

            ]
        };
    }
    wuliecharts.setOption(wuliOption(datafangwen))
    
    /*//系统访问量排行
    function sysList(data) {
        var appendcont='';
        console.log(data.length)
        for(var i =0;i< data.length;i++){
            if(data[i].state==='up'){
                appendcont=' <div>' +
                        '<div>'+data[i].name+'</div>' +
                        '<div>'+data[i].access+'</div>' +
                        '<div class="stateup"><i class="fa fa-arrow-up"></i>'+data[i].changenum+'</div>' +
                    '</div>';
            }else if(data[i].state==='down'){
                appendcont=' <div>' +
                        '<div>'+data[i].name+'</div>' +
                        '<div>'+data[i].access+'</div>' +
                        '<div class="statedown"><i class="fa fa-arrow-down"></i>'+data[i].changenum+'</div>' +
                    '</div>';
            }else{
                appendcont=' <div>' +
                    '<div>'+data[i].name+'</div>' +
                    '<div>'+data[i].access+'</div>' +
                    '<div>— &nbsp;'+data[i].changenum+'</div>' +
                    '</div>';
            }
            $(".hrlistbody").append(appendcont)
        }

    }
    var sysNameList=[
        {name:'市政府办公厅',access:7304696,state:'down',changenum:'7304'},
        {name:'市公安局',access:1304696,state:'down',changenum:'3046'},
        {name:'市文化局',access:12578,state:'down',changenum:'851'},
        {name:'市社保办',access:985123,state:'up',changenum:'951'},
        {name:'市旅游局',access:546558,state:'down',changenum:'123'},
        {name:'市质检局',access:546214,state:'up',changenum:'621'},
        {name:'市文物局',access:11258,state:'down',changenum:'258'},
        {name:'市财政局',access:5423,state:'down',changenum:'142'},
        {name:'市司法局',access:4125,state:'up',changenum:'134'},
        {name:'市社保办',access:985123,state:'down',changenum:'951'},
        {name:'市旅游局',access:546558,state:'down',changenum:'123'},
        {name:'市质检局',access:546214,state:'down',changenum:'621'},
        {name:'市文物局',access:11258,state:'down',changenum:'258'},
        {name:'市质检局',access:546214,state:'down',changenum:'621'},
        {name:'市文物局',access:11258,state:'down',changenum:'258'},
        {name:'市财政局',access:5423,state:'-',changenum:'142'},
        {name:'市司法局',access:4125,state:'up',changenum:'134'}
    ];
    sysList(sysNameList);*/
    
    
    
})
