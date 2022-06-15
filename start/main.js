const app = document.getElementById('typewriter');

const uc = document.getElementById('underc');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:90
});

typewriter
  .typeString('Atención a domicilio!')
  .pauseFor(2800)
  .start();

  underc
  .typeString('Atención a domicilio!')
  .pauseFor(2800)
  .start();



  $(document).ready(function () {
    $('.testimonials').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [{
      breakpoint: 850,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      }
      }]
    });
  });