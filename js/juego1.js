let botonJuego = document.querySelector(".conten");
let botonInicio = document.querySelector(".botonFin");
let barraJugador = document.querySelector(".vidaJugador");
let barraEnemigo = document.querySelector(".vidaEnemigo");

const imagenes = [
{
  name: "fuego",
  url: "fuego.gif",

  name: "agua",
  url: "gota3.gif",

  name: "rayo",
  url: "rayo.gif",
   
}
]

function aleatorio() {
  let aleatorio = Math.floor(Math.random() * 3);
  return aleatorio;
}

let enemigo;
let jugador;
let ata_o_def = 0; //Donde 0 es que el jugador ataca y el 1 el jugador defiende

function fuego() {
  enemigo = aleatorio();
  juego(0, enemigo);
}

function agua() {
  enemigo = aleatorio();
  juego(1, enemigo);
}

function rayo() {
  enemigo = aleatorio();
  juego(2, enemigo);
}

function aLetras(a) {
  switch (a){
    case 0:
      return "FUEGO";
    break;
    case 1:
      return "AGUA";
    break;
    case 2:
      return "RAYO";
    break;
  }
}


let vida;
let vidaJugador = 100;
let vidaEnemigo = 100;
function juego(jugador, enemigo) {

  if (jugador === enemigo) {
    vida = 10;
  } else if (jugador === 0) { // Ataque de agua
    if (enemigo === 1) { // Defensa de fuego
      vida = 20;
    }
  } else if (jugador === 1) { // Ataque de fuego
    if (enemigo === 0) { // Defensa de agua
      vida = 0;
    } else if (jugador === 2) { // Defensa de rayo
      vida = 20;
    } else { // Defensa de fuego
      vida = 10;
    }
  } else if (jugador === 2) { // Ataque de rayo
    if (enemigo === 0) { // Defensa de agua
      vida = 20;
    } else if (jugador === 1) { // Defensa de fuego
      vida = 0;
    } else { // Defensa de rayo
      vida = 10;
    }
  }
  if(jugador === 0){
    if(enemigo ===2){
      vida = 0;
    }
  }

  if(!ata_o_def){
    ata_o_def = 1;
    vidaEnemigo -=vida;
    barraEnemigo.style.width = vidaEnemigo+"%";
    alert("Has atacado con "+aLetras(jugador)+" y el Enemigo se ha defendido con "+aLetras(enemigo)+", les has quitado "+vida+".");
    alert("Ahora ataca el enemigo y tu defiendes");
  }else {
    ata_o_def = 0;
    vidaJugador -=vida;
    barraJugador.style.width = vidaJugador+"%";
    alert("Has defendido con "+aLetras(jugador)+" y el Enemigo te ha atacado con "+aLetras(enemigo)+", te ha quitado "+vida+".");
    alert("Ahora tu atacas y el enemigo defiendes");
  }
  console.log("vida del jugador: "+vidaJugador,"vida del enemigo "+vidaEnemigo);


  if(vidaJugador <= 0){
    barraJugador.style.width = "0%";
    alert ("HAS PERDIDO INTENTELO MAS TARDE");
    botonJuego.style.display = "none";
    botonInicio.style.display = "block";
  }
  if(vidaEnemigo <= 0){
    barraEnemigo.style.width = "0%";
    alert("HAS GANADO!! FELICITACIONES");
    botonJuego.style.display = "none";
    botonInicio.style.display = "block";
  }
}


 


