const fetchCatalogo = async () =>{
    const res = await fetch("js/data.json")
    return await res.json()
}
let catalogo = []
fetchCatalogo().then(productos =>{
    catalogo = productos
    mostrarCatalogo()
})

// FORMATO DE ESCRITURA PRECIOS
let peso = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
})

// CONTENEDOR CATALOGO HTML
let seccionCatalogo = document.querySelector(".catalogo-listado")
// INICIALIZAR CARRITO O CARGAR DEL LOCALSTORAGE SI LO HUBIERA
let carrito = JSON.parse(localStorage.getItem("carritoLS")) || []
// INFO CANTIDAD DE ELEMENTOS EN EL CARRITO
let cantCarrito = document.querySelector("#cantCarrito")
let itemsAgregados = document.querySelector("#items-agregados")
// LISTA DEL CARRITO
let seccionCarrito = document.querySelector("#lista-carrito")
// Subtotal de la lista del carrito
let subtotalCarrito = document.querySelector("#total-carrito")

// RENDERIZAR CATALOGO
function mostrarCatalogo(){
    catalogo.forEach((juego, i) => {
        // Contenido tarjeta
        const content = `
        <!-- Tarjeta Item -->
        <div class="card mb-3 mx-lg-1 bg-gradient bg-dark border border-info" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4 px-md-0 p-4">
                    <img src=${juego.img} class="img-fluid rounded-start" alt="img">
                </div>
                <div class="col-md-8">
                    <div class="card-body text-light">
                        <h5 class="card-title text-warning fw-bold mt-3">${juego.nombre}</h5>
                        <p class="card-text mt-4">${juego.descr}</p>
                        <div class="d-flex align-items-center justify-content-evenly flex-md-column">
                            <p class="card-text mt-4"><small class="text-warning p-2 h5 fw-bold">ARS${peso.format(juego.precio)}</small></p>
                            <button type="button" class="btn btn-success rounded-pill btn-agregar" onclick="agregarCarrito(${juego.id})" id="agregar-${juego.id}">Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Fin Tarjeta -->`;
        // Agrega tarjeta creada al contenedor
        seccionCatalogo.innerHTML += content;
        // DESACTIVA BOTON AGREGAR DE ELEMENTOS QUE YA ESTAN EN EL CARRITO
        if (carrito.find(item => item === juego)){
            document.querySelector(`#agregar-${juego.id}`).classList.add("disabled")
        }
    })
}

mostrarCatalogo()

// RENDERIZACION DEL CARRITO
function mostrarCarrito(){
    carrito.forEach((juego, i) => {
        // Crea el string con el código HTML
        const content = `
        <!-- Item en carrito -->
        <div class="card mb-1 mx-lg-1 border border-primary bg-dark" id="item-${juego.id}" style="max-width: 100%; height: 6rem">
            <div class="row g-0">
                <div class="col-md-4 px-md-0">
                    <img src=${juego.img} height="90" width="175" class="ms-1 rounded-start" alt="img">
                </div>
                <div class="col-md-8">
                    <div class="card-body text-light">
                        <h5 class="card-title text-warning fw-bold">${juego.nombre}</h5>
                        <button type="button" class="btn btn-link btn-sm btn-quitar" onclick="quitarCarrito(${juego.id})" id="quitar-${juego.id}">Quitar</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Fin Item en carrito -->`;
        // Pega el string en el contenedor HTML
        seccionCarrito.innerHTML += content
    })
}

mostrarCarrito()

function actualizarTotal(){
    // Calcula el subtotal
    let totalCarrito = carrito.length == 0 ? 0 : carrito.map(item => item.precio).reduce((a,b)=>a+b); // Crea un array con los precios y lo reduce a la suma
    subtotalCarrito.innerHTML = peso.format(totalCarrito)
    // Actualiza cantidad de elementos en el carrito
    cantCarrito.textContent = carrito.length == 0 ? cantCarrito.classList.add("hidden") : `${carrito.length}`
    itemsAgregados.textContent = carrito.length == 1 ? "1 Item Agregado" : `${carrito.length} Items Agregados`
}

actualizarTotal()

// FUNCION AGREGAR UN CARRITO A LA LISTA
function agregarCarrito(id){
    // Busca el item con el id
    let juego = catalogo.find(item => item.id === id)
    // Lo agrega al array carrito
    carrito.push(juego)
    // Lo agrega al localStorage
    actualizarLS()
    // Desactiva el boton de agregar
    document.querySelector(`#agregar-${juego.id}`).classList.add("disabled")
    // Alerta agregado al carrito
    swal("Agregado!", `Agregaste ${catalogo[id].nombre} al carrito`, "success");
    actualizarTotal()
}

// FUNCION QUITAR ELEMENTO DEL CARRITO
function quitarCarrito(id){
    // Quitar elemento del array carrito
    carrito.splice(carrito.indexOf(carrito.find(item => item.id === id)), 1)
    // Quitar elemento del carrito HTML
    document.querySelector(`#item-${id}`).remove()
    // Volver a activar boton de agregar
    document.querySelector(`#agregar-${id}`).classList.remove("disabled")
    // Alerta eliminado del carrito
    swal("Eliminado", `Eliminaste ${catalogo[id].nombre} del carrito`, "info")
    actualizarTotal()
    // Quitar elemento del localStorage
    actualizarLS()
}

function actualizarLS(){
    localStorage.setItem('carritoLS', JSON.stringify(carrito))
}
