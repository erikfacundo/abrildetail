const listaProductos = document.querySelector("#listaproductos");

fetch("./js/productos.json")
.then(response => response.json())
.then(data => {
    mostrarProductos(data);
})



const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(listaProductos)
        }, 2000);
    })
}

let productos = [];

function mostrarProductos (productos) {
    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = producto.nombre + " - $ " + producto.precio + "br" + producto.desc; 
        listaproductos.append(li);
    });
}


pedirProductos()
.then((res) => {
    productos = res;
    console.log(productos)
})