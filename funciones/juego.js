i = 0
k = 0

gamediv = null
gamediv1 = null
gamebtn1 = null
gamebtn2 = null
gamebtn3 = null
gamebtn4 = null
gameimg1 = null
gamespan = null
gamespan2 = null

arraynum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
shuffleArrayNum(arraynum)
arrayquiz =
    [{ image: "../imagenes/png-jpg/juego/1.png", a1: "Flamenco del Océano", a2: "Pez Coleteado", a3: "Tiburón Blanco", ac: "Delfín" },
    { image: "../imagenes/png-jpg/juego/2.png", a1: "Foca", a2: "Manatí", a3: "Tigre del Mar", ac: "Lobo Marino" },
    { image: "../imagenes/png-jpg/juego/3.png", a1: "Pez Azul", a2: "Pez Espada", a3: "Pez Globo", ac: "Pez Cirujano" },
    { image: "../imagenes/png-jpg/juego/4.png", a1: "Pez Arenoso", a2: "Pez Cirujano", a3: "Pez Naranja", ac: "Pez Payaso" },
    { image: "../imagenes/png-jpg/juego/5.png", a1: "Delfín Alado", a2: "Anguila", a3: "Tiburón Raya", ac: "Mantarraya" },
    { image: "../imagenes/png-jpg/juego/6.png", a1: "Tiburón Ballena", a2: "Tiburón Anguila", a3: "Tiburón Martillo", ac: "Tiburón Tigre" },
    { image: "../imagenes/png-jpg/juego/7.png", a1: "Pingüino Negro", a2: "Pingüino Africano", a3: "Pingüino Emperador", ac: "Pingüino Patagónico" },
    { image: "../imagenes/png-jpg/juego/8.png", a1: "Pez Espinoso", a2: "Pez Koi", a3: "Pez Gato", ac: "Pez Globo" },
    { image: "../imagenes/png-jpg/juego/9.png", a1: "Caracol", a2: "Tortuga Terrestre", a3: "Lagartija de Mar", ac: "Tortuga Marina" },
    { image: "../imagenes/png-jpg/juego/10.png", a1: "Morza", a2: "Lobo Marino", a3: "Pez Payaso", ac: "Foca" },
    ]

function shuffleArrayNum() {
        for (let n = arraynum.length - 1; n > 0; n--) {
          const m = Math.floor(Math.random() * (n + 1));
          [arraynum[n], arraynum[m]] = [arraynum[m], arraynum[n]];
        }
}

function divmaker() {
    //next button
    let next = document.getElementById("next")
    next.removeAttribute("onclick", "quizmaker()")
    next.setAttribute("class", "off")
    //text
    gamediv = document.getElementById("gamediv")
    gamediv1 = document.createElement("p")
    gamediv1.innerText = "¿Qué animal marino es este?"
    gamediv.appendChild(gamediv1)
    //button
    gamebtn1 = document.createElement("div")
    gamebtn2 = document.createElement("div")
    gamebtn3 = document.createElement("div")
    gamebtn4 = document.createElement("div")
    gamebtn1.setAttribute("class", "quizb")
    gamebtn2.setAttribute("class", "quizb")
    gamebtn3.setAttribute("class", "quizb")
    gamebtn4.setAttribute("class", "quizb")
    //img
    gameimg1 = document.createElement("img")
    quizmaker()
    //span
    gamespan = document.getElementById("gamespan")
    gamespan.setAttribute("class", "quizs")

}

