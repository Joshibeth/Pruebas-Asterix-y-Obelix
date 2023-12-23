// Capturo elementos
const imgOjos = document.querySelector('.img-ojos');
const buttonOjos = document.querySelector ('.button-ojos');
const bocadillo = document.querySelector ('.bocadillo');
const frase = document.querySelector ('.frase');

imgOjos.style.display = 'none';
bocadillo.style.display = 'none';
frase.style.display = 'none';


buttonOjos.addEventListener('click', () => {

    // Mostrar
    imgOjos.style.display = 'block';
    bocadillo.style.display = 'block';
    frase.style.display = 'block';
});