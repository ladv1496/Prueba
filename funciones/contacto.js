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
        // Muestra los datos enviados
        mostrarDatosEnviados(nombre, email, telefono, mensaje);
        // Limpia el formulario
        clear();
    });
});

function mostrarDatosEnviados(nombre, email, telefono, mensaje) {
    let datosEnviados = document.createElement("div");
    datosEnviados.innerHTML = "<h2>Datos Enviados</h2>";
    datosEnviados.innerHTML += "<p>Nombre: " + nombre + "</p>";
    datosEnviados.innerHTML += "<p>Email: " + email + "</p>";
    datosEnviados.innerHTML += "<p>Teléfono: " + telefono + "</p>";
    datosEnviados.innerHTML += "<p>Mensaje: " + mensaje + "</p>";
    document.getElementById("caja-formulario").appendChild(datosEnviados);
}
