"use strict"

import { barcelona, roma, paris, londres } from './ciudades.js';

let d = document;

let enlaces = d.querySelectorAll('a');
let tituloCompletar = d.getElementById('titulo');
let subtituloCompletar = d.getElementById('subtitulo');
let parrafoCompletar = d.getElementById('parrafo');
let imagenCompletar = d.getElementById('imagen')

enlaces.forEach(function (enlace){
    enlace.addEventListener('click', e=>{
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        enlace.classList.add('active')

        let contenido = recibirContenido(enlace.textContent)

        tituloCompletar.textContent = contenido.titulo
        subtituloCompletar.textContent = contenido.subtitulo
        imagenCompletar.src = contenido.imagen
        imagenCompletar.alt = contenido.imagen
        imagenCompletar.style.width = '50%'
        parrafoCompletar.innerHTML = contenido.parrafo
    })
}
)

function recibirContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }
    return contenido[enlace]
}