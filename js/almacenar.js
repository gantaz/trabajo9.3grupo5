let boton = document.getElementById("agregar");
let listaItems = JSON.parse(localStorage.getItem('listaItems')) || [];

boton.addEventListener('click', () => {
    let nuevoItem = document.getElementById("item").value;

    listaItems.push(nuevoItem);

    localStorage.setItem('listaItems', JSON.stringify(listaItems));
});

