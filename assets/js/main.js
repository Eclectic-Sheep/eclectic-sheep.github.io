$(document).ready(function () {
    $(".code-wrapper[data-index=0]").addClass("active");
    $(".feature-wrapper").on("mouseover", function () {
        if (!$(this).hasClass("active")) {
            $(".feature-wrapper.active, code.active, .code-wrapper.active").removeClass("active");
            $(this).addClass("active");
            $("code[data-index='" + $(this).attr("data-index") + "']").addClass("active")
            $(".code-wrapper[data-index='" + $(this).attr("data-index") + "']").addClass("active")
        }
    });
});