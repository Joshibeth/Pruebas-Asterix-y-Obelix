
const asterix = {
        image: "img/asterix.jpg",
        weapons: {
            puño: 1,
            pierna: 2,
            bofetada: 3,
            sentadilla: 4,
            pocion: null
        }
    };

    const cilindrix = {
        image: "img/cilindrix.jpg",
        weapons: {
            llave: 1,
            luxacion: 2,
            bofetada: 3,
            sentadilla: 4
        }
    };

    const fightButton = document.querySelector(".button_message");
    const asterixPointsDisplay = document.querySelector(".asterix-points");
    const cilindrixPointsDisplay = document.querySelector(".cilindrix-points");
    const asterixAttackDisplay = document.querySelector(".asterix-attack");
    const cilindrixAttackDisplay = document.querySelector(".cilindrix-attack");
    const messageWinnerAsterix = document.querySelector(".message-winner-asterix");
    const messageWinnerCilindrix = document.querySelector(".message-winner-cilindrix");

    let asterixPoints = 0;
    let cilindrixPoints = 0;

    messageWinnerAsterix.style.display = 'none';
    messageWinnerCilindrix.style.display = 'none';

    //event listener para ejecutar la función fight
    fightButton.addEventListener("click", fight);


    //funcion para obtener un ataque aleatorio para cada jugador
    function getRandomWeapon(player) {
        const weapons = Object.keys(player.weapons); //variable con el array de las armas del jugador
        const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)]; //índice aleatorio para seleccionar un arma
        return { name: randomWeapon, value: player.weapons[randomWeapon] }; //devuelve nombre del arma y su valor
    }

    function fight() { //funcion para obtener ataques aleatorios para ambos personajes.
        const asterixAttack = getRandomWeapon(asterix); 
        const cilindrixAttack = getRandomWeapon(cilindrix);


        //se muestra el contenido de texto con el ataque de cada jugador con su valor
        asterixAttackDisplay.textContent = `Ataque: ${asterixAttack.name} (${asterixAttack.value})`;
        cilindrixAttackDisplay.textContent = `Ataque: ${cilindrixAttack.name} (${cilindrixAttack.value})`;

        if (asterixAttack.value > cilindrixAttack.value) { //si el valor de asterix es mayor que cilindrix:
            asterixPoints++; // 1 punto + para asterix
        } else if (asterixAttack.value < cilindrixAttack.value) { //lo mismo pero con cilindrix
            cilindrixPoints++;
        }

        //contenido texto con el contador de puntos totales
        asterixPointsDisplay.textContent = `Puntos: ${asterixPoints}`;
        cilindrixPointsDisplay.textContent = `Puntos: ${cilindrixPoints}`;

        checkWinner();
    }

    //funcion para verificar si algun jugador ha alcanzado 5 puntos
    function checkWinner() {
        if (asterixPoints === 5) { //si los puntos de asterix son 5
            asterixPointsDisplay.textContent = "Puntos: 5";
            messageWinnerAsterix.style.display = "flex"; //muestra mensaje winner
            fightButton.disabled = true; //se apaga el botón de fight
        } else if (cilindrixPoints === 5) { //lo mismo pero con cilindrix
            cilindrixPointsDisplay.textContent = "Puntos: 5";
            messageWinnerCilindrix.style.display = "flex";
            fightButton.disabled = true;
        }
    }



