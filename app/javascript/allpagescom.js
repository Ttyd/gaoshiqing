/**
 * Created by Administrator on 2018/7/12.
 */
$(function(){
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
        {name:'市旅游局',barwidth:'15%', barval:15,showdata:'345M'},
        {name:'市文物局',barwidth:'12%', barval:12,showdata:'235M'},
        {name:'市文物局',barwidth:'10%', barval:10,showdata:'175M'},
        {name:'市民政局',barwidth:'8%', barval:8,showdata:'65M'},
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
    setlistdata(sourcelist);

    //系统访问量排行
    function sysList(data) {
        var appendcont='';
        for(var i =0;i< data.length;i++){
            if(data[i].state==='up'){
                appendcont+=' <div class="statectrl">' +
                    '<div>'+data[i].name+'</div>' +
                    '<div>'+data[i].access+'</div>' +
                    '<div class="stateup"><i class="fa fa-arrow-up"></i>'+data[i].changenum+'</div>' +
                    '</div>';
            }else if(data[i].state==='down'){
                appendcont+=' <div class="statectrl">' +
                    '<div>'+data[i].name+'</div>' +
                    '<div>'+data[i].access+'</div>' +
                    '<div class="statedown"><i class="fa fa-arrow-down"></i>'+data[i].changenum+'</div>' +
                    '</div>';
            }else{
                appendcont+=' <div class="statectrl">' +
                    '<div>'+data[i].name+'</div>' +
                    '<div>'+data[i].access+'</div>' +
                    '<div>— &nbsp;'+data[i].changenum+'</div>' +
                    '</div>';
            }

        }
        return appendcont;

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
    $(".hrlistbody").append(sysList(sysNameList));
    $(".serverjieru").append(sysList(sysNameList));
    $(".servergeichu").append(sysList(sysNameList));




})