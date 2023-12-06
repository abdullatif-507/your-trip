// owl-carousel code 
$('.owl-carousel').owlCarousel({
  margin: 10,
  nav: true,
  loop: true,
  autoplay: true,
  autoplayTime: 5000,
  navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
  responsive: {
      0: {
          items: 0
      },
      100: {
          items: 1
      }
    }
});

$(".owl-prev").html('<i class="fa fa-angle-left"></i>');
$(".owl-next").html('<i class="fa fa-angle-right"></i>');


  // Menu Android
