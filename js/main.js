const catalogo = [{
    id: 0,
    nombre: "FIFA 23",
    precio: 8999,
    cat: "Deportes",
    descr : "FIFA 23 nos acerca a The World's Game con la tecnología HyperMotion2 que ofrece una experiencia de juego aún más realista, la FIFA World Cup™ masculina y femenina disponibles durante la temporada, clubes femeninos, función de juego cruzado y mucho más.",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/51e0f86b7cb74096e922bd52653bd235.png"
},{
    id: 1,
    nombre: "Grand Theft Auto V",
    precio: 636.74,
    cat: "Acción",
    descr: "Grand Theft Auto V para PC ofrece a los jugadores la opción de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolución de 4K y disfrutar del juego a 60 fotogramas por segundo.",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/0e040bec2a8d70eeff1f194b3bc9b318.png"
},
{
    id: 2,
    nombre: "Cyberpunk 2077",
    precio: 2199,
    cat: "Aventura",
    descr: "Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales.",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/4030e2eebb977639f8836aa25a293e40.png"
},{
    id: 3,
    nombre: "Naraka: Bladepoint",
    precio: 1499,
    cat: "Aventura",
    descr: "NARAKA: BLADEPOINT es una experiencia de combate y acción para hasta 60 jugadores con enfrentamientos cuerpo a cuerpo basados en las artes marciales, movimientos que desafían la gravedad, héroes personalizables dotados de habilidades épicas y un gran arsenal de armas.",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/fb47c25fc95d570c64da98d33a5cd5b1.jpg"
},{
    id: 4,
    nombre: "Dead By Daylight",
    precio: 999,
    cat: "Acción",
    descr: "Dead by Daylight es un juego de horror de multijugador (4 contra 1) en el que un jugador representa el rol del asesino despiadado y los 4 restantes juegan como supervivientes que intentan escapar de él para evitar ser capturados y asesinados.",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/e094a58c3495647287f75da5f6a7f6f3.png"
},{
    id: 5,
    nombre: "DayZ",
    precio: 2499.99,
    cat: "Acción",
    descr: "¿Cuánto podrás sobrevivir en un mundo posapocalíptico? Es una tierra plagada de zombis infectados donde compites por recursos escasos. ¿Colaborarás con desconocidos y permaneceréis juntos? ¿O irás de lobo solitario para evitar traiciones? Esto es DayZ. Esta es tu historia.",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/14427d5922b8d913b52a55ee875afe1b.png"
},{
    id:6,
    nombre: "Total War: WARHAMMER III",
    precio: 3920.99,
    cat: "Estrategia",
    descr: "El final cataclísmico de la trilogía de Total War™: WARHAMMER® ha llegado. Reagrupa a tus fuerzas y adéntrate en el Reino del Caos, una dimensión de terrores horripilantes en la que se decidirá el destino del mundo. ¿Conquistarás a tus demonios... o los dirigirás?",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/167eca22b109f6b447bc834320c90a23.png"
},{
    id:7,
    nombre: "Elden Ring",
    precio: 6499,
    cat: "Aventura",
    descr: "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/13e02498b2ae3df0c9078db2f9eb9b2d.webp"
},{
    id: 8,
    nombre: "Red Dead Redemption 2",
    precio: 2499,
    cat: "Acción",
    descr: "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era. También incluye acceso al mundo multijugador compartido de Red Dead Online.",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/8a27d37cd175197e87c02a7fc7eb192d.png"
},{
    id: 9,
    nombre: "Left 4 Dead 2",
    precio: 129.99,
    cat: "Acción",
    descr: "Ambientado en el apocalipsis zombi, Left 4 Dead 2 (L4D2) es la esperadísima secuela del galardonado Left 4 Dead, el juego cooperativo número 1 de 2008. Este FPS cooperativo de acción y terror os llevará a ti y a tus amigos por las ciudades, pantanos y cementerios del Sur Profundo, desde Savannah hasta Nueva Orleans, a lo largo de cinco extensas campañas",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/248fc45afe6980b6b520b592ff9de696.png"
}]

// FORMATO DE ESCRITURA PRECIOS
let peso = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
})
// CONTENEDOR CATALOGO HTML
let catalogoHTML = document.querySelector(".catalogo-listado")
// INICIALIZAR CARRITO O CARGAR DEL LOCALSTORAGE SI LO HUBIERA
let carrito = JSON.parse(localStorage.getItem("carritoLS")) || []
// INFO CANTIDAD DE ELEMENTOS EN EL CARRITO
let cantCarrito = document.querySelector("#cantCarrito")
cantCarrito.textContent = carrito.length == 0 ? cantCarrito.classList.add("hidden") : `${carrito.length}`
let itemsAgregados = document.querySelector("#items-agregados")
itemsAgregados.textContent = carrito.length == 1 ? "1 Item Agregado" : `${carrito.length} Items Agregados`
// LISTA DEL CARRITO
let listaCarrito = document.querySelector("#lista-carrito")
// Subtotal de la lista del carrito
let totalCarrito = 0
document.querySelector("#total-carrito").innerHTML = peso.format(totalCarrito)
// Solucion provisoria problema items duplicados en carrito al cargar el carrito LS (Usado en la funcion agregarCarrito y al inicializar la lista del carrito de HTML)
let noInicializoLS = true



