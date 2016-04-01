/**
 * Created by admin on 2016/2/26.
 */

var buttonGroup;

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

var whenOn=function(obj){
    obj.parent().parent().addClass("active");
}
var beforeOn=function(){
    buttonGroup.getAllActive().setUnActive(function(obj){
        obj.parent().parent().removeClass("active");
    })
}

var whenOff=function(obj){
    obj.parent().parent().removeClass("active");
}
var beforeOff=function(){
    alert("至少启用一个")
}
