//strikethrough when clicked
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//remove item from list on click
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//add item to list on enter
$("input[type='text']").keypress(function(event) {
	if (event.which == 13) {
		var inputText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class=\"fas fa-trash\"></i></span>" + " " + inputText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text'").fadeToggle();
});