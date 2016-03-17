/**
 * 使用方法：
 *
 *        在页面<div data-width="100" data-height="30" id="test" data-border="true">
 *                  <div value="123">123</div>
 *                  <div value="456">456</div>
 *                  <div value="789" checked="checked">789</div>
 *              </div>
 *         data-width为下拉框宽度（必填），data-height为下拉框高度（必填），checked为默认选中,data-border是否需要边框 默认为false
 *
 *         在js里$(选择器).jqSelect();初始化控件
 *
 *
 *         @author zhengchj
 *         @mail zhengchj@neusoft.com
 *
 *         update log     v1.0.0     2016.3.17      完成基本功能
 *
 *                        v1.1.0     2016.3.17      修改BUG
 *
 * 						  v1.2.0     2016.3.17      新增一个参数data-border来控制是否加入边框
 *
 *
 *					      v1.2.1     2016.3.17      修改IE7下点击空白页面后下拉框不收回的问题
 *
 *
 */



(function($){


    /**
     * 扩展Jquery原型链
     */
    $.fn.jqSelect=function(){
        $(this).each(function(){
            var target=$(this);
            target.addClass("jq-select-container");
            var selectItem=target.find("[checked='checked']").length!=0?target.find("[checked='checked']"):target.children().eq(0);
            var menuField=$("<span>"+selectItem.html()+"</span>").css({
                "line-height":target.attr("data-height")+"px"
            });
            target.attr("value",selectItem.attr("value"));
            var menu=$("<a></a>").append(menuField).addClass("jq-select-menu").append("<i></i>");
            if(target.attr("data-border")=="true"){
                menu.addClass("border");
            }
            var list=$("<ul></ul>");
            /**
             * 基于原始dom树构建下拉菜单项
             * @author zhengchj
             * @mail zhengchj@neusoft.com
             */
            target.children().each(function(){
                var me=$(this);
                var item=$("<li></li>");
                var itemContent=$("<a>"+me.html()+"</a>").attr("value",me.attr("value"));
                itemContent.click(function(){
                    itemContent.parent().siblings().find("a").removeClass("active");
                    itemContent.addClass("active");
                    menuField.html(itemContent.html());
                    target.attr("value",itemContent.attr("value"));
                })
                item.append(itemContent);
                list.append(item);
                list.find("li").eq(selectItem.index()).find("a").addClass("active");

            })
            target.width(target.attr("data-width")).height(target.attr("data-height"));
            target.empty();
            menu.append(list);
            target.append(menu);
            list.data("data-list-height",list.height());
            list.data("can-click",true);
            /**
             * 绑定事件
             * @author zhengchj
             * @mail zhengchj@neusoft.com
             */
            menu.bind({
                click:function(e){
                    if(!list.data("can-click")){
                        return;
                    }
                    menu.addClass("active");
                    if(list.css("display")=="none"){
                        list.data("can-click",false);
                        list.height(0).css("display","block");
                        list.animate({
                            height:list.data("data-list-height")
                        },function(){
                            list.data("can-click",true);
                        })
                    }else{
                        list.data("can-click",false);
                        list.animate({
                            height:0
                        },function(){
                            list.css("display","none");
                            list.data("can-click",true);
                        })
                    }
                    e.stopPropagation();
                }
            });
            $(window.document).bind({
                click:function(){
                    if(!list.data("can-click")){
                        return;
                    }
                    menu.removeClass("active");
                    if(list.css("display")=="block"){
                        list.data("can-click",false);
                        list.animate({
                            height:0
                        },function(){
                            list.css("display","none");
                            list.data("can-click",true);
                        })
                    }
                }
            })

        })
    }


})(jQuery);