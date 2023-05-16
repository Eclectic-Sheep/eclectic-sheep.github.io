$(document).ready(function(){
    $(".feature-wrapper").on("mouseover", function(){
        if(!$(this).hasClass("active")){
            $(".feature-wrapper.active").removeClass("active");
            $(this).addClass("active");
            $("code").css("opacity", .4);
            $("code[data-index='" + $(this).attr("data-index") + "']").css("opacity", 1);
        }
    });
});