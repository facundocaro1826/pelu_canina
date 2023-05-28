var parrafos = document.getElementsByTagName('p')
parrafos[1].style.color = '#CADCD8';

var titulo_3 = document.getElementsByTagName('h3')
titulo_3[0].style.color = '#716573'

var fondo = document.getElementById("caja3")
fondo.style.backgroundColor="#CECFD1"

var parra_6 = document.getElementById("parrafo_6")
parra_6.style.color ="#3D3A3E"

var caja = document.getElementById('caja_2')
caja.style.color = '#716573'

var sdoTitulo = document.getElementsByClassName('2_titulo')
sdoTitulo[0].style.color = '#3D3A3E';


function confirmar(respuesta){
    var respuesta = confirm("MAS INFORMACION")
    var contenido = document.getElementById("parrafo_6")
    if (respuesta) {
        contenido.style.display ="block";
        }else{
            contenido.style.display ="none";
        }
    }

    
    





