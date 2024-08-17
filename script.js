//alert("Hola Mundo");

var app = document.getElementById('app');

var typewriter = new /* cuando comienza con may[uscula, son objetos */ Typewriter(app, {
  loop: true,
  delay: 75,
});

//Usar el punto es para llamar a una propiedad o una acci[on del objeto
// Las acciones se distinguen por los par[entesis ()
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: black;">Soy Rocio Valero.</span>')
  .pauseFor(300)
  .deleteChars(13)
  .typeString('<strong style="color: black;">Mujer.</strong>')
  .pauseFor(300)
  .deleteChars(6)
  .typeString('<strong style="color: black;">Estudiante.</strong>')
  .pauseFor(300)
  .deleteChars(11)
  .typeString('<strong style="color: black;">Artista.</strong>')
  .pauseFor(300)
  .deleteChars(8)
  .typeString('<strong style="color: black;">TI.</strong>')
  .pauseFor(300)
  .deleteChars(11)
  .pauseFor(1000)
  .start();



var appTwo = document.getElementById('dinamicText');

var typewriterTwo = new Typewriter(appTwo, {
  loop: true,
  delay: 75,
});

typewriterTwo
  .pauseFor(2500)
  .typeString('¡Gracias por visitar mi portafolio!')
  .pauseFor(300)
  .deleteChars(22)
  .typeString('estar aquí!')
  .pauseFor(300)
  .deleteChars(11)
  .typeString('tomarte el tiempo!')
  .pauseFor(1000)
  .start();

