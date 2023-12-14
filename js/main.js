const accordion = document.getElementsByClassName('quest__item');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  })
}

$('.swiper-wrapper').slick({
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        // arrows: false,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      }
    }
  ],
})

let header = document.querySelector(".header")
window.onscroll = function(){
  if(window.scrollY > 100){
    header.style.background = "rgba(255, 255, 255, 0.9)"
  }
  else{
    header.style.background = "rgba(0, 0, 0, 0)" 
  }
}

$('.menu__link').on( 'click', function(){ 
  var el = $(this);
  var dest = el.attr('href'); // получаем направление
  if(dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({ 
        scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
      }, 500 // скорость прокрутки
      );
      $('.header__burger, .menu__list').toggleClass('active');
  }
  return false;
});

$('.header__burger').click(function(event){
  $('.header__burger, .menu__list').toggleClass('active');
})