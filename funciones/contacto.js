function clear() {
    let nombre = document.getElementById("nombre")
    let email = document.getElementById("email")
    let telefono = document.getElementById("telefono")
    let mensaje = document.getElementById("mensaje")

    nombre.value = ""
    email.value = ""
    telefono.value = ""
    mensaje.value = ""
}

document.addEventListener("DOMContentLoaded", function () {
    // Agrega listener al boton de envío del formulario
    document.getElementById("formulario-contacto").addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Validar el formulario
        // Se usa la funcion trim() para que elimine los espacios en blanco que pudieran existir en el value
        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        // Validar que no existan campos vacíos
        if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
            //nombre.style("background:red")
            nombre = document.getElementById("nombre")
            email = document.getElementById("email")
            telefono = document.getElementById("telefono")
            mensaje = document.getElementById("mensaje")
            nombre.style.backgroundColor = "#ffaea8"
            email.style.backgroundColor = "#ffaea8"
            telefono.style.backgroundColor = "#ffaea8"
            mensaje.style.backgroundColor = "#ffaea8"
            return;
        }

        // Validar el formato del email
        let patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!patronEmail.test(email)) {
            //alert("Por favor, ingrese un correo electrónico válido.");
            email = document.getElementById("email")
            email.style.backgroundColor = "#ffaea8"
            return;
        }

        // Validar que el teléfono contenga solo números
        let patronTelefono = /^\d+$/;
        if (!patronTelefono.test(telefono)) {
            //alert("Por favor, ingrese un número de teléfono válido.");
            telefono.style.backgroundColor = "#ffaea8"
            return;
        }

        // Si la validación es exitosa, enviar el formulario
        alert("Se ha enviado correctamente.");
        document.getElementById("formulario-contacto").submit();
        clear()
    });
});

function keypressemail() {
    let email = document.getElementById("email").value.trim();

    let patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patronEmail.test(email)) {
        email = document.getElementById("email")
        console.log("eh")
        email.style.backgroundColor = "#ffaea8"
    } else if (patronEmail.test(email)) {
        console.log("yay")
        email = document.getElementById("email")
        email.style.backgroundColor = "white"
    }

    email = document.getElementById("email")
    if (email.value == "") {
        email.style.backgroundColor = "white"
    }

}

function keypresstel() {
    let telefono = document.getElementById("telefono").value.trim();
    let patronTelefono = /^\d+$/;

    if (!patronTelefono.test(telefono)) {
        telefono = document.getElementById("telefono")
        telefono.style.backgroundColor = "#ffaea8"
    } else if (patronTelefono.test(telefono)) {
        telefono = document.getElementById("telefono")
        telefono.style.backgroundColor = "white"
    }
    telefono = document.getElementById("telefono")
    if (telefono.value == "") {
        telefono.style.backgroundColor = "white"
    }

}

function keypressempty1() {
    let nombre = document.getElementById("nombre")
    if (nombre.value == "") {
        nombre.style.backgroundColor = "white"
    }

}

function keypressempty2() {
    let mensaje = document.getElementById("mensaje")
    if (mensaje.value == "") {
        mensaje.style.backgroundColor = "white"
    }

}

