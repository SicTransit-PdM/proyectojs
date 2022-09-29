const juegos = [{
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

// CONTENEDOR CATALOGO
let catalogo = document.querySelector(".catalogo-listado")
// CARRITO
let carrito = ["hola"]
// ALERTA PRODUCTOS EN EL CARRITO
let cantCarrito = document.querySelector("#cantCarrito")
cantCarrito.textContent = carrito.length == 0 ? cantCarrito.classList.add("hidden") : `${carrito.length}`

// FORMATO DE ESCRITURA PRECIOS
let peso = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
})

// TARJETAS DE LA TIENDA
juegos.forEach((juego, i) => {
    // Crear tarjeta
    const card = document.createElement('div');
    card.classList.add("card", "mb-3", "conchatuya");
    card.setAttribute("style", "max-width: 540px;")
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
                        <button type="button" class="btn btn-success rounded-pill btn-agregarCarrito" id="Item${juego.id}">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Fin Tarjeta -->`;
    // Agrega tarjeta creada al contenedor
    catalogo.innerHTML += content;
})

let agregarCarrito = document.querySelectorAll(".btn-agregarCarrito").addEventListener