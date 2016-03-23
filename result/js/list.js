/**
 * Created by admin on 2016/2/18.
 */

$(document).ready(function(){

    $(".title-type").find("h3").click(function(){
        var me = $(this);
        if(!me.hasClass("active")){
            me.addClass("active").parent().siblings().find("h3").removeClass("active");

        }else{
            me.removeClass("active");
        }
    });
    var lelist = $("#itemsList");
    var top = $("#itemsbox").offset().top;
    $(window).scroll(function(){


        var scrolltop =  $(this).scrollTop();
        if(scrolltop>top){
            lelist.css({
                position:"fixed",
                top:0
            });
        }else{
            lelist.css("position","static");
        }


    });

    /**
     * 新版右侧菜单事件绑定
     */
    $(".fixed-menu1").data("showing",false);
    $("a.btn-hover").hover(function(){
        if($(".fixed-menu1").data("showing"))
            return;
        $(".fixed-menu1").data("showing",true);
        var $strong=$(this).find("strong");
        $strong.animate({
            left:-($strong.width()-2)
        },function(){
            $(".fixed-menu1").data("showing",false);
        });

    },function(){
        var $strong=$(this).find("strong");
        $strong.animate({
            left:35
        });
    })
    $(".to-top-area").find(".btn-to-top").hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            $(".to-top-area").find(".btn-to-top").fadeIn();
        }else{
            $(".to-top-area").find(".btn-to-top").fadeOut();
        }
    })
    $(".to-top-area").find(".btn-to-top").click(function(){
        $("html,body").animate({
            scrollTop:0
        });
    })
    /*$(".fixed-menu1").find(".btn-hover").click(function(){
        alert(123)
    })*/


});
