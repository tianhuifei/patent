/**
 * Created by admin on 2016/2/26.
 */
var buttonGroup;
$(document).ready(function(){

    $("#btn_group").find(".btn").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })




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