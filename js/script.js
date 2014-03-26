jQuery(function ($) {
	$("#filter pre").on("dblclick taphold", function (e) {
		var $pre = $(this);
		var $filter = $pre.closest("#filter");
		var filter = $pre.text();
		if(page.regex === true) {
			filter = "(?#" + page.short + ")" + filter;
		}
		$filter.html("");
		var $input = $('<input type="text" />').val(filter).appendTo($filter);
		// $input.focus().select();
		$input[0].setSelectionRange(0, 9999);
	});
});
