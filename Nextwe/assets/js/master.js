$(document).ready(function (){
	$('.image-hot-product-slider').slick({
		dots: true,
		// autoplay: true,
		infinite: true,
		rtl: false,
		// autoplaySpeed: 4000,
		draggable: false,
  		speed: 300
	});

	$('.nav-product-show-case .nav-product-link').on('click', function () {
		$('.nav-product-show-case .nav-product-link').removeClass('actived');
		$(this).addClass('actived');
	});

	$('.product-show-item').on('mouseenter', function () {
		$(this).find('a').addClass('show-product-view-button');
		$(this).find('.product-show-sidebar').addClass('show-product-sidebar');
	}).on('mouseleave', function () {
		$(this).find('a').removeClass('show-product-view-button');
		$(this).find('.product-show-sidebar').removeClass('show-product-sidebar');
	});

	var scroll_start = 0;
   	var startchange = $('.hot-product-section');
   	var offset = startchange.offset();
    if (startchange.length){
   		$(document).scroll(function() { 
      		scroll_start = $(this).scrollTop();
      		if(scroll_start > offset.top) {
          		$(".navbar-brand").addClass('nav-brand-skew');
       		} else {
          		$(".navbar-brand").removeClass('nav-brand-skew');
       		}
   		});
    }

    $('#cart').on("click", function(){
		swal({
		  title: "Hore Berhasil!",
		  text: "Produk berhasil di tambahkan ke keranjang kamu",
		  icon: "success",
		  buttons: ["Belanja Lagi", "Bayar Langsung"],
		})
		.then((isConfirm) => {
  			if (isConfirm) {
    			window.location.href = "checkout.html";
  			} else {
  			}
		});
	});

	// $('.product-show-sidebar').on('click', '.add-fav-button', function (e) {
	// 	e.preventDefault();
	// 	if ($(this).html() == '<i class="far fa-heart"></i>') {
	// 		$(this).html(`<i class="fas fa-heart animate__animated animate__heartBeat" style="color:rgba(208, 32, 32, 1)"></i>`);
	// 	}else{
	// 		$(this).html(`<i class="far fa-heart animate__animated"></i>`);
	// 	}
	// });
	$('.product-show-sidebar').on('click', '.add-fav-button', function (e) {
		e.preventDefault();
		if ($(this).html() == '<i class="far fa-heart animate__animated animate__heartBeat"></i>') {
			$(this).html(`<i class="fas fa-heart animate__animated animate__heartBeat" style="color:rgba(208, 32, 32, 1)"></i>`);
		}else{
			if ($(this).html() == '<i class="fas fa-heart animate__animated animate__heartBeat" style="color:rgba(208, 32, 32, 1)"></i>') {
				$(this).html(`<i class="far fa-heart animate__animated animate__heartBeat"></i>`);
			}
		}
	});
});