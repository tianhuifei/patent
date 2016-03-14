(function($){
    $.fn.switchButton=function(options){
        var defaults={
            onName:"on",
            offName:"off",
            whenOn:function(btnObj){},
            whenOff:function(btnObj){},
            defaultState:"off"
        }
        $(this).each(function(){
            var me=$(this);
            var op={
                onName:me.attr("data-onName")||defaults.onName,
                offName:me.attr("data-offName")||defaults.offName,
                whenOn:me.attr("data-whenOn")||defaults.whenOn,
                whenOff:me.attr("data-whenOff")||defaults.whenOff,
                defaultState:me.attr("data-defaultState")||defaults.defaultState
            }
            var $onName=$("<span>"+op.onName+"</span>").addClass("span-on-name"),
                $offName=$("<span>"+op.offName+"</span>").addClass("span-off-name"),
                $button=$("<i></i>").addClass("switch-button").css("left",2);
            me.addClass("switch-button-bar");
            if(op.defaultState=="on"){
                me.addClass("active");
                $button.css("left",32);
            }

            me.append($onName).append($button).append($offName);
            me.bind({
                click:function(){
                    if(me.hasClass("active")){
                        $button.animate({
                            left:2
                        },function(){
                            me.removeClass("active");
                            op.whenOff(me);
                        })
                    }else{
                        $button.animate({
                            left:32
                        },function(){
                            me.addClass("active");
                            eval(op.whenOn+"(me)")
                            //op.whenOn(me);
                        })
                    }
                }
            })


        })



    }






})(jQuery);