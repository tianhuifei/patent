$(function(){
    $("#statistic_table").find("td span i").bind({
        "click":function(){
            var $this=$(this);
            var $tr=$this.parent().parent().parent().parent();
            if($this.hasClass("un-extend")){
                $this.removeClass("un-extend");
                /*$tr.find(".td-extend>.item").show();
                $tr.find(".td-extend>.extend-content").hide();*/
                $tr.find(".td-extend>.extend-content").slideUp(function(){
                    $tr.find(".td-extend>.item").show();
                });
            }else{
                $this.addClass("un-extend");
                $tr.find(".td-extend>.item").hide();
                //$tr.find(".td-extend>.extend-content").show();
                $tr.find(".td-extend>.extend-content").slideDown();
            }
        }
    })




})