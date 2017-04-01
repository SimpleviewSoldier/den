$(document).ready(function(){
	var view = {
		name: "Frank",
		occupation: "Web Developer"
	}

	var output = Mustache.render("{{name}} {{occupation}}", view);
	var target = $("#it").html(output);
});
