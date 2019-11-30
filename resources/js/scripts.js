
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


	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };




}  
);