// TARJETAS DE LA TIENDA
catalogo.forEach((juego, i) => {
    // Crear tarjeta
    /*const card = document.createElement('div');
    card.classList.add("card", "mb-3");
    card.setAttribute("style", "max-width: 540px;")*/
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
                        <button type="button" class="btn btn-success rounded-pill btn-agregar" id="agregar-${juego.id}">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Fin Tarjeta -->`;
    // Agrega tarjeta creada al contenedor
    catalogoHTML.innerHTML += content;

})

// CARGAR LISTA DEL CARRITO DE LS
if (localStorage.getItem("carritoLS")){
    noInicializoLS = false
    JSON.parse(localStorage.getItem("carritoLS")).forEach((juego, i) => {
        agregarCarrito(i)
        quitarLS(i)
        totalCarrito -1
        document.querySelector(`#agregar-${juego.id}`).classList.add("disabled") // Si estaba mas arriba no tenia boton que leer
    })
    noInicializoLS = true
}

// BOTON AGREGAR AL CARRITO
const btnAgregar = document.querySelectorAll(".btn-agregar")
btnAgregar.forEach((boton, i) => {
    let botonAgregar = document.querySelector(`#agregar-${i}`)
    botonAgregar.addEventListener('click', () => {
        agregarCarrito(catalogo[i].id)
        swal("Agregado!", `Agregaste ${catalogo[i].nombre} al carrito`, "success");
        document.querySelector(`#agregar-${i}`).classList.add("disabled")
    })
})

// BOTON QUITAR DEL CARRITO (alternativa dentro de la funcion agregarCarrito)
/*function btnQuitar(){
const btnQuitar = document.querySelectorAll(".btn-quitar")
btnQuitar.forEach((boton, i) => {
    let botonQuitar = document.querySelector(`#quitar-${i}`)
    botonQuitar.addEventListener('click', () => {
        quitarCarrito(catalogo[i].id)
        alert(`Quitaste ${catalogo[i].nombre} del carrito`)
    })
})
}*/

// FuNCION AGREGAR UN CARRITO A LA LISTA
function agregarCarrito(id){
    // Busca el item con el id
    let juego = catalogo.find(item => item.id === id)
    // Lo agrega al array carrito
    if (noInicializoLS){
    carrito.push(juego)
    }
    // Lo agrega al localStorage
    agregarLS(juego)
    // Crea el string con el código HTML
    const content = `
    <!-- Item en carrito -->
    <div class="card mb-1 mx-lg-1 border border-primary bg-dark" id="item-${id}" style="max-width: 100%; height: 6rem">
        <div class="row g-0">
            <div class="col-md-4 px-md-0">
                <img src=${juego.img} height="90" width="175" class="ms-1 rounded-start" alt="img">
            </div>
            <div class="col-md-8">
                <div class="card-body text-light">
                    <h5 class="card-title text-warning fw-bold">${juego.nombre}</h5>
                    <button type="button" class="btn btn-link btn-sm btn-quitar" id="quitar-${juego.id}">Quitar</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Fin Item en carrito -->`;
    // Pega el string en el contenedor HTML
    listaCarrito.innerHTML += content
    // Suma el precio del item al total
    totalCarrito += juego.precio
    // Calcula el monto total
    document.querySelector("#total-carrito").innerHTML = peso.format(totalCarrito)
    // Actualiza cantidad de elementos en el carrito
    cantCarrito.textContent = carrito.length == 0 ? cantCarrito.classList.add("hidden") : `${carrito.length}`
    itemsAgregados.textContent = carrito.length == 1 ? "1 Item Agregado" : `${carrito.length} Items Agregados`
    // Agrega al localStorage
    // BOTON QUITAR
    let botonQuitar = document.querySelector(`#quitar-${id}`)
    botonQuitar.addEventListener('click', () => {
        swal("Eliminado", `Eliminaste ${juego.nombre} del carrito`, "info")
        quitarCarrito(juego.id)
    })
    console.log(carrito)
    console.log(totalCarrito)
}

// FUNCION QUITAR ELEMENTO DEL CARRITO
function quitarCarrito(id){
    // Quitar elemento del array carrito
    console.log(`ANTES cant:${carrito.length} ${carrito}`)
    carrito.splice(carrito.indexOf(carrito.find(item => item.id === id)), 1)
    console.log(`DESPUES cant:${carrito.length} ${carrito}`)
    // Quitar elemento del localStorage
    quitarLS(id)
    // Quitar elemento del carrito HTML
    document.querySelector(`#item-${id}`).remove()
    // Volver a activar boton de agregar
    document.querySelector(`#agregar-${id}`).classList.remove("disabled")
    // Actualizar el subtotal
    totalCarrito -= catalogo[id].precio
    document.querySelector("#total-carrito").innerHTML = peso.format(totalCarrito)
    // Actualizar cantidad de elementos en el carrito
    cantCarrito.textContent = carrito.length == 0 ? cantCarrito.classList.add("hidden") : `${carrito.length}`
    itemsAgregados.textContent = carrito.length == 1 ? "1 Item Agregado" : `${carrito.length} Items Agregados`
}

function agregarLS(juego){
    let carritoLS = JSON.parse(localStorage.getItem("carritoLS")) || []
    carritoLS.push(juego)
    localStorage.setItem("carritoLS", JSON.stringify(carritoLS))
}

function quitarLS(id){
    let carritoLS = JSON.parse(localStorage.getItem("carritoLS")) || []
    carrito.indexOf(carrito.find(item => item.id === id))
    carritoLS.splice(id, 1)
    localStorage.setItem("carritoLS", JSON.stringify(carritoLS))
}