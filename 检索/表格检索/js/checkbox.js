$(function(){
    $(".container-checkbox .checkbox-all").click(function(){
        var me=$(this);
        if(me.hasClass("checked")){
            me.removeClass("checked");
            me.parent().parent().parent().find(".checkbox-normal").removeClass("checked");
        }else{
            me.addClass("checked");
            me.parent().parent().parent().find(".checkbox-normal").addClass("checked");
        }

    })
    $(".container-checkbox .checkbox-normal").click(function(){
        var me=$(this);
        if(me.hasClass("checked")){
            me.removeClass("checked");
        }else{
            me.addClass("checked");
        }
    })




})