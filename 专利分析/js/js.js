/**
 * Created by admin on 2016/2/26.
 */
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

    $(".control").click(function(){
        change($(this));
    });



});

    /**
     *
     * @param target
     */
    function change (target){
        var parent = target.closest("tr");
        var circular = $(target).find(".circular");
        if( !parent.hasClass("active")){
            open(circular,33);
           // parent.addClass("active");
        }else{
            close(circular,1);
            //parent.removeClass("active");
        }
    }

    /**
     *启用
     * @param target
     */
    function open(circular,itarget){
        var parent = circular.closest("tr");
        clearInterval(timer);
        var timer = setInterval(function(){
            var speed = (itarget - circular.position().left)/5;
            if(Math.ceil(circular.position().left) == itarget){
                clearInterval(timer);
                parent.addClass("active");
                parent.find(".co-text").text("启用");
            }else{
                circular.css("left",circular.position().left + speed);
            }

        },30);

    }

    /**
     *停用
     * @param target
     */
    function close(circular,itarget){
        var parent = circular.closest("tr");
        clearInterval(timer);
        var timer = setInterval(function(){
            var speed = (itarget - circular.position().left)/5 ;
            if(Math.floor(circular.position().left) == itarget){
                clearInterval(timer);
                parent.removeClass("active");
                parent.find(".co-text").text("停用");
            }else{
                circular.css("left",circular.position().left + speed);
            }

        },30);
    }
