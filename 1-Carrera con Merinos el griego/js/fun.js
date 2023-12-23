const progressBar = document.querySelector('.progress');
const runButton = document.querySelector('.button-run');
const mainImage = document.querySelector('.mainImg');
const mensajeElement = document.querySelector('.mensaje');


//variables de seguimiento:

let clicks = 0; // cuenta del número de clicks
const maxClicks = 20; //número máximo de clics necesarios
let progressBarInterval; // identificador del intervalo de la barra de progreso
let timerStarted = false; //temporizador en false (aun no ha comenzado)

// Ocultar el mensaje al inicio de cargar la página
mensajeElement.style.display = 'none';


//evento del click en el botón
runButton.addEventListener('click', gestionClick);

//funcion que se ejecutará una vez se haga click en el botón:

function gestionClick() { 

    if (!timerStarted) {  

        timerStarted = true;  //si es verdad que el temporizador no ha empezado, entonces ahora si, evitando que se incie nuevamente con clics adicionales

        startTimer(); //inicia esta funcion una vez se da click en el boton
    }


    
    //funcion para reiniciar el temporizador una vez terminado 3 s

    function startTimer() {

        setTimeout(() => {  

            if (clicks < maxClicks) { //si el nº de clics es menor que 20

                resetProgress(); //reiniciar progreso de clics, barra de progreso y tiempo
            }
        }, 3000);
    }


    updateProgressBar(); //actualizar barra de progreso

    clicks++; // al incrementar nº clics


    // funcion para actualizar barra de progreso

        function updateProgressBar() {
            const progress = (clicks / maxClicks) * 100; // calcula el progreso en porcentaje
            progressBar.style.width = `${progress}%`; //actualiza anchura de la barra de progreso
        }



    //funcion para verificar si se alcanzó el nº de clics

    if (clicks >= maxClicks) { //si elnº de clics es mayor o igual a 20
        clearInterval(progressBarInterval); //entonces deten la barra de progreso
        mainImage.src = 'img/end.png'; // Cambia la ruta de la imagen final
        mensajeElement.style.display = 'block'; // Mostrar el mensaje al cumplir el reto
        resetProgress(); //reiniciar nuevamente progreso
    }
}


//funcion para reiniciar progreso

function resetProgress() {
    clicks = 0;  //empieza el contador a cero de nuevo
    progressBar.style.width = '0'; //empieza la anchura de la barra de progreso a 0
    timerStarted = false; //reinicia eltemporizador a no ha empezado
}

