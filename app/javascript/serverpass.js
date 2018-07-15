$(function () {
    /*chord和弦图*/
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                if (params.indicator2) {    // is edge
                    return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
                } else {    // is node
                    return params.name
                }
            }
        },

        legend: {
            orient:'vertical',
            x: 'right',
            y:'top',
            padding:15,
            data: ['默特萨克', '博阿滕', '施魏因施泰格', '格罗斯克罗伊茨', '多特蒙德'],
            textStyle:{
                color:'auto'
            },
        },
        //左下角显示值域范围
        /*dataRange:{
            min:0,
            max:100,
            backgroundColor:'rgba(51,101,110,97)',
            color:['#0ff','#ff2dfa','#4f3','#ff0'],
            textStyle:{
                color:"#ff1"
            }
        },*/
        series: [
            {
                name: '德国队效力联盟',
                type:'chord',
                sort : 'ascending',
                sortSub : 'descending',
                ribbonType: false,
                radius: '60%',
                center:['45%','55%'],
                itemStyle : {
                    normal : {
                        chordStyle:{
                          color:'#1ff',//线条颜色
                        },
                    }
                },
                minRadius: 7,
                maxRadius: 20,

                // 使用 nodes links 表达和弦图
                nodes: [
                        {   name:'默特萨克',
                            symbolSize:3,
                            itemStyle:{
                                normal:{//设置圆点背景颜色
                                    color:"#00c2b9",
                                    chordStyle:{
                                        width:1,
                                        color:'#00c2b9',

                                    },
                                    label:{
                                        textStyle:{
                                            color:'#00c2b9',
                                        }
                                    }
                                }
                            }
                        },
                        {   name:'厄齐尔',
                            itemStyle:{
                                normal:{
                                    color:"#00c2b9", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#00c2b9',
                                        borderWidth:1,
                                        borderColor:'#f1f'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#00c2b9',
                                        }
                                    }
                                }
                            }
                        },
                        {   name:'波多尔斯基',
                            itemStyle:{
                                normal:{
                                    color:"#00c2b9", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#00c2b9',
                                        borderWidth:1,
                                        borderColor:'#f1f'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#00c2b9',
                                        }
                                    }
                                }
                            }
                        },
                        {   name:'诺伊尔',
                            itemStyle:{
                                normal:{
                                    color:"#00c2b9", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#00c2b9',
                                        borderWidth:1,
                                        borderColor:'#f1f'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#00c2b9',
                                        }
                                    }
                                }
                            }
                        },
                        {   name:'博阿滕',
                            itemStyle:{
                                normal:{
                                    color:"#a875d8", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#a875d8',
                                        borderWidth:1,
                                        borderColor:'#a875d8'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#a875d8',
                                        }
                                    }
                                }
                            }
                        },
                        {   name:'施魏因施泰格',
                            itemStyle:{
                                normal:{
                                    color:"#a875d8", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#a875d8',
                                        borderWidth:1,
                                        borderColor:'#a875d8'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#a875d8',
                                        }
                                    }
                                }
                            }
                        },
                        {   name:'拉姆',
                            itemStyle:{
                                normal:{
                                    color:"#a875d8", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#a875d8',
                                        borderWidth:1,
                                        borderColor:'#a875d8'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#a875d8',
                                        }
                                    }
                                }
                            }
                        },
                        {   name:'克罗斯',
                            itemStyle:{
                                normal:{
                                    color:"#a875d8", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#a875d8',
                                        borderWidth:1,
                                        borderColor:'#a875d8'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#a875d8',
                                        }
                                    }
                                }
                            }
                        },
                        {   name:'穆勒',
                            symbol: 'star',
                            itemStyle:{
                                normal:{
                                    color:"#a875d8", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#a875d8',
                                        borderWidth:1,
                                        borderColor:'#a875d8'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#a875d8',
                                        }
                                    }
                                }
                            }
                        },
                        {   name:'格策',
                            itemStyle:{
                                normal:{
                                    color:"#a875d8", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#a875d8',
                                        borderWidth:1,
                                        borderColor:'#a875d8'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#a875d8',
                                        }
                                    }
                                }
                            }
                        },
                        {   name:'胡梅尔斯',
                            itemStyle:{
                                normal:{
                                    color:"#a875d8", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#a875d8',
                                        borderWidth:1,
                                        borderColor:'#a875d8'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#a875d8',
                                        }
                                    }
                                }
                            }
                        },
                        {   name:'魏登费勒',
                            itemStyle:{
                                normal:{
                                    color:"#a875d8", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#a875d8',
                                        borderWidth:1,
                                        borderColor:'#a875d8'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#a875d8',
                                        }
                                    }
                                }
                            }
                        },
                        {   name:'杜尔姆',
                            itemStyle:{
                                normal:{
                                    color:"#a4df96", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#a875d8',
                                        borderWidth:1,
                                        borderColor:'#a875d8'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#a4df96',
                                        }
                                    }
                                }
                            }
                        },
                        {name:'格罗斯克罗伊茨',
                            itemStyle:{
                                normal:{
                                    color:"#a4df96", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#a875d8',
                                        borderWidth:1,
                                        borderColor:'#a875d8'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#a4df96',
                                        }
                                    }
                                }
                            }
                        },
                        {   name:'阿森纳',
                            itemStyle:{
                                normal:{
                                    color:"#a4df96", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#a875d8',
                                        borderWidth:1,
                                        borderColor:'#a875d8'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#a4df96',
                                        }
                                    }
                                }
                            }
                        },
                        {   name:'拜仁慕尼黑', symbol: 'star',
                            itemStyle:{
                                normal:{
                                    color:"#a4df96", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#a875d8',
                                        borderWidth:1,
                                        borderColor:'#a875d8'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#a4df96',
                                        }
                                    }
                                }
                            }
                        },
                        {name:'多特蒙德',
                            itemStyle:{
                                normal:{
                                    color:"#a4df96", //设置圆点背景颜色
                                    chordStyle:{
                                        color:'#a875d8',
                                        borderWidth:1,
                                        borderColor:'#a875d8'
                                    },
                                    label:{
                                        textStyle:{
                                            color:'#a4df96',
                                        }
                                    }
                                }
                            }
                        }
                ],
                links: [
                    {source: '阿森纳', target: '厄齐尔', weight: 1, name: '效力'},
                    {source: '阿森纳', target: '默特萨克', weight: 1, name: '效力'},
                    {source: '阿森纳', target: '波多尔斯基', weight: 1, name: '效力'},
                    {source: '拜仁慕尼黑', target: '诺伊尔', weight: 1, name: '效力'},
                    {source: '拜仁慕尼黑', target: '博阿滕', weight: 1, name: '效力'},
                    {source: '拜仁慕尼黑', target: '施魏因施泰格', weight: 1, name: '效力'},
                    {source: '拜仁慕尼黑', target: '拉姆', weight: 1, name: '效力'},
                    {source: '拜仁慕尼黑', target: '克罗斯', weight: 1, name: '效力'},
                    {source: '拜仁慕尼黑', target: '穆勒', weight: 1, name: '效力'},
                    {source: '拉姆', target: '格策', weight: 1, name: '效力'},
                    {source: '拉姆', target: '克罗斯', weight: 1, name: '效力'},
                    {source: '拉姆', target: '穆勒', weight: 1, name: '效力'},
                    {source: '阿森纳', target: '格策', weight: 1, name: '效力'},
                    {source: '多特蒙德', target: '克罗斯', weight: 1, name: '效力'},
                    {source: '多特蒙德', target: '穆勒', weight: 1, name: '效力'},
                    {source: '多特蒙德', target: '格策', weight: 1, name: '效力'},
                    {source: '多特蒙德', target: '胡梅尔斯', weight: 1, name: '效力'},
                    {source: '多特蒙德', target: '魏登费勒', weight: 1, name: '效力'},
                    {source: '多特蒙德', target: '杜尔姆', weight: 1, name: '效力'},
                    {source: '多特蒙德', target: '格罗斯克罗伊茨', weight: 1, name: '效力'},

                ],

            }
        ]
    };
    var chordoption = echarts.init(document.getElementById('chord'));
    chordoption.setOption(option)



    /*30日访问趋势*/

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
                        color:'#9372e7'
                    }

                }
            },
            calculable: true,
            grid:{
                x:50,
                y:20,
                x2:50,
                y2:60
            },
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
                    lineStyle:{
                        color:"#4d6b97"
                    },
                    splitNumber:2,
                    splitLine:{
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
                            lineStyle:{color:'#9372e7'}
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
    var serverfangwenqushi = echarts.init(document.getElementById('serverfangwenqushi'));
    var datafangwen = {wholemonth:wholemonth, monthdata:monthdata};
    serverfangwenqushi.setOption(fangwenOption(datafangwen))


})