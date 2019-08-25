
$(document).ready(function() {
	$(window).scroll(function() {

		if($(window).scrollTop() > 200) {
			$('nav').removeClass('nav a');
			$('nav').addClass('sticky-nav');
		}

		else {
			$('nav').removeClass('sticky-nav');
		}

	}
	);

	$('.js-nav-icon').click(function(){
		var nav = $('.js-main-nav');

		var icon_class = $('.js-nav-icon i');


		nav.slideToggle(300);

/*

		if (icon_class.hasClass('fas fa-bars')
		{
			icon_class.addClass('fas fa-times');
			icon_class.removeClass('fas fa-bars');
		}

		else
		{
			icon_class.addClass('fas fa-bars');
			icon_class.removeClass('fas fa-times');
		}
*/


	});

/*	$('.events-image').hover(function(){



	})
*/

		var graphicsdev = $("#graphicsdev");
		var gamedev = $("#gamedev");
		var webdev = $("#webdev") ;

		gamedev.hide();
		webdev.hide();

		$("#graphicsDevBtn").click(function(){
//			$("video").setAttribute("src" , "images/graphicsdev.mp4");
				//$("#projects-video source").src = 'images/graphicsdev.mp4'; 
//			
/*			if($("#projects-video source").length){
				$("#projects-video").empty();
			}



			$("#projects-video").html('<source src="images/graphicsdev.mp4" type="video/mp4"></source>' );
			$("#content video")[0].load();
			location.reload();
*/
				graphicsdev.show(800);

				gamedev.hide();
				webdev.hide();
			});


			$("#gameDevBtn").click(function(){
		//	$("video").setAttribute("src" , "images/graphicsdev.mp4");
/*
				if($("#projects-video source").length){
					$("#projects-video").empty();
				}


				$("#projects-video").empty();
				$("#projects-video").html('<source src="images/gamedev.mp4" type="video/mp4"></source>' );
				$("#content video")[0].load();
*/				
				gamedev.show(800);

				graphicsdev.hide();
				webdev.hide();


			});

			$("#webDBtn").click(function(){
				webdev.show(800);
				gamedev.hide();
				graphicsdev.hide();

			})

}  
);
