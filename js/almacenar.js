let boton = document.getElementById("agregar");
let listaItems = JSON.parse(localStorage.getItem("listaItems")) || [];
let arrayItems = document.getElementById("contenedor");

boton.addEventListener("click", () => {

  let nuevoItem = document.getElementById("item").value;
  listaItems.push(nuevoItem);
  
  localStorage.setItem("listaItems", JSON.stringify(listaItems));
  arrayItems.innerHTML = JSON.parse(localStorage.getItem("listaItems")).join(
    "<li>"
  );

  document.getElementById("item").value = "";
});
