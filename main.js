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
