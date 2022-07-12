class Producto {
    constructor(guitarra, precioc, preciov, stock) {
        this.guitarra = guitarra
        this.precioc = precioc
        this.preciov = preciov
        this.stock = stock
    }
}



const productos = []

const form = document.querySelector('#idForm')
const divProductos = document.querySelector('#divProductos')
const botonProductos = document.querySelector('#botonProductos')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let guitarra = document.getElementById('idGuitarra').value
    let precioc = parseFloat(document.getElementById('idPrecioC').value)
    let preciov = parseFloat(document.getElementById('idPrecioV').value)
    let stock = parseInt(document.getElementById('idStock').value)

    const producto = new Producto(guitarra, precioc, preciov, stock)

    productos.push(producto)
    console.log(productos)

    form.reset()
})

document.querySelector('#botonProductos').addEventListener('click', () => {
    productos.forEach(producto => {
        divProductos.innerHTML +=   `
            <div class="card" style="widht: 18rem;margin:3px;">
                <div class="card-body">
                    <h5 class="card-title">Guitarra: ${producto.guitarra}</h5>
                    <p class="card-text">Precio de compra: ${producto.precioc}</p>
                    <p class="card-text">Precio de venta: ${producto.preciov}</p>
                    <p class="card-text">Stock disponible: ${producto.stock}</p>
                </div>
            </div>
        `        
    })
})
