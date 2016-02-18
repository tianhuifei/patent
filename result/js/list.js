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


});
