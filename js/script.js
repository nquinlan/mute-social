jQuery(function ($) {
	$("#filter pre").on("dblclick", function (e) {
		var $pre = $(this);
		var $filter = $pre.closest("#filter");
		var filter = $pre.text();
		if(page.regex === true) {
			filter = escape("(?#" + page.short + ")") + filter;
		}
		$filter.html("");
		var $input = $('<input type="text" />').val(filter).appendTo($filter);
		$input.focus().select();
	});
});
