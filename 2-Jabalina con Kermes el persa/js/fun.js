//capturo variables

 const buttonLanzar = document.querySelector(".button-lanzar");
 const puntoRojo = document.querySelector(".punto-rojo");
 const mensajeJuegoTerminado = document.querySelector(".mensaje");
 const mapamundi = document.querySelector(".mapamundi");



 let lanzamientos = 0; //cuenta lanzamientos

 puntoRojo.style.display = 'none'; //que no aparezca p.rojo al principio

 mensajeJuegoTerminado.style.display = 'none'; //no aparezca mensaje al principio


 // Evento de clic para lanzar la jabalina
 buttonLanzar.addEventListener("click", lanzarJabalina);

  // Función para lanzar la jabalina
    function lanzarJabalina() {

    puntoRojo.style.display = "none";  // Oculta el punto rojo

    const randomX = Math.floor(Math.random() * 100);      // Genera coordenadas aleatorias para el punto rojo
    const randomY = Math.floor(Math.random() * 100);

    puntoRojo.style.left = `${randomX}%`;     // Actualiza la posición del punto rojo
    puntoRojo.style.top = `${randomY}%`;

    puntoRojo.style.display = "block";      // Muestra nuevamente el punto rojo


    lanzamientos++;      // Incrementa el contador de lanzamientos


    if (lanzamientos === 10) {       // una vez se alcanzó el límite de lanzamientos (10):

      mensajeJuegoTerminado.style.display = "block";  // Muestra el mensaje de juego terminado

      buttonLanzar.disabled = true;   // Desactiva el botón después de 10 lanzamientos

    }
  }

  
