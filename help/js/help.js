/**
 * Created by admin on 2016/1/25.
 */
$(document).ready(function(){
    $("#helpmenu").find("li").click(function(){

       setTimeout(changetap($(this)),500);

    });
});

/* «–ªªtap“≥ */
function changetap (me){

    if(!me.hasClass("active")){
        me.addClass("active").siblings().removeClass("active");
        $(".menu-content").find("div.content").eq(me.index()).addClass("show").siblings().removeClass("show");
    }
}
