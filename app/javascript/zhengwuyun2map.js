/**
 * Created by Administrator on 2018/7/15.
 */
$(function(){

    $('#mapshow2').append('<svg>'+
        '<defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">'+
        '<marker id="raphael-marker-endclassic-blue" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="#6d9bfa" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker>'+
        '<marker id="raphael-marker-endclassic-orange" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="#fb6530" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker>'+
        '</defs>'+
        '</svg>');

    var data = [
        {
            "fill": "#00193e",
            "rid":"110106000000",
            "name": "丰台区",
        },
        {
            "fill": "#002254",
            "rid":"110115000000",
            "name": "大兴区"

        },
        {
            "fill": "#00193e",
            "name": "密云区",
            "rid":"110228000000"
        },
        {
            "fill": "#002254",
            "name": "平谷区",
            "rid":"110117000000"
        },
        {
            "fill": "#002254",
            "name": "延庆区",
            "rid": "110229000000"
        },
        {
            "fill": "#00193e",
            "name": "怀柔区",
            "rid":"110116000000"
        },
        {
            "fill": "#002254",
            "name": "房山区",
            "rid":"110111000000"
        },
        {
            "fill": "#00193e",
            "name": "昌平区",
            "rid": "110114000000"
        },
        {
            "fill": "#002254",
            "name": "朝阳区",
            "rid": "110105000000"
        },
        {
            "fill": "#002254",
            "name": "海淀区",
            "rid": "110108000000"
        },
        {
            "fill": "#002254",
            "name": "石景山",
            "rid": "110107000000"
        },
        {
            "fill": "#000d20",
            "name": "通州区",
            "rid": "110112000000"
        },
        {
            "fill": "#001c45",
            "name": "门头沟区",
            "rid": "110109000000"
        },
        {
            "fill": "#001c45",
            "name": "顺义区",
            "rid": "110113000000"
        },
        {
            "fill": "#001c45",
            "name": "西城区",
            "rid":  "110102000000"
        },
        {
            "fill": "#001c45",
            "name": "东城区",
            "rid": "110101000000"
        }
    ]

    var pen = $('#mapshow2').colorMap(data,{
        "offsetX":-60,
        "offsetY":0,
        //"sample":[{"name":"10-20人","color":"#f0f"},{"name":"20-40人","color":"#ff0"},{"name":"40-60人","color":"#0ff"},{"name":"60-80人","color":"#f00"}],
        /*
         "popWin":function(t,data){
         return "<div><span>"+data.name+"</span><br/><span>"+data.rid+"</span></div>"
         },
         */
        "click":function(event,t,data){

        },
        "draw":function(){

        },
        "textStyle":{
            "fill":"#808fa6"
        },
        blockStyle: {
            "cursor":"pointer",
            "stroke-width":"1.1",
            "stroke":"#3a4d6a",
            "fill":"#3a4d6a"
        },
        "setText":function(t,data){
            if(data && data.name == "南邵镇"){
                return {
                    "x":0,
                    "y":-3,
                    "direction":"y"
                }
            }
        }
    });



    function addNode(rid,x,y,r,src){
        var block = pen.getBlock(rid);
        var blockCenter = {};
        var box = block.getBBox(false);

        blockCenter.x = box.x + (box.width / 2);
        blockCenter.y = box.y + (box.height / 2);

        var dot = pen.image(src || '../images/zhengwuyun/mappot.png',blockCenter.x + x , blockCenter.y + y,r,r);
        return dot;

    }
    // 画点

    //密云
    var miyundot1 = addNode("110228000000",10,6,8);
    var miyundot2 = addNode("110228000000",-30,17,8);
    //门头沟
    var mentougou = addNode("110228000000",-170,70,20);
    //延庆
    var yanqing = addNode("110229000000",-20,10,5);
    //昌平
    var changping = addNode("110114000000",-30,5,5);


    //怀柔
    var huaroudot1 = addNode("110116000000",5,0,8);
    var huaroudot2 = addNode("110116000000",0,17,8);
    var huaroudot3 =addNode("110116000000",-15,38,8);

    //大兴
    var daxingdot1 = addNode("110115000000",-20,0,8);
    var daxingdot2 =addNode("110115000000",-15,17,8);
    var daxingdot3 =addNode("110115000000",-10,-10,14,'../images/zhengwuyun/mappot1.png');


    //画线
    function drawLine(dot1,dot2,q,style){
        var start = dot1.getBBox(false);
        var end = dot2.getBBox(false);

        var startCenter = {};

        startCenter.x = start.x +  (start.width / 2);
        startCenter.y = start.y +  (start.height / 2);

        var endCenter = {};
        endCenter.x = end.x +  (end.width / 2);
        endCenter.y = end.y +  (end.height / 2);

        var path = "M " + startCenter.x + "," + startCenter.y + " " + q +" "+ endCenter.x + "," + endCenter.y;

        //d="M 10,234 C 0,234 150,341 344,341";


        var line = pen.path(path);
        line.attr(style);

        return line;
    }

    drawLine(huaroudot1,daxingdot1,"Q80,100",{"stroke":"#6d9bfa","stroke-width":1,"arrow-end": "classic-wide-long"}).node.attributes["marker-end"].value = "url(#raphael-marker-endclassic-blue)";
    drawLine(mentougou,daxingdot1,"Q40,200,",{"stroke":"#6d9bfa","stroke-width":3,"arrow-end": "classic-wide-long"}).node.attributes["marker-end"].value = "url(#raphael-marker-endclassic-blue)";
    drawLine(yanqing,daxingdot1,"Q75,160,",{"stroke":"#6d9bfa","stroke-width":2,"arrow-end": "classic-wide-long"}).node.attributes["marker-end"].value = "url(#raphael-marker-endclassic-blue)";
    drawLine(changping,daxingdot1,"C80,200 80,200,",{"stroke":"#6d9bfa","stroke-width":2,"arrow-end": "classic-wide-long"}).node.attributes["marker-end"].value = "url(#raphael-marker-endclassic-blue)";

    drawLine(miyundot1,daxingdot3,"C220,100 250,220",{"stroke":"#fb6530","stroke-width":5,"arrow-end": "classic-wide-long"}).node.attributes["marker-end"].value = "url(#raphael-marker-endclassic-orange)";
    drawLine(huaroudot2,daxingdot3,"C180,110 200,180",{"stroke":"#d56666","stroke-width":1,"arrow-end": "classic-wide-long"}).node.attributes["marker-end"].value = "url(#raphael-marker-endclassic-orange)";



})
