(function () {
	document.getElementById("btn-readmore-zk").click();
	$("#side").remove();
	$("#comment_title, #comment_list, #comment_bar, #comment_form, .announce, #ad_cen, #ad_bot").remove();
	$(".nav_top_2011, #header, #navigator").remove();
	$(".p4course_target, .comment-box, .recommend-box, #csdn-toolbar, #tool-box").remove();
	$("aside").remove();
	$(".tool-box").remove();
	$(".left-toolbox").remove();
	$(".template-box").remove();
	$(".bottom-pub-footer").remove();
	$("main").css('display','content');

	window.print();
})();
