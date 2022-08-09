// Un carrito de productos que suma y hace subtotales para pagar es JS

const funkoQuigon = {
    nombre:"Quigon", 
    precio: 20,
    stock: 10,
}

const funkoLuke = {
    nombre:"Luke", 
    precio: 50,
    stock: 8,
}

const funkoAhsoka = {
    nombre:"Ahsoka", 
    precio: 30,
    stock: 6,
}

const funkoSidious = {
    nombre:"Sidious", 
    precio: 20,
    stock: 10,
}

const funkoVader = {
    nombre:"Vader", 
    precio: 50,
    stock: 8,
}

const funkoMaul = {
    nombre:"Maul", 
    precio: 30,
    stock: 6,
}


let Quigon = document.getElementById('funkoQuin')
let Luke = document.getElementById('funkoLuke')
let Ahsoka = document.getElementById('funkoAhsoka')

let cantidadVendidaQuigon = document.getElementById('cantidadVendidaQuigon')
let carritoQuigon = document.getElementById('carritoQuigon')
let cantidadVendidaLuke = document.getElementById('cantidadVendidaLuke')
let carritoLuke = document.getElementById('carritoLuke')
let cantidadVendidaAhsoka = document.getElementById('cantidadVendidaAhsoka')
let carritoAhsoka = document.getElementById('carritoAhsoka')


let carritoFinal = document.getElementById('carritoFinal')

let Sidious = document.getElementById('funkoSidious')
let Vader = document.getElementById('funkoVader')
let Maul = document.getElementById('funkoMaul')

let cantidadVendidaSidious = document.getElementById('cantidadVendidaSidious')
let carritoSidious = document.getElementById('carritoSidious')
let cantidadVendidaVader = document.getElementById('cantidadVendidaVader')
let carritoVader = document.getElementById('carritoVader')
let cantidadVendidaMaul = document.getElementById('cantidadVendidaMaul')
let carritoMaul = document.getElementById('carritoMaul')


let CantidadVendidaQuingon = 0;
let CantidadVendidaLuke = 0;
let CantidadVendidaAhsoka = 0;

let CantidadVendidaSidious = 0;
let CantidadVendidaVader = 0;
let CantidadVendidaMaul = 0;

let vendido = false;
let total = 0;

let carritoJedi = [];
let carritoSith = [];

Quigon.addEventListener('click',ventaQuigon)

function ventaQuigon(){
    vendido = true
    let nuevoStockQuin = funkoQuigon.stock - CantidadVendidaQuingon
    if (vendido == true && nuevoStockQuin > 1){
        CantidadVendidaQuingon++
        ventaFinalQuigon = CantidadVendidaQuingon * funkoQuigon.precio
        carritoJedi.push(ventaFinalQuigon);
    carritoQuigon.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalQuigon)
    cantidadVendidaQuigon.innerHTML = ("Quedan " + nuevoStockQuin + " Funkos de Quigon")
    } else{
        cantidadVendidaQuigon.innerHTML = ("Producto Agotado")
    }
}

Luke.addEventListener('click',ventaLuke)

function ventaLuke(){
    vendido = true
    let nuevoStockLuke = funkoLuke.stock - CantidadVendidaLuke
    if (vendido == true && nuevoStockLuke > 1){
        CantidadVendidaLuke++
        ventaFinalLuke = CantidadVendidaLuke * funkoLuke.precio
        carritoJedi.push(ventaFinalLuke);
    carritoLuke.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalLuke)
    cantidadVendidaLuke.innerHTML = ("Quedan " + nuevoStockLuke + " Funkos de Luke")
    } else{
        cantidadVendidaLuke.innerHTML = ("Producto Agotado")
    }
}

Ahsoka.addEventListener('click', ventaAhsoka)

function ventaAhsoka(){
    vendido = true
    let nuevoStockAhsoka = funkoAhsoka.stock - CantidadVendidaAhsoka
    if (vendido == true && nuevoStockAhsoka > 1){
        CantidadVendidaAhsoka++
        ventaFinalAhsoka = CantidadVendidaAhsoka * funkoAhsoka.precio
        carritoJedi.push(ventaFinalAhsoka);
    carritoAhsoka.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalAhsoka)
    cantidadVendidaAhsoka.innerHTML = ("Quedan " + nuevoStockAhsoka + " Funkos de Ahsoka")
    } else{
        cantidadVendidaAhsoka.innerHTML = ("Producto Agotado")
    }
}

console.log(carritoJedi)

const precioTotalJedi = carritoJedi.reduce((total, precio) => {
    return total + carrito.precio;
},0);

console.log(precioTotalJedi)

Sidious.addEventListener('click',ventaSidious)

function ventaSidious(){
    vendido = true
    let nuevoStockSidious = funkoSidious.stock - CantidadVendidaSidious
    if (vendido == true && nuevoStockSidious > 1){
        CantidadVendidaSidious++
        ventaFinalSidious = CantidadVendidaSidious * funkoSidious.precio
        carritoSith.push(ventaFinalSidious);
    carritoSidious.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalSidious)
    cantidadVendidaSidious.innerHTML = ("Quedan " + nuevoStockSidious + " Funkos de Darth Sidious")
    } else{
        cantidadVendidaSidious.innerHTML = ("Producto Agotado")
    }
}

Vader.addEventListener('click',ventaVader)

function ventaVader(){
    vendido = true
    let nuevoStockVader = funkoVader.stock - CantidadVendidaVader
    if (vendido == true && nuevoStockVader > 1){
        CantidadVendidaVader++
        ventaFinalVader = CantidadVendidaVader * funkoVader.precio
        carritoSith.push(ventaFinalVader);
    carritoVader.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalVader)
    cantidadVendidaVader.innerHTML = ("Quedan " + nuevoStockVader + " Funkos de Darth Vader")
    } else{
        cantidadVendidaVader.innerHTML = ("Producto Agotado")
    }
}

Maul.addEventListener('click',ventaMaul)

function ventaMaul(){
    vendido = true
    let nuevoStockMaul = funkoMaul.stock - CantidadVendidaMaul
    if (vendido == true && nuevoStockMaul > 1){
        CantidadVendidaMaul++
        ventaFinalMaul = CantidadVendidaMaul * funkoMaul.precio
        carritoSith.push(ventaFinalMaul);
    carritoMaul.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalMaul)
    cantidadVendidaMaul.innerHTML = ("Quedan " + nuevoStockMaul + " Funkos de Darth Maul")
    } else{
        cantidadVendidaMaul.innerHTML = ("Producto Agotado")
    }
}

console.log(carritoSith)