function quizmaker() {
    //span
    gamespan = document.getElementById("gamespan")
    gamespan.innerText = ""

    //next button
    let next = document.getElementById("next")
    next.removeAttribute("onclick", "quizmaker()")
    next.setAttribute("class", "off")

    //counter
    gamespan2 = document.getElementById("gamespan2")
    gamespan2.innerText = "Pregunta " + (i + 1) + " " + "de 10."

    //end game
    if (i == 9) {
        endgame()
        return;
    }

    //test
    console.log(arraynum[i])

    //image
    gameimg1.setAttribute("src", arrayquiz[arraynum[i]].image)
    gameimg1.setAttribute("class", "quiz")
    gamediv.appendChild(gameimg1)

    //answers
    let random = Math.floor(Math.random() * 4);
    switch (random) {
        case 0:
            gamebtn1.innerText = arrayquiz[arraynum[i]].a1
            gamebtn2.innerText = arrayquiz[arraynum[i]].a2
            gamebtn3.innerText = arrayquiz[arraynum[i]].a3
            gamebtn4.innerText = arrayquiz[arraynum[i]].ac
            gamebtn1.setAttribute("onclick", "wrong()")
            gamebtn2.setAttribute("onclick", "wrong()")
            gamebtn3.setAttribute("onclick", "wrong()")
            gamebtn4.setAttribute("onclick", "correct()")
            break;
        case 1:
            gamebtn1.innerText = arrayquiz[arraynum[i]].a2
            gamebtn2.innerText = arrayquiz[arraynum[i]].a3
            gamebtn3.innerText = arrayquiz[arraynum[i]].ac
            gamebtn4.innerText = arrayquiz[arraynum[i]].a1
            gamebtn1.setAttribute("onclick", "wrong()")
            gamebtn2.setAttribute("onclick", "wrong()")
            gamebtn4.setAttribute("onclick", "wrong()")
            gamebtn3.setAttribute("onclick", "correct()")
            break;
        case 2:
            gamebtn1.innerText = arrayquiz[arraynum[i]].a3
            gamebtn2.innerText = arrayquiz[arraynum[i]].ac
            gamebtn3.innerText = arrayquiz[arraynum[i]].a1
            gamebtn4.innerText = arrayquiz[arraynum[i]].a2
            gamebtn1.setAttribute("onclick", "wrong()")
            gamebtn4.setAttribute("onclick", "wrong()")
            gamebtn3.setAttribute("onclick", "wrong()")
            gamebtn2.setAttribute("onclick", "correct()")
            break;
        case 3:
            gamebtn1.innerText = arrayquiz[arraynum[i]].ac
            gamebtn2.innerText = arrayquiz[arraynum[i]].a1
            gamebtn3.innerText = arrayquiz[arraynum[i]].a2
            gamebtn4.innerText = arrayquiz[arraynum[i]].a3
            gamebtn4.setAttribute("onclick", "wrong()")
            gamebtn2.setAttribute("onclick", "wrong()")
            gamebtn3.setAttribute("onclick", "wrong()")
            gamebtn1.setAttribute("onclick", "correct()")
            break;
    }
    gamediv.appendChild(gamebtn1)
    gamediv.appendChild(gamebtn2)
    gamediv.appendChild(gamebtn3)
    gamediv.appendChild(gamebtn4)
    i++
}

function correct() {
    gamespan.innerText = "Correcto."
    let next = document.getElementById("next")
    next.setAttribute("onclick", "quizmaker()")
    next.removeAttribute("class", "off")
    next.setAttribute("class", "on")
    k++
    disable()
}

function wrong() {
    gamespan.innerText = "Incorrecto."
    let next = document.getElementById("next")
    next.setAttribute("onclick", "quizmaker()")
    next.removeAttribute("class", "off")
    next.setAttribute("class", "on")
    disable()
}

function disable() {
    gamebtn1.removeAttribute("onclick")
    gamebtn2.removeAttribute("onclick")
    gamebtn3.removeAttribute("onclick")
    gamebtn4.removeAttribute("onclick")
}

function endgame() {
    if (k == 0) {
        gamespan.innerText = "Muy bien, ha terminado.\nLamentablemente ninguna respuesta fue correcta."
    } else if (k == 1) {
        gamespan.innerText = "Muy bien, ha terminado.\nPudiste resolver " + k + " pregunta correctamente."
    } else {
        gamespan.innerText = "Muy bien, ha terminado.\nPudiste resolver " + k + " preguntas correctamente."
    }

}