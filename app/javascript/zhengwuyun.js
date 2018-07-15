$(function () {

// 总内存中的竖条
    var tiaozhuang = function () {
        for(var i=0;i<26;i++){
            $('.shutiao').append('<span class="tiaozhuang"></span>   ')
        }
        $('.shutiao1').find('span:lt(14)').css('borderColor','#1fc4ba');
        $('.shutiao2').find('span:lt(21)').css('borderColor','#1fc4ba');
        $('.shutiao3').find('span:lt(18)').css('borderColor','#1fc4ba');
    };
    tiaozhuang();


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