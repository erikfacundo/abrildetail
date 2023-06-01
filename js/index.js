let presupuesto;
let aumento;
let precio;
document.getElementById('error');
// Clase persona para ingresar cliente
class Personas {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const clientes = [];
//DEFINIMOS VARIABLE BTN//
let btnLogin = document.getElementById('btnLogin')
//FUNCION PARA REDIRECCIONAR//
function comenzar() {
    location.href = "tratamientos.html"
}
//CREAMOS VARIABLE DE FORMULARIO//
const formulario = document.getElementById('formulario');

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();  //Evitamos que se recargue la página.
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    //Creamos el objeto persona
    const cliente = new Personas(nombre, apellido);
    //Agregamos los datos en el Array:
    clientes.push(cliente);
    //Guardamos los datos en el Storage:
    localStorage.setItem('Personas', JSON.stringify(clientes));  
    //Limpiamos el formulario
    formulario.reset();
    // console.log(clientes);
    comenzar()
});
