$(document).ready(function(){
    $("#items").find(".item").find("a").click(function(){
        var me = $(this).closest(".item");
        if(!me.hasClass("active")){
            me.addClass("active").siblings().removeClass("active");
        }
    });

    $("#items").find("ul").find("a").click(function(){
        var me = $(this).parent();
        if(!me.hasClass("active")){
            me.addClass("active").siblings().removeClass("active");
        }
    });





});