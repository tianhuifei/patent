$(function(){
    $(".container-checkbox .checkbox-normal").click(function(){
        var me=$(this);
        if(me.hasClass("checked")){
            me.removeClass("checked");
        }else{
            me.addClass("checked");
        }
    })




})