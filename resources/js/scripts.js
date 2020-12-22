// Code for removing website vulnerability
for (var i = 0; i < $("a").length; i++) {
	if ($("a")[i].target === "_blank")
		$("a")[i].rel = "noopener noreferrer";
}

var loader;

function loadNow(opacity) {
	if (opacity <= 0) {
		displayContent();
	} else {
		loader.style.opacity = opacity;
		window.setTimeout(function () {
			loadNow(opacity - 0.05);
		}, 50);
	}
}

function displayContent() {
	loader.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
	loader = document.getElementById('preloader');
	loadNow(1);
});

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(loadNow, 20 * 1000);




$(document).ready(function () {



	var TxtType = function (el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	TxtType.prototype.tick = function () {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

		var that = this;
		var delta = 200 - Math.random() * 100;

		if (this.isDeleting) {
			delta /= 2;
		}

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function () {
			that.tick();
		}, delta);
	};

	window.onload = function () {
		var elements = document.getElementsByClassName('typewrite');
		for (var i = 0; i < elements.length; i++) {
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








	var a = 0;

	$(window).scroll(function () {

		if ($(window).scrollTop() > 200) {
			$('nav').removeClass('nav a');
			$('nav').addClass('sticky-nav');
		} else {
			$('nav').removeClass('sticky-nav');
		}

		var ctx = document.getElementById("branchChart");
		var branchChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ['CSE/IT Undergrads', 'Non CSE/IT'],
				datasets: [{
					label: '# of Tomatoes',
					data: [20, 32],
					backgroundColor: [
						'#121212',
						'#CDDC39'
					],
					borderColor: [
						'#121212',
						'#CDDC39'
					],
					borderWidth: 1
				}]
			},
			options: {
				cutoutPercentage: 40,
				responsive: true

			}
		});


		var ctx = document.getElementById("distChart");
		var distChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ['Developers', 'Designers', '2D/3D Artists'],
				datasets: [{
					label: '# of Tomatoes',
					data: [46, 5, 7],
					backgroundColor: [
						'#f44336',
						'#CDDC39',
						'#121212'
					],
					borderColor: [
						'#f44336',
						'#CDDC39',
						'#121212'
					],
					borderWidth: 1
				}]
			},
			options: {
				cutoutPercentage: 40,
				responsive: true

			}
		});




	});

	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});
	$('.counter').addClass('animated fadeInDownBig');



	$('.js-nav-icon').click(function () {
		var nav = $('.js-main-nav');

		var icon_class = $('.js-nav-icon i');


		nav.slideToggle(300);



	});

	var oTop = $('#counter').offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop) {
		$('.counter-value').each(function () {
			var $this = $(this),
				countTo = $this.attr('data-count');
			$({
				countNum: $this.text()
			}).animate({
					countNum: countTo
				},

				{

					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}

				});
		});
		a = 1;
	}



	var graphicsdev = $("#graphicsdev");
	var gamedev = $("#gamedev");
	var webdev = $("#webdev");

	gamedev.hide();
	webdev.hide();

	$("#graphicsDevBtn").click(function () {
		graphicsdev.show(800);

		gamedev.hide();
		webdev.hide();
	});


	$("#gameDevBtn").click(function () {
		gamedev.show(800);

		graphicsdev.hide();
		webdev.hide();


	});

	$("#webDBtn").click(function () {
		webdev.show(800);
		gamedev.hide();
		graphicsdev.hide();

	});










});




jQuery(window).scroll(startCounter);

function startCounter() {
	var hT = jQuery('#stats').offset().top,
		hH = jQuery('#stats').outerHeight(),
		wH = jQuery(window).height();
	if (jQuery(window).scrollTop() > hT + hH - wH) {
		jQuery(window).off("scroll", startCounter);
		jQuery('.counter').each(function () {
			var $this = jQuery(this);
			jQuery({
				Counter: 0
			}).animate({
				Counter: $this.text()
			}, {
				duration: 2000,
				easing: 'swing',
				step: function () {
					$this.text(Math.ceil(this.Counter) + '%');
				}
			});
		});
	}
}