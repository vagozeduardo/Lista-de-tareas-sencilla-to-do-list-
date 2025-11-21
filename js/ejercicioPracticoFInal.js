window.onload = function () {};
const colores = ["green", "blue", "yellow", "purple", "orange", "pink", "brown"];
var textoArray = {}; // asi se crea un objeto vacio
// se parrece a un array pero cada posicion tiene como una etiqueta unica como el id de la tabla en base de datos
var contador = 0;
var contadorColor = 0;

function agregartarea() {
  let descripcionTarea = document.getElementById("entradaTarea");
  let texto = descripcionTarea.value.trim();

  if (texto !== "") {
    textoArray[contador] = texto;
    descripcionTarea.value = "";

    /* 
    estructura del div de plamtilla
          <div class="listasTareas" id="">
            <div class="contenedorTexttarea">
              <p>area de texto</p>
            </div>
            <button class="Btn_eliminarTarea">Eliminar Tarea</button>
          </div>
    */
    /* para el color del contenedor */

    // Crear div principal
    let tarea = document.createElement("div");
    tarea.className = "listasTareas";
    tarea.id = contador; // id único
    tarea.style.backgroundColor = colores[contadorColor];

    // Crear contenedor de texto
    let contenedor = document.createElement("div");
    contenedor.className = "contenedorTexttarea";
    let p = document.createElement("p");
    p.textContent = texto;
    contenedor.appendChild(p);

    // Crear botón
    let boton = document.createElement("button");
    boton.className = "Btn_eliminarTarea";
    boton.textContent = "Eliminar Tarea";

    // Evento para eliminar usando el id
    boton.addEventListener("click", () => {
      document.getElementById(tarea.id).remove();
      delete textoArray[tarea.id]; // delete es propiedad de los objetos para eliminar una propiedad
    });

    // Armar estructura
    tarea.appendChild(contenedor);
    tarea.appendChild(boton);

    // Insertar en el área destino
    document.getElementById("Div_contenedorDeTares").appendChild(tarea);
    // contador para el id
    contador++;
    contadorColor++;
    if (contadorColor == 6) {
      contadorColor = 0;
      console.log("se reinicia el color");
      console.log(contadorColor);
    }
  } else {
    alert("Ingrese algo antes de agregar");
  }
  console.log(textoArray);
}
