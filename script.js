
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
lo mismo pero al revés. 
*/

// function cambiarMensajeResultado(){
//     var msg = document.getElementById("result__msg").value;
//     msg = document.writeln("Este es el resultado: ")
// }

function botonEncriptar(){
    const encriptar = document.getElementById('textoAEncriptar').value;
    const encriptado = encriptar.replace(/(e)/gi, 'enter').replace(/(i)/gi, 'imes').replace(/(a)/gi, 'ai').replace(/(o)/gi, 'ober').replace(/(u)/gi, 'ufat');
    document.getElementById("textoEncriptado").value = encriptado
    document.getElementById("textoAEncriptar").value=" ";
    // cambiarMensajeResultado();
}

var button = document.getElementById("btnEncriptar");
button.onclick = botonEncriptar;

function botonDesencriptar(){
    const desencriptar = document.getElementById('textoAEncriptar').value;
    const desencriptado = desencriptar.replace(/(enter)/gi, 'e').replace(/(imes)/gi, 'i').replace(/(ai)/gi, 'a').replace(/(ober)/gi, 'o').replace(/(ufat)/gi, 'u');
    document.getElementById("textoEncriptado").value = desencriptado
    document.getElementById("textoAEncriptar").value=" ";
}

var button2 = document.getElementById("btnDesencriptar");
button2.onclick = botonDesencriptar;