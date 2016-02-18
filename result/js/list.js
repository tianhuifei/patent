/**
 * Created by admin on 2016/2/18.
 */

$(document).ready(function(){

    $(".title-type").click(function(){
        var me = $(this);
        if(!me.hasClass("active")){
            me.addClass("active").siblings().removeClass("active");

        }else{
            me.removeClass("active");
        }
    });


});
