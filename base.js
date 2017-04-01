$(document).ready(function(){
	var view = {
		name: "Frank",
		occupation: "Web Developer",
		tits: "http://hiboobs.com/wp-content/uploads/2009/12/tugjobs_bb10.jpg"
	}

	var output = Mustache.render("{{tits}}", view);
	var target = $("#it").html(output);
});
