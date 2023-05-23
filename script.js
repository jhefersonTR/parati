window.onload = init;
var petalos;
var boton_jugar;
var valores;

function init(){
	petalos = document.getElementsByClassName("petalo");
	asignarEvento();
    abrirJuego()
}
function asignarValores(){
  var numero_aleatorio = Math.round(Math.random()*10);
  var moneda = numero_aleatorio > 5;
  valores = [];
  for(var i=0;i<petalos.length;i++)
	{
    valores[i] = moneda;
    moneda = !moneda;
  }
}
function abrirJuego(){



  
  asignarValores();
}
function asignarEvento(){
	for(var i=0;i<petalos.length;i++)
	{
		petalos[i].addEventListener("click",animar);
	}
}
function colorAleatorio(){
  var r = Math.round(Math.random()*255);
  var g = Math.round(Math.random()*255);
  var b = Math.round(Math.random()*255);
  return "rgb("+r+","+g+","+b+")";
}
function animar(event){
  var id_petalo = event.target.id;
  var petalo = document.getElementById(""+id_petalo);
  //petalo.style.backgroundColor = colorAleatorio(); 
  petalo.className = "petalo animated fadeOutDown";
  validarJugada(id_petalo);
}

function validarJugada(petalo){
  var indice = parseInt(petalo.substr(1));
  var str;
  
  if(valores[indice-1])
  {
    str = "Me quiere";
  }
  else
  {
    str = "No me quiere";    
  }
  //alert(mensaje);
  texto_mensaje.innerHTML = str;
  mensaje.className = "mostrar animated fadeIn";
  setTimeout(()=>{
    mensaje.className = "hidden";
  },1000);
}

const loveMessages = [
    "El amor no conoce límites ni barreras, siempre encuentra una forma de prevalecer.",
    "Nunca subestimes el poder de una sonrisa, puede cambiar el mundo.",
    "El amor es el motor que impulsa la vida, da sentido a todo lo que hacemos.",
    "Amar es arriesgarse a ser vulnerable, pero vale la pena cada momento.",
    "La vida es más hermosa cuando la compartes con alguien especial.",
    "El amor verdadero no se encuentra, se construye día a día con esfuerzo y compromiso.",
    "El amor es el lenguaje universal que todos entendemos.",
    "El amor es como un jardín, si no se cuida y alimenta, se marchita.",
    "Eres mi refugio en medio de la tormenta, mi paz en el caos.",
    "El amor no se trata de encontrar a alguien perfecto, sino de amar a alguien imperfecto de manera perfecta.",
    "El amor es el regalo más valioso que puedes dar y recibir.",
    "El amor no se mide en tiempo, se mide en intensidad y conexión.",
    "El amor es el ingrediente secreto que hace que la vida sea más dulce.",
    "Tu amor me inspira a ser la mejor versión de mí mismo/a.",
    "El amor no es solo un sentimiento, es una acción que se demuestra cada día.",
    "El amor es como una chispa que enciende el fuego de la felicidad.",
    "El amor es el puente que une corazones y une almas.",
    "En tus brazos encuentro paz y en tu sonrisa encuentro mi refugio.",
    "El amor no se desgasta, se renueva con cada gesto de cariño.",
    "Amar es confiar en el otro y caminar juntos en la misma dirección.",
    "El amor es el único tesoro que aumenta cuando se comparte.",
    "En cada beso tuyo encuentro la razón de mi existir.",
    "El amor no conoce de distancias, siempre encuentra la forma de acercarnos.",
    "Eres mi sol en los días nublados y mi luz en las noches oscuras.",
    "El amor es el arte de cuidar y ser cuidado mutuamente.",
    "Amar es encontrar en el otro lo que nos falta y complementarnos.",
    "Eres la melodía que alegra mis días y la inspiración de mis sueños.",
    "El amor es como una flor, necesita tiempo, atención y cuidado para florecer.",
    "En tus abrazos encuentro mi lugar en el mundo.",
    "El amor no se puede explicar, solo se puede sentir.",
    "Eres mi razón para sonreír y mi fuerza para seguir adelante.",
    "El amor es el motor que impulsa nuestros sueños y metas.",
    "En cada mirada tuya encuentro un universo lleno de amor y ternura.",
    "El amor es el regalo más valioso que puedes ofrecer a alguien.",
    "Amar es elegir estar juntos incluso en los momentos difíciles.",
    "Eres mi compañero/a de vida, mi confidente y mi mayor apoyo.",
    "El amor es la magia que transforma lo ordinario en extraordinario.",
    "Amar es descubrir que los defectos del otro son perfectos para nosotros.",
    "Eres mi refugio en la tormenta, mi fortaleza en la debilidad.",
    "El amor no es posesión, es libertad para ser uno mismo y dejar ser al otro.",
    "En tus ojos encuentro el reflejo de un amor sincero y profundo.",
  ];
  
  const loveMessageElement = document.getElementById("loveMessage");
  const changeMessageBtn = document.getElementById("changeMessageBtn");
  
  let currentIndex = 0;
  
  function changeMessage() {
    loveMessageElement.textContent = loveMessages[currentIndex];
    currentIndex = (currentIndex + 1) % loveMessages.length;
  }
  
  changeMessageBtn.addEventListener("click", changeMessage);
  setInterval(changeMessage, 5000);
/*window.onload = init;
var petalos;
var contador;

function init(){
	var boton = document.getElementById("boton");
	boton.addEventListener("click",animar);
	contador = 0;
	petalos =         document.getElementsByClassName("petalo");
}

function animar(){
	if(contador+1<=petalos.length)
	{
		petalos[contador].className = "petalo animated bounce infinite";
		contador = contador+1;
	}
}*/