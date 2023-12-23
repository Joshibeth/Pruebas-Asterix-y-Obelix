const cuerdas = document.querySelectorAll('.string');

    // Asociar eventos de clic a cada cuerda
    cuerdas.forEach(cuerda => {
        cuerda.addEventListener('mouseenter', function () {
            // Obtener la ruta del audio desde el atributo data
            const rutaAudio = cuerda.getAttribute('data-audio');

            // Obtener el elemento de audio correspondiente a la cuerda
            const audio = document.querySelector(`audio[src="${rutaAudio}"]`);

            // Reiniciar el audio para permitir la reproducción repetida
            audio.currentTime = 0;

            // Reproducir el audio
            audio.play();
        });

    });