arrayimg = ["./imagenes/png-jpg/edificio2.jpg", "./imagenes/png-jpg/Ballena Beluga.jpg",
    "./imagenes/png-jpg/edificio1.png"]

i = 0

function imgchange(num) {
    switch (num) {
        case 1:
            i++
            if (i > arrayimg.length - 1) {
                i = 0;
            }
            imgchooser(i)
            break;
        case -1:
            i--
            if (i == -1) {
                i = arrayimg.length-1
            }
            imgchooser(i)
            break;
    }
}

function imgchooser(num2) {
    let img1 = document.getElementById("imgcrs")
   
    let steps=500;
    let duration=750;
    let opacityStep=1/steps;
    let actualOpacity=0;

    for (let step=0; step<=steps; step++) {
        setTimeout(() => {
            img1.style.opacity=actualOpacity;
            actualOpacity += opacityStep;         
    }, (step*duration/steps));
    }
    img1.src = arrayimg[num2];


    let img4
    for (let k = 0; k < arrayimg.length; k++) {
        img4 = document.getElementById(k)
        if(k == num2) {
            img4.removeAttribute("class", "off")
            img4.setAttribute("class", "active")
        } else {
            img4.setAttribute("class", "off")
        }
    }
}

function imgt() {
    for (let j = 0; j < arrayimg.length; j++) {
        let img2 = document.getElementById("thumbnailcrs")
        let img3 = document.createElement("img")
        img3.setAttribute("onclick", `imgchooser(${j})`)
        img3.setAttribute("id", j)
        img3.setAttribute("name", "thumbnail")
        console.log(img3)
        img3.src = arrayimg[j]
        img2.appendChild(img3)
    }
    let img5 = document.getElementById(0)
    img5.setAttribute("class", "active")
}