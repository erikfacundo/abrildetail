//dom
let clienteParse = JSON.parse(localStorage.getItem("Personas"));
const botonAgregar = document.getElementById("agregar");
let presupuestoFinal = document.getElementById("presupuestoFinal");
let message = document.getElementById("welcome");
let divNft = document.getElementById("divContent"); //Se agrega el DIV agregado en el HTML
let divNft2 = document.getElementById("divContent2"); //Se agrega el DIV agregado en el HTML
message.innerHTML += "¡Bienvenido " + clienteParse[0].nombre + " comenzemos con el prespuesto!";
let seleccion4 = document.getElementById("seleccion4");
//localStorage

localStorage.getItem("divContect");
localStorage.getItem("divContect2");

//Creamos array

const vehiculosArray = [];
const tratArray = [];

let carritoTratamiento = [];
let carritoVehiculos = [];

//constructores

class vehiculo {
  constructor(name1, aumento, id) {
    this.name1 = name1;
    this.aumento = aumento;
    this.id = id;
  }
}

class tratamientos {
  constructor(nombret, descripcion, price, id) {
    this.nombret = nombret;
    this.descripcion = descripcion;
    this.price = price;
    this.id = id;
  }
}

//creacion objetos

const chico = new vehiculo("Chico", 1.1, 1);
const hatchback = new vehiculo("Hatchback", 1.15, 2);
const sedan = new vehiculo("Sedan", 1.2, 3);
const suv = new vehiculo("Suv", 1.25, 4);
const pickup = new vehiculo("Pickup", 1.3, 5);
const Acrilico = new tratamientos(
  "Acrilico",
  "Tratamiento Acrilico de 6 meses",
  40000,
  1
);
const Ceramico3 = new tratamientos(
  "Ceramico 3",
  "Tratamiento Cermico de 3 años",
  60000,
  2
);
const Ceramico5 = new tratamientos(
  "Ceramico 5",
  "Tratamiento Cermico de 5 años",
  80000,
  3
);
const PPF = new tratamientos(
  "PPF",
  "PPF completo 10 años de garantia",
  100000,
  4
);

//array

//push
vehiculosArray.push(chico, hatchback, sedan, suv, pickup);
tratArray.push(Acrilico, Ceramico3, Ceramico5, PPF);

//forEach

vehiculosArray.forEach((auto) => {
  //recorre el array "VEHICULOS ARRAY"
  const divCard2 = document.createElement("div");
  divCard2.classList.add("card");
  let { name1, aumento, id } = auto; //palabra "variable" referencial.
  const divContent2 = ` 
    <div class="card-body">
    <h5 class="card-title">${name1}</h5>
    <p class="card-text"> +% ${aumento} DE INTERES
    <button id="agregar${id}" class="btn btn-primary" data-bs-toggle="button"> SELECT VEHICULO</button>
    </div>
    `;
  divCard2.innerHTML = divContent2;
  divNft2.append(divCard2);
  const boton = document.getElementById(`agregar${id}`);
  boton.addEventListener("click", () => {
     
    Toastify({
      text: `Àgregaste ${name1}`,
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
    agregarALCarrito2(id);
  });
});

const agregarALCarrito2 = (produId) => {
  const item2 = vehiculosArray.find((produ) => produ.id === produId);
  carritoVehiculos.push(item2);
  localStorage.setItem("carrito1", JSON.stringify(carritoVehiculos));
  console.log(carritoVehiculos);
};

tratArray.forEach((trat) => {
  //recorre el array "TRAT ARRAY"
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  let { nombret, descripcion, price, id } = trat; //palabra "variable" referencial.
  const divContent = ` 
    <div class="card-body">
    <h5 class="card-title">${nombret}</h5>
    <p class="card-test">${descripcion}</p>
    <p class="card-text">$ ${price}
    <button id="agregar${id}" class="btn btn-primary" data-bs-toggle="button"> SELECT TRATAMIENTO</button>
    </div>
    `;
  divCard.innerHTML = divContent;
  divNft.append(divCard);
  const boton = document.getElementById(`agregar${id}`);
  boton.addEventListener("click", () => {
    Toastify({
      text: `Àgregaste ${nombret}`,
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
    agregarALCarrito(id);
  });
});

//eventos

const agregarALCarrito = (prodId) => {
  const item = tratArray.find((prod) => prod.id === prodId);
  carritoTratamiento.push(item);
  localStorage.setItem("carrito", JSON.stringify(carritoTratamiento));
  console.log(carritoTratamiento);
};

function total() {
  seleccion4.innerHTML= ""
  seleccion3.innerHTML= ""
  
  const totalTrat = carritoTratamiento.reduce(
    
    (acc, el) => (acc += el.price),
    0
  );
  const totalVehic = carritoVehiculos.reduce(
    (acc, el) => (acc += el.aumento),
    0
  );
  
  const total = totalTrat * totalVehic;
  seleccion3.innerHTML += "El total de su presupuesto es " + "$" + total;

  let total1 = total * 0.85;

  total >= 90000
    ? (seleccion4.innerHTML += "Tiene un descuento " + " " + total1)
    : (seleccion4.innerHTML += "No tiene descuento");
  
  
    preventDefault();

}

