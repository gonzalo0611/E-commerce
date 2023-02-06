const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("vercarrito")
const modalContainer = document.getElementById("modal-Container")
const bodyContent = document.getElementById("bodyContent")
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito =  JSON.parse(localStorage.getItem("carrito")) || []

let usuario = prompt("ingrese su nombre")

let seleccion = prompt(`bienvenido ${usuario} desea comprar algun producto en la tienda si o no`)

while(seleccion !="si" && seleccion !="no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("hola desea comprar algun producto si o no")
}if(seleccion == "si"){
    alert("se mostrara la tienda")
}else if(seleccion == "no"){
    alert(`gracias por su visita ${usuario}`)
    bodyContent.style.display = "none"
}


productos.forEach((product) => {
    let content = document.createElement("div")
    content.className = "card"
    content.innerHTML = 
                        `
                        <img src="${product.img}">
                        <h3> ${product.nombre}
                        <p class="price">$${product.precio}</p>
                        `
    shopContent.append(content)

    let comprar = document.createElement("button")
    comprar.innerText = "comprar"
    comprar.className = "comprar"

    content.append(comprar)

    comprar.addEventListener("click", () =>{

    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id)

    if(repeat){
        carrito.map((prod) => {
            if(prod.id === product.id){
                prod.cantidad++
            }
        })
    }else {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad
            })
        }   
        carritoCounter()
        saveLocal()
    })
})


// storage
const saveLocal = () => {
localStorage.setItem("carrito", JSON.stringify(carrito))
}

JSON.parse(localStorage.getItem("carrito"))
