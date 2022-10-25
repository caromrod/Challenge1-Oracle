
//PRIMERO EL MENSAJE DOS DEBE ESTAR OCULTO
document.getElementById("lienzo").style.visibility = "hidden";
document.getElementById("btnCopiar").style.visibility = "hidden";

document.getElementById("lienzo2").style.visibility = "hidden";
document.getElementById("btnCopiar2").style.visibility = "hidden";

//funcion para encriptar, mediante el evento de clic en el boton encriptar
const $btnEncriptar  = document.querySelector("#btnEncriptar");
$btnEncriptar.addEventListener("click", () => {
 
    let input = document.getElementById('txtIngreseTexto').value;

  
            //oculto el mensaje 1
            document.getElementById("mensaje1").style.visibility = "hidden";
            //sonidos para el boton
            let etiquetaAudio = document.createElement("audio");
            etiquetaAudio.setAttribute("src", "./css/sonidos/boton.mp3");
            etiquetaAudio.play()
            //muestro el mensaje 2
            document.getElementById("lienzo").style.visibility = "visible";
            document.getElementById("btnCopiar").style.visibility = "visible";
            document.getElementById("lienzo").style.height = "350px";
            document.getElementById("lienzo").style.width = "350px";
            //tomo el texto del input
    
    
            //transformo las letras en minusculas por si el usuario usa mayusculas
            let min = input.toLowerCase();
    
            //creo una variable a imprimir, uso el metodo reemplazar todo, cambio las letras por los sustitutos
    
            /*La letra "e" es convertida para "enter"
            La letra "i" es convertida para "imes"
            La letra "a" es convertida para "ai"
            La letra "o" es convertida para "ober"
            La letra "u" es convertida para "ufat" */
    
    
            //para que no se sobreescriba use la misma secuencia que pedia el ejercicio, ya que si ponia antes reemplazar a, que es ai, luego al pasar i, se volvia a encriptar la letra final de A.
            
            let lienzo = min
            .replaceAll('e', 'enter')
            .replaceAll('i', 'imes')
            .replaceAll('a', 'ai')
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");
    
            //imprimo el mensaje encriptado
    
            document.getElementById("lienzo").innerHTML = lienzo;
            
        
            document.getElementById("txtIngreseTexto").value = "";

   
    

});





//funcion para desencriptar
const $btnDesencriptar  = document.querySelector("#btnDesencriptar");
$btnDesencriptar.addEventListener("click", () => {

    let input = document.getElementById('txtIngreseTexto').value;

  
    //oculto el mensaje 1
    document.getElementById("mensaje1").style.visibility = "hidden";
    //sonidos para el boton
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "./css/sonidos/boton.mp3");
    etiquetaAudio.play()
    //muestro el mensaje 2
    document.getElementById("lienzo2").style.visibility = "visible";
    document.getElementById("btnCopiar2").style.visibility = "visible";
    document.getElementById("lienzo2").style.height = "350px";
    document.getElementById("lienzo2").style.width = "350px";

    
   
    let lienzo2 = input
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");


    //imprimo el mensaje encriptado

    document.getElementById("lienzo2").innerHTML = lienzo2;
    

    document.getElementById("txtIngreseTexto").value = "";
    

  




});



//funcion para copiar
function copiar1(){

        //obtengo el texto, donde se va a pegar la encriptacion
        let copyText = document.getElementById("lienzo");
      
      

        navigator.clipboard.writeText(copyText.value);
      
  
        alert("El texto fue copiado con éxito");

        
        document.getElementById("lienzo").value = "";
       
        //oculto el mensaje 2
        document.getElementById("lienzo").style.visibility = "hidden";
        document.getElementById("btnCopiar").style.visibility = "hidden";

        //MUESTRO MENSAJE1
        document.getElementById("mensaje1").style.visibility = "visible";

    
      }


//funcion para copiar
function copiar2(){

    // obtengo el texto donde se va a desencriptar
    let copyText = document.getElementById("lienzo2");
  
  

    navigator.clipboard.writeText(copyText.value);

    alert("El texto fue copiado con éxito");

    
    document.getElementById("lienzo2").value = "";

    window.location.href = "index.html";

    
  }