let jugar = document.getElementById("jugar")
let iniciar = document.getElementById("iniciar")
let seguir = document.getElementById("segunda")

let moneda = document.getElementById("moneda")
let mano = document.getElementById("mano")
let todo = document.getElementById("todo")


jugar.style.display = "none"
todo.style.display = "none"
moneda.style.display = "none"

iniciar.addEventListener("click", () => {
    mano.style.display = "none"
    moneda.style.display = "block"
    todo.style.display = "block"
    iniciar.style.display = "none"
    jugar.style.display = "block"
    seguir.style.display = "none"
})


jugar.addEventListener("click", () => {

    
    let nombre = document.getElementById('nombre').value;
    let dinero = document.getElementById('dinero').value;
    let opcion = document.getElementById('opcion').value;
   
    let suma = 0,
        contador = 0, 
        random;

    random = Math.floor(Math.random() * 2) + 1;
    random=parseInt(random)
    opcion = parseInt(opcion)


})



let irme = document.getElementById(irme)

irme.addEventListener("click", () => {

   

})