/**
 * Created by admin on 2016/1/28.
 */
$(document).ready(function(){
    $("#statistics").find("li").click(function(){
        var me = $(this);
        if(!me.hasClass("active")){
            me.addClass("active").siblings().removeClass("active");
            $(".s-content").eq(me.index()).show().siblings().hide();
        }
    });
});
