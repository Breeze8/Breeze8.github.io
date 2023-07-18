$(function() {

$(".form-mainer").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('.modal-dialog__thank').fadeIn();
			$('.close--thanks').click(function(){
				$('.modal-dialog__thank').fadeOut();
				$('.modal.in').hide()
                $('.modal-backdrop.in').fadeOut()
			});
			$(".form-mainer").trigger("reset");

		});
		return false;
	});

});