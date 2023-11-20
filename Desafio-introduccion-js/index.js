let precio = 400000

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
let cantidad = 0
const cantidadSpan = document.querySelector('.cantidad')
cantidadSpan.innerHTML = cantidad

function suma(){
    
    cantidad = cantidad + 1
    document.querySelector(".cantidad").innerHTML=cantidad
    let total = document.querySelector(".valor-total")
    total.innerHTML = precio * cantidad
}
function resta(){
    
    cantidad = cantidad - 1
    document.querySelector(".cantidad").innerHTML=cantidad
    let total = document.querySelector(".valor-total")
    total.innerHTML = precio * cantidad
}
document.getElementById("suma").addEventListener(
    "click",
    suma
)
document.getElementById("resta").addEventListener(
    "click",
    resta
)
