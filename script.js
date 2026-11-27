// Espera a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // Busca el formulario para proponer eventos
    const formulario = document.querySelector("form");

    // Si existe un formulario, agrega la validación
    if (formulario) {

        formulario.addEventListener("submit", function (evento) {

            // Evita que la página se recargue
            evento.preventDefault();

            // Comprueba que los campos obligatorios estén completos
            if (!formulario.checkValidity()) {
                formulario.reportValidity();
                return;
            }

            // Muestra un mensaje de confirmación
            alert("¡Tu propuesta de evento fue registrada correctamente!");

            // Limpia los campos del formulario
            formulario.reset();
        });
    }
});