let catalogo = []
const fetchCatalogo = async () =>{
    const res = await fetch("js/data.json")
    return await res.json()
}

fetchCatalogo().then(productos =>{
    catalogo = productos
})
console.log(catalogo)