var slide=(function(){

    var CAN_SHOW_LENGTH=4;  //每屏显示个数
    var listLength;         //检索历史集合长度
    var firstPos=0;         //当前屏幕第一个索引位置
    var leftLimitPos;       //可滑动最大索引位置

    //初始化检索历史集合宽度
    function _initWidth(){
        listLength=$("#historyList li").length;
        leftLimitPos=listLength-CAN_SHOW_LENGTH;
        if(leftLimitPos>0){
            $("#leftArrow").addClass("active");
        }
        $("#historyList").css({
            "width":$("#historyList li").outerWidth()*listLength//计算检索历史集合宽度
        })
    }
    function _init(){
        _initWidth();
        _initEvent();
    }

    //绑定左右箭头事件
    function _initEvent(){
        $("#leftArrow").click(function(){
            if(!$(this).hasClass("active")){
                return;
            }
            firstPos=firstPos+1;
            if(firstPos==leftLimitPos){
                $(this).removeClass("active");
            }
            if(firstPos==1){
                $("#rightArrow").addClass("active");
            }
            _slide();
        })
        $("#rightArrow").click(function(){
            if(!$(this).hasClass("active")){
                return;
            }
            firstPos=firstPos-1;
            if(firstPos==0){
                $(this).removeClass("active");
            }
            if(firstPos==leftLimitPos-1){
                $("#leftArrow").addClass("active");
            }
            _slide();
        })
    }

    //滑动效果
    function _slide(){
        $("#historyList").animate({
            left: -$("#historyList li").eq(firstPos).position().left
        })
    }

    return{
        init:_init
    }



})();




$(function(){
    slide.init();
})