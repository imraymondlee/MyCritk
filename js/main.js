$(function() {
	// Pinning feedback
	$(".pin").click(function(){
		$(this).toggleClass("pin-bg");
	});

	// Upvoting
	$(".upvote", this).click(function(){
		$(this).toggleClass("upvote-bg");



		if($(this).hasClass("upvote-bg")){
			var score = $(this).siblings(".feedback_score").text();
			var score = parseInt(score);
			console.log(score);

			score += 1;
			$(this).siblings(".feedback_score").text(score);
		}else{
			var score = $(this).siblings(".feedback_score").text();
			var score = parseInt(score);
			console.log(score);

			score -= 1;
			$(this).siblings(".feedback_score").text(score);
		}

	});





	// Heatmap
	$(".feedback_row").show();
	$("#view_all").hide();


	$("#overlay-nav").click(function(){
		$(".feedback-nav").show();
		$(".feedback-images").hide();
		$("#view_all").show();
	});

	$("#overlay-images").click(function(){
		$(".feedback-images").show();
		$(".feedback-nav").hide();
		$("#view_all").show();
	});

	$("#overlay-nav").hover(function(){
		$('#overlay-nav').css( 'cursor', 'pointer' );
	});

	$("#overlay-images").hover(function(){
		$('#overlay-images').css( 'cursor', 'pointer' );
	});

	//Annotation
	$(".feedback-nav").hover(function(){
		$("#overlay-nav").toggleClass("toggle_annotate");
	});

	$(".feedback-images").hover(function(){
		$("#overlay-images").toggleClass("toggle_annotate");
	});

	$("#view_all").click(function(){
		$(".feedback_row").show();
		$("#view_all").hide();
	});


	// New Comment
	$("#post-new-comment").click(function(){
		var head = $('#new-comment-head').val();
		var body = $('#new-comment-body').val();

		console.log(head + body);

		$('#comment-head').text(head);
		$('#comment-body').text(body);

		$(".new-comment").show();

	});
});