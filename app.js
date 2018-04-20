var usua = prompt("Ingresa tu nombre"); // Declaramos la variable USUA de tipo STRING y Solicitamos el nombre del usuario mediante el metodo PROMPT y lo guardaremos en USUA
document.getElementById('welcome').innerHTML=usua; // Utilizamos el metodo getElemntById para cambiar el contenido del selector ID WELCOME por el valor de la variable usua

var ready = confirm("Estas listo para jugar"); // Mediante el metodo CONFIRM, solicitaremos al usuario indicar en seguir o cancelar con la trivia

// Si el valor es true - si da click en el boton aceptar del evento prompt
if(ready==true){
/** Declaramos 4 variable de tipo String (pregunta1, pregunta2, pregunta3 y mensajeF. Utilizamos los metodos PROMPT, ALERT y TOUPPERCASE) **/
  var pregunta1 = prompt("¿Cuál es el nombre de la mascota de Mickey Mouse? \n A- Goofy \n B- Pluto").toUpperCase();
  var pregunta2 = prompt("Si tengo 5 peces y 3 se ahogan \n ¿Cuantos quedan?");
  var pregunta3 = prompt("En la mitología Griega, Hades es el dios del Inframundo \n Verdadero \n Falso").toUpperCase();
  var mensajeF = alert("Ahora veremos tus resultados");

//--------------PREGUNTA 1------------------------
  if (pregunta1 == 'B' || pregunta1 == 'PLUTO') {

    var mensaje = "Pregunta: ¿Cuál es el nombre de la mascota de Mickey Mouse?";
    document.getElementById('preg1').innerHTML = mensaje ;
    var resul1 = "  Respuesta: Pluto";
    document.getElementById('result1').innerHTML = resul1;

  }else{

    var mensaje = "Pregunta: ¿Cuál es el nombre de la mascota de Mickey Mouse?";
    document.getElementById('quest1').innerHTML = mensaje ;
    var resul1 = "  Respuesta: Goofy";
    document.getElementById('ans1').innerHTML = resul1;

  }
//---------------PREGUNTA 2------------------------
  if (pregunta2 == '5') {

    var mensaje1 = "Pregunta: Si tengo 5 peces y 3 se ahogan \n ¿Cuantos quedan?";
    document.getElementById('preg2').innerHTML = mensaje1 ;
    var resul2 = "  Respuesta: " + pregunta2;
    document.getElementById('result2').innerHTML = resul2;

  }else{

    var mensaje1 = "Pregunta: Si tengo 5 peces y 3 se ahogan \n ¿Cuantos quedan?";
    document.getElementById('quest2').innerHTML = mensaje1 ;
    var resul2 = "  Respuesta: " + pregunta2;
    document.getElementById('ans2').innerHTML = resul2;

  }
//---------------PREGUNTA 3------------------------
  if (pregunta3 == 'VERDADERO' || pregunta3 == 'V') {

    var mensaje2 = "Pregunta: En la mitología Griega, Hades es el dios del Inframundo";
    document.getElementById('preg3').innerHTML = mensaje2 ;
    var resul3 = "  Respuesta: Verdadero";
    document.getElementById('result3').innerHTML = resul3;

  }else{

    var mensaje2 = "Pregunta: En la mitología Griega, Hades es el dios del Inframundo";
    document.getElementById('quest3').innerHTML = mensaje2 ;
    var resul3 = "  Respuesta: Falso";
    document.getElementById('ans3').innerHTML = resul3;
  }
//Si el valor es false - se da click e el boton cancelar del evento prompt
}else {

  var mensaje = " ¡¡¡Jugaremos a la proxima!!    ";
  document.getElementById('finalM').innerHTML = mensaje;
  document.getElementById('correctAns').style.display='none';
  document.getElementById('incorrectAns').style.display='none';

}
