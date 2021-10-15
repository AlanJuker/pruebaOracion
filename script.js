var arreglo;

function iniciar(){
    var boton = document.getElementById('boton');   
    boton.addEventListener('click',datos);
}

function datos(){
    var oracion = document.getElementById('oracion').value.trim();
    arreglo = oracion.split(' ');
    contarPalabras();
    mostrarPalabras();
    ordenInverso();
    ordenarOracion();
    ordenarOracionInverso();
}

function contarPalabras(){
    var div = document.getElementById('informacion');
    var titulo = document.createElement('label');
    div.setAttribute('class','contenedor');

    titulo.textContent = "Número Palabras:";
    var elemento = document.createElement('label');
    elemento.textContent = '    '+arreglo.length;

    div.appendChild(titulo);
    div.appendChild(elemento);
}

function mostrarPalabras(){
    var div = document.getElementById('informacion');
    var titulo = document.createElement('label');
    div.setAttribute('class','contenedor');

    div.appendChild(document.createElement('br'));

    titulo.textContent = "Primera palabra:";
    var elemento = document.createElement('label');
    elemento.textContent = '    '+arreglo[0];

    
    div.appendChild(titulo);
    div.appendChild(elemento);

    div.appendChild(document.createElement('br'));

    var titulo1 = document.createElement('label');
    titulo1.textContent = "Última palabra: ";
    var elemento1 = document.createElement('label');
    elemento1.textContent = '    '+arreglo[arreglo.length-1];


    div.appendChild(titulo1);
    div.appendChild(elemento1);
}

function ordenInverso(){
    var div = document.getElementById('informacion');
    var inverso = "";

    for(var i=arreglo.length-1; i>-1; i--){
        inverso += arreglo[i];
        inverso += " "
    }

    div.appendChild(document.createElement('br'));

    var titulo1 = document.createElement('label');
    titulo1.textContent = "Oración en orden inverso: ";
    var elemento1 = document.createElement('label');
    elemento1.textContent = '    '+inverso;


    div.appendChild(titulo1);
    div.appendChild(elemento1);
}

function ordenarOracion(){
    var div = document.getElementById('informacion');
    var orden = "";
    
    arreglo.sort();
    for(var i=0; i<arreglo.length; i++){
        orden += arreglo[i];
        orden += " "
    }


    div.appendChild(document.createElement('br'));

    var titulo1 = document.createElement('label');
    titulo1.textContent = "Oración en orden de la a la z: ";
    var elemento1 = document.createElement('label');
    elemento1.textContent = '    '+orden;


    div.appendChild(titulo1);
    div.appendChild(elemento1);
}

function ordenarOracionInverso(){
    var div = document.getElementById('informacion');
    var orden = "";

    arreglo.sort();
    arreglo.reverse();

    for(var i=0; i<arreglo.length; i++){
        orden += arreglo[i];
        orden += " "
    }

    div.appendChild(document.createElement('br'));

    var titulo1 = document.createElement('label');
    titulo1.textContent = "Oración en orden de la z a la a: ";
    var elemento1 = document.createElement('label');
    elemento1.textContent = '    '+orden;


    div.appendChild(titulo1);
    div.appendChild(elemento1);
}


window.addEventListener('load', iniciar);