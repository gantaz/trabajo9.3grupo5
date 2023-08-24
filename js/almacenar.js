const boton = document.getElementById("agregar");
let listaItems = JSON.parse(localStorage.getItem('listaItems')) || [];
let arrayItems = document.getElementById("contenedor");
let limpiar = document.getElementById("limpiar")

document.addEventListener("DOMContentLoaded", function () {
    arrayItems.innerHTML = JSON.parse(localStorage.getItem('listaItems')).join('<br>');
});

boton.addEventListener('click', () => {
    let nuevoItem = document.getElementById("item").value;

    listaItems.push(nuevoItem);

    localStorage.setItem('listaItems', JSON.stringify(listaItems));

    arrayItems.innerHTML = JSON.parse(localStorage.getItem('listaItems')).join('<br>');
});

limpiar.addEventListener('click', () => {
    listaItems = [];
    localStorage.removeItem('listaItems');
    arrayItems.innerHTML = "";

});

