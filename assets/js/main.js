$(document).ready(function () {
    var ctrlDown = false,
        ctrlKey = 17,
        cmdKey = 91,
        vKey = 86,
        cKey = 67;

    $(".index-sec .code-wrapper[data-index=0]").addClass("active");
    $(".capture-video .code-wrapper[data-index=4]").addClass("active");
    $(".floating-header").css("left", $(".subscribe-button").position().left - $(".floating-header").width() + parseInt($(".site-header.outer").css("padding-left")) - 10);

    $(window).on("resize", function () {
        $(".floating-header").css("left", $(".subscribe-button").position().left - $(".floating-header").width() + parseInt($(".site-header.outer").css("padding-left")) - 10);
    })

    $(".index-sec .feature-wrapper").on("mouseover", function () {
        if (!$(this).hasClass("active")) {
            $(".index-sec .feature-wrapper.active, .index-sec code.active, .index-sec .code-wrapper.active").removeClass("active");
            $(this).addClass("active");
            $(".index-sec code[data-index='" + $(this).attr("data-index") + "']").addClass("active")
            $(".index-sec .code-wrapper[data-index='" + $(this).attr("data-index") + "']").addClass("active")
        }
    });
    $(".capture-video .feature-wrapper").on("mouseover", function () {
        if (!$(this).hasClass("active")) {
            $(".capture-video .feature-wrapper.active, .capture-video code.active, .capture-video .code-wrapper.active").removeClass("active");
            $(this).addClass("active");
            $(".capture-video code[data-index='" + $(this).attr("data-index") + "']").addClass("active")
            $(".capture-video .code-wrapper[data-index='" + $(this).attr("data-index") + "']").addClass("active")
        }
    });

    $(document).keydown(function (e) {
        if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = true;
    }).keyup(function (e) {
        if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = false;
    });

    $(".no-copy-paste").keydown(function (e) {
        if (ctrlDown && (e.keyCode == vKey || e.keyCode == cKey)) return false;
    });

    // Document Ctrl + C
    const sources = document.querySelectorAll("code:not(.with-new-line)");

    sources.forEach(source => {
        source.addEventListener("copy", (event) => {
            const selection = document.getSelection();
            event.clipboardData.setData("text/plain", selection.toString().replace(/\s+/g, " "));
            event.preventDefault();
        });
    });
});