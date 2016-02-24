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




});
