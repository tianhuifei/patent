var scroll=(function($){

    var working=false;   //是否点击滚动条标识位
    var startPointY;     //点击滚动条时的鼠标y轴值
    var scrollTop;       //点击滚动条时的滚动条TOP属性值
    var lengthToScroll;  //滚动条滚动时左侧文献列表需要滚动的垂直距离
    var MOUSE_WHEEL_INTERVAL_PIXEL=10; //每滚动一次滚动条扫过的像素

    function init(){
        if($("#patent_list").innerHeight()<=$(".patent-list-container").innerHeight()){
            $(".scroll").hide();
            return;
        }
        _initScrollHeight();
        _bindEvent();
    }


    //初始化滚动条高度
    function _initScrollHeight(){
        $(".scroll").height($(".scroll-bar").innerHeight()*$(".patent-list-container").innerHeight()/$("#patent_list").innerHeight());
    }

    //绑定时间
    function _bindEvent(){
        $(".scroll").bind({
            mousedown:function(e){
                working=true;
                startPointY= e.pageY;
                scrollTop=parseInt($(this).css("top"));
            }
        })

        $("body").bind({
            mousemove:function(e){
                if(!working)
                    return;
                _calculate(e.pageY-startPointY+scrollTop);
            },
            mouseup:function(){
                working=false;
            }
        })


        $(".patent-list-container").bind("mousewheel DOMMouseScroll",function(e){

            var delta= e.originalEvent.wheelDelta||-e.originalEvent.detail;
            var temp=delta>0?-MOUSE_WHEEL_INTERVAL_PIXEL:MOUSE_WHEEL_INTERVAL_PIXEL;
            _calculate(temp+parseInt($(".scroll").css("top")));
            return false;
        })
    }

    //计算文献列表需要滚动的距离
    function _calculate(top){
        if(top<0)
            top=0;
        else if(top+$(".scroll").outerHeight()>$(".scroll-bar").innerHeight())
            top=$(".scroll-bar").innerHeight()-$(".scroll").outerHeight();
        $(".scroll").css({
            top:top
        })
        lengthToScroll=top*$("#patent_list").innerHeight()/$(".scroll-bar").innerHeight();
        $("#patent_list").css("top",-lengthToScroll);
    }


    return{
        init:init
    }


})(jQuery);

$(function(){
    scroll.init();
})