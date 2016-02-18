/**
 * Created by admin on 2016/2/1.
 */
$(document).ready(function(){
    $("#countrymenu").find("a").click(function(){
        var me = $(this).parent();
        if( !me.hasClass("active")){
            me.addClass("active").siblings().removeClass("active");
            $(".country-item").eq(me.index()).addClass("active").siblings().removeClass("active");
        }
    });

    $("#countrynav").find("li").click(function(){
        var me = $(this);
        if(!me.hasClass("active")){
            me.addClass("active").siblings().removeClass("active");
            $(".country-content > div").eq(me.index()).css("display","block").siblings().css("display","none");
        }
    });


});
