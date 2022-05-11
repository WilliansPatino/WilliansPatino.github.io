const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:90
});

typewriter
  .typeString('Atención a domicilio!')
  .pauseFor(2800)
  .start();