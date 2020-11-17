(function() {
    $("head").remove()
    $(".main_father").siblings().remove()
    $("#mainBox").siblings().remove()
    $("aside").remove()
    $(".blog-content-box").siblings().remove()
    $(".article-title-box").siblings().remove()

    $("main").css('display', 'content')

    window.print();
})();