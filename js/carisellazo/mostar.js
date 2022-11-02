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

    if (opcion==1 && opcion == random) {
        contador = contador + 1;
        suma = apuesta + apuesta; 

        swal.fire({
            title: 'Has Ganadooo, ¡la suerte esta con la cara!'
        }
          ` ${nombre} tu dinero es de ${dinero}`
          `y has jugado ${contador}`
            
        );
        
    }

    else if (opcion==2 && opcion == random) {

        contador = contador + 1;
        suma = apuesta + 100;

        swal.fire({
            title: 'Has Ganadooo, ¡la suerte esta con el sello!'
        }
          ` ${nombre} tu dinero es de ${dinero}`
          `y has jugado ${contador}`
            
        );

    }
    else if (opcion==1 && opcion !== random) {
        
        contador = contador + 1;
        suma = apuesta - apuesta;
        swal.fire({
            title: 'Lo sentimos, has perdio... Cara no era'
        }
          ` ${nombre} tu dinero es de ${dinero}`
          `y has jugado ${contador}`
            
        );

    }
    else if (opcion==2 && opcion !== random) {
       
        contador = contador + 1;
        suma = apuesta - 100;

    }
    swal.fire({
        title: 'Lo sentimos, has perdio... Sello no era'
    }
      ` ${nombre} tu dinero es de ${dinero}`
      `y has jugado ${contador}`
        
    );
    
    jugar.style.display = "none";
    iniciar.style.display = "none";
    seguir.style.display = "block";
   

})



let irme = document.getElementById(irme)

irme.addEventListener("click", () => {

   

})