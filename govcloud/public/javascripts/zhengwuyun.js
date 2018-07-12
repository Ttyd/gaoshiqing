$(function () {

    var getdate = new Date();
    var year=getdate.getFullYear();
    var month=getdate.getMonth()+1;
    var today = getdate.getDate();
    var weekarr=['星期日', '星期一','星期二', '星期三','星期四', '星期五','星期六'];
    $('.data').text(year+'/'+month+'/'+today);
    $('.week').text(weekarr[getdate.getDay()]);

    showTime();
    function showTime() {
        var getdate = new Date();
        var date = getdate.toString()
        var time=date.substring(16,25)
        $('.time').text(time);
        setTimeout(function(){showTime()},1000);
    }

// 总内存中的竖条
    var tiaozhuang = function () {
        for(var i=0;i<30;i++){
            $('.shutiao').append('<span class="tiaozhuang"></span>   ')
        }
        $('.shutiao1').find('span:lt(14)').css('borderColor','#1fc4ba');
        $('.shutiao2').find('span:lt(26)').css('borderColor','#1fc4ba');
        $('.shutiao3').find('span:lt(22)').css('borderColor','#1fc4ba');
    };
    tiaozhuang();

// 底部折线图
    var jifangshidu = echarts.init(document.getElementById('jifangshidu')),
        jifangwendu = echarts.init(document.getElementById('jifangwendu')),
        jifangdianliu = echarts.init(document.getElementById('jifangdianliu')),
        gongjiweixie = echarts.init(document.getElementById('gongjiweixie')),
        xitongfangwenqushi = echarts.init(document.getElementById('xitongfangwenqushi'));
    function getoption(data) {
        return  {
            background:'#21488b',
            title:{
                text:data.perce+"    ",
                x:'right',
                padding:5,
                textStyle:{
                    color:data.color,
                    fontSize:'1.2rem',
                },
                /*text:data.listname,
                padding:5,
                textStyle:{
                    color:'#fff',
                    fontSize:'1.2rem',
                },*/
                /*x:'right',
                subtext:data.perce,
                subtextStyle:{
                    align:'right',
                    color:data.color
                }*/
            },
            legend:{
                show:true,
                data:[data.listname],
                x:'left',
                itemWidth:20,
                textStyle:{
                    color:'#fff'
                }
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
                    symbol:'none',
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

    //委办局资源排名
    function listbysource(data) {
        return (
            "<div class='right_list'>"+
                "<div class='progresstitle'>"+data.name+"</div>"+
                "<div class='progressshow'>"+
                    "<div class='progress'>"+
                        "<div class='progress-bar' role='progressbar' style='width:"+data.barwidth + "; ' aria-valuenow="+data.barval+" aria-valuemin='0'  aria-valuemax='100'></div>"+
                    "</div>"+
                "</div>"+
                "<div class='progressshowdata'>"+data.showdata+"</div>"+
            "</div>"
        )
    }
    var sourcelist=[
        {name:'市政府办公厅',barwidth:'80%', barval:80,showdata:'23365M'},
        {name:'市公安局',barwidth:'70%', barval:70,showdata:'5455M'},
        {name:'市环保局',barwidth:'72%', barval:72,showdata:'5043M'},
        {name:'市商委',barwidth:'70%', barval:70,showdata:'4555M'},
        {name:'市社保办',barwidth:'62%', barval:62,showdata:'4435M'},
        {name:'市教委',barwidth:'61%', barval:61,showdata:'4005M'},
        {name:'市知识产权局',barwidth:'55%', barval:55,showdata:'2665M'},
        {name:'市文化局',barwidth:'53%', barval:53,showdata:'2333M'},
        {name:'市交通局',barwidth:'52%', barval:52,showdata:'2125M'},
        {name:'市旅游局',barwidth:'50%', barval:50,showdata:'1345M'},
        {name:'市文物局',barwidth:'40%', barval:40,showdata:'1235M'},
        {name:'市质检局',barwidth:'30%', barval:30,showdata:'985M'},
        {name:'市文物局',barwidth:'28%', barval:28,showdata:'675M'},
        {name:'市民政局',barwidth:'20%', barval:20,showdata:'565M'},
        {name:'市科委',barwidth:'4%', barval:4,showdata:'65M'},
        {name:'市财政局',barwidth:'3%', barval:3,showdata:'55M'},
        {name:'市国资局',barwidth:'2%', barval:2,showdata:'47M'},
        {name:'市司法局',barwidth:'2%', barval:2,showdata:'35M'},
    ]
    function setlistdata(sourcelist) {
        for(var i in sourcelist){
            $(".listbysource").append(listbysource(sourcelist[i]));

        }
    }
    setlistdata(sourcelist)




    //中间地图
    mapoption = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name:'业务指标',
                type:'gauge',
                splitNumber: 10,       // 分割段数，默认为5
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']],
                        width: 8
                    }
                },
                axisTick: {            // 坐标轴小标记
                    splitNumber: 10,   // 每份split细分多少段
                    length :12,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    show: true,        // 默认显示，属性show控制显示与否
                    length :30,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer : {
                    width : 5
                },
                title : {
                    show : true,
                    offsetCenter: [0, '-40%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    }
                },
                detail : {
                    formatter:'{value}%',
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: 'auto',
                        fontWeight: 'bolder'
                    }
                },
                data:[{value: 50, name: '完成率'}]
            }
        ]
    };
    var mapshowcenter = echarts.init(document.getElementById('mapshow'));
    clearInterval(timeTicket);
    var timeTicket = setInterval(function (){
        mapoption.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
        mapshowcenter.setOption(mapoption,true);
    },2000)


})