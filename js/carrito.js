const pintarCarrito =() => {
    modalContainer.innerHTML =""
    modalContainer.style.display = "flex"

    const modalheader = document.createElement("div")
    modalheader.className = "modal-header"
    modalheader.innerHTML =`<h1 class="modal.header-title">Carrito</h1>`

    modalContainer.append(modalheader)

    const modalbutton = document.createElement("h1")
    modalbutton.innerText = "X"
    modalbutton.className = "modal-header-button"

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    })

    modalheader.append(modalbutton)

    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = 
                                    `
                                    <img src="${product.img}">
                                    <h3> ${product.nombre}</h3>
                                    <p> $${product.precio}</p>
                                    <span class="restar"> - </span>
                                    <p> Cantidad: ${product.cantidad}</p>
                                    <span class="sumar"> + </span>
                                    <p> Total: ${product.cantidad*product.precio}</p>
                                    `
    modalContainer.append(carritoContent)


    let restar = carritoContent.querySelector(".restar")
    restar.addEventListener("click", () =>{
        if(product.cantidad !==1){
        product.cantidad--}
        pintarCarrito()
        saveLocal()
    })

    let sumar = carritoContent.querySelector(".sumar")
    sumar.addEventListener("click", () =>{
        if(product.cantidad !==1){
        product.cantidad++}
        pintarCarrito()
        savelocar()
    })

    let eliminar = document.createElement("span")
    eliminar.innerText = "X"
    eliminar.className = "delete-product"
    carritoContent.append(eliminar)

    eliminar.addEventListener("click", eliminarProducto)

    })

    const total = carrito.reduce((acc,el)=> acc + el.precio * el.cantidad,0)

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: $${total}`

    const botonfinalizarcompra = document.createElement("div")
    botonfinalizarcompra.innerText= "Finalizar Compra"
    botonfinalizarcompra.className= "finaliar-compra"


    modalContainer.append(totalBuying)
    totalBuying.append(botonfinalizarcompra)

    botonfinalizarcompra.addEventListener("click", finalizarcompra)

    function finalizarcompra(){
        Swal.fire({
            title: `Esta seguro de realizar la compra`,
            icon: `info`,
            showCancelButton: true,
            confirmButtonText: `Si, estoy seguro`,
            confirmButtonColor: `green`,
            cancelButtonColor: `red`
        })
    }
}

function finalizarcompra(){
    console.log("funciona")
}

verCarrito.addEventListener("click", pintarCarrito)


const eliminarProducto = () => {
    const foundId = carrito.find((Element) => Element.id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    })
    carritoCounter()
    saveLocal()
    pintarCarrito()
}

const carritoCounter = () => {
    cantidadCarrito.style.display = "block"

    const carritoLength = carrito.length

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))

    cantidadCarrito.innerText = carrito.length

}

carritoCounter()