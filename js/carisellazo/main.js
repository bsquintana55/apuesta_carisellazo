    
    //botones
    let jugar = document.getElementById("jugar")
    let iniciar = document.getElementById("iniciar")

    //recursos 
    let moneda = document.getElementById("moneda")
    let mano = document.getElementById("mano")
    let todo = document.getElementById("todo")

            //visibilidad de pag inicio -- requisito 10
            jugar.style.display = "none"
            todo.style.display = "none"
            moneda.style.display = "block"
            mano.style.display = "none"

            //visibilidad para juego y req 1
            iniciar.addEventListener("click", () => {
                moneda.style.display = "none"
                mano.style.display = "block"
                todo.style.display = "block"
                iniciar.style.display = "none"
                jugar.style.display = "block"
                
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

            alert( 
            ` ${nombre} tu dinero es de ${suma} y has jugado ${cont} veces`
            );
           
        }

        else if (opcion==2 && opcion == random) {

            cont = cont + 1;
            // req 5
            suma = suma+(dinero*dinero) ;

            alert(`${nombre} tu dinero es de ${suma}, 
            y has jugado ${cont} veces y sello `

            //` ${nombre} tu dinero es de ${dinero}`
            //`y has jugado ${cont} veces y sello`
                
            );

        }
        else if (opcion !== random) {
        
            cont = cont + 1;
            //req 6
            suma = suma - (dinero*dinero);

        alert(
            `perdiste ${nombre} tu dinero es de ${suma} y has jugado ${cont} veces`
                
            );

        }
        
        
        jugar.style.display = "block";
        iniciar.style.display = "none";
        irme.style.display = "block";
    

    })


    //req 8 
    irme.addEventListener("click", () => {
        alert({
                title: 'Has terminado tu apuesta'
            }
            ` ${nombre} tu dinero total es de ${suma}`
            `y has jugado ${cont} veces`
                
            ); 
    })
