    
    //botones
    let jugar = document.getElementById("jugar")
    let iniciar = document.getElementById("iniciar")
    let irme = document.getElementById("irme")
    let info = document.getElementById("info")
    //recursos 
    let moneda = document.getElementById("moneda")
    let mano = document.getElementById("mano")
    let todo = document.getElementById("todo")

            //visibilidad de pag inicio -- requisito 10
            jugar.style.display = "none"
            todo.style.display = "none"
            moneda.style.display = "block"
            mano.style.display = "none"
            info.style.display = "none"

            //visibilidad para juego y req 1
            iniciar.addEventListener("click", () => {
                moneda.style.display = "none"
                mano.style.display = "block"
                todo.style.display = "block"
                iniciar.style.display = "none"
                jugar.style.display = "block"
                info.style.display = "block"

              
                
            })


        //funcion del juego
        //nombre, dinero y la opcion de jugador --- req 11, 2 y 3
        let nombre = document.getElementById('nombre').value;
        
       

        //declarar variables
        let suma = 0,
            cont = 0, 
            random;


    jugar.addEventListener("click", () => {

    // req 9

    let opcion = document.getElementById('opcion').value;
    opcion = parseInt(opcion)
    let dinero = document.getElementById('dinero').value;
            dinero=parseInt(dinero)

        random = Math.floor(Math.random() * 2) + 1;
        random=parseInt(random)
        console.log(random)
        //requisito 4 y 7
        if (opcion==1 && opcion == random) {
            cont = cont + 1;
            // req 5
            suma = suma+(dinero*dinero) ;

          //  Swal.fire(
            //` ${nombre} tu dinero es de ${suma} y has jugado ${cont} veces`
           // );

            Swal.fire({
                icon: 'success',
                title: 'Muy Bien... Cara era',
                text: '¡has ganado '+nombre+' en este momento tienes '+suma+' dolares',
                footer: 'vas '+cont+' partidas'
              })

        }

        else if (opcion==2 && opcion == random) {

            cont = cont + 1;
            // req 5
            suma = suma+(dinero*dinero) ;

            Swal.fire({
                icon: 'success',
                title: 'Muy Bien... Sello era',
                text: '¡has ganado '+nombre+' en este momento tienes '+suma+' dolares',
                footer: 'vas '+cont+' partidas'
              })

        }
        else if (opcion !== random) {
        
            cont = cont + 1;
            //req 6
            suma = suma - (dinero*dinero);

            Swal.fire({
                icon: 'warning',
                title: '¡¡Rayoooss!!',
                text: '¡has perdido esta vez '+nombre+' en este momento tienes '+suma+' dolares',
                footer: 'vas '+cont+' partidas'
              })

        }
        
        
        jugar.style.display = "block";
        iniciar.style.display = "none";
        irme.style.display = "block";

          //req 8 
         
          info.addEventListener("click", () => {
            let nombre = document.getElementById('nombre').value;
            //info
            sumatotal=suma
            if (sumatotal < 10) {
              Swal.fire({
                icon: 'info',
                title: '¡Has terminado!',
                text: '¡'+nombre+' en este momento debes '+sumatotal+' dolares!',
                footer: 'jugaste '+cont+' partidas',
                showConfirmButton: false,
                timer: 3000
    
            })
            .then((result) => {
                window.location.href = "./index.html";
          })
            } else {
              Swal.fire({
                icon: 'info',
                title: '¡Has terminado!',
                text: '¡'+nombre+' en este momento tienes '+sumatotal+' dolares!',
                footer: 'jugaste '+cont+' partidas',
                showConfirmButton: false,
                timer: 3000
    
            })
            .then((result) => {
                window.location.href = "./index.html";
          })
            }
             
    
        })

    })


  

 /*    
    info.addEventListener("click", () => {
        //info

          Swal.fire({
            icon: 'info',
            title: '¡Has terminado!',
            text: '¡'+nombre+' en este momento tienes '+suma+' dolares',
            text: 'espero que volvamos a jugar :)',
            footer: 'jugaste '+cont+' partidas',
            showConfirmButton: false,
            timer: 3000

        })
        .then((result) => {
            window.location.href = "./index.html";
      })

    })

    irme.addEventListener("click", () => {
        //info
        
         Swal.fire({
                icon: 'info',
                title: '¡Has terminado!',
                text: '¡'+nombre+' en este momento tienes '+suma+' dolares',
                text: 'espero que volvamos a jugar :)',
                footer: 'jugaste '+cont+' partidas',
                showConfirmButton: false,
                timer: 3000
            })
           
    })*/        
        /*  Swal.fire({
                icon: 'info',
                title: '¡Has terminado!',
                text: '¡'+nombre+' en este momento tienes '+suma+' dolares',
                text: 'espero que volvamos a jugar :)',
                footer: 'jugaste '+cont+' partidas',
                showConfirmButton: false,
                timer: 3000

            })
            
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            .then((result) => {

                window.location.href = "./index.html";
        
          })
            
            
            */