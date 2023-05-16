$(document).ready(function () {
    previous_width = $("html").width();
    $("html").on("resize", function () {
        if ($("html").width() >= 900 && previous_width < 900) {
            $("code").css("opacity", .4);
            $("code[data-index='" + $(".feature-wrapper.active").attr("data-index") + "']").css("opacity", 1);
            previous_width = $("html").width();
            $(".code-wrapper").show()
        }
        if ($("html").width() < 900 && previous_width >= 900) {
            $(".code-wrapper").hide();
            $(".code-wrapper[data-index='" + $(".feature-wrapper.active").attr("data-index") + "']").show();
            previous_width = $("html").width();
        }
    });
    $(".feature-wrapper").on("mouseover", function () {
        if (!$(this).hasClass("active")) {
            $(".feature-wrapper.active").removeClass("active");
            $(this).addClass("active");
            if ($("html").width() >= 900) {
                $("code").css("opacity", .4);
                $("code[data-index='" + $(this).attr("data-index") + "']").css("opacity", 1);
            }
            else {
                $(".code-wrapper").hide();
                $(".code-wrapper[data-index='" + $(this).attr("data-index") + "']").show();
            }

        }
    });
});