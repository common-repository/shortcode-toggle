jQuery(document).ready(function(){
	jQuery(".toggle_content").hide();
	jQuery(".toggle_title").click(function() {
		jQuery(this).toggleClass("toggle_active").next().slideToggle('fast');
		return false;
	});
});