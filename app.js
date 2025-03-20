// JavaScript para interactividad en la página

document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");

    // Agregar efecto de desplazamiento suave a los enlaces de navegación
    document.querySelectorAll(".nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Integración con EmailJS para el formulario de contacto
    (function() {
        emailjs.init("ZHY90BEAMjR1np0_i"); // Reemplaza con tu Public Key de EmailJS
    })();

    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault();

            // Capturar los datos del formulario
            const name = form.querySelector("input[type='text']").value;
            const email = form.querySelector("input[type='email']").value;
            const message = form.querySelector("textarea").value;

            // Configurar los parámetros para EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message
            };

            emailjs.send("service_51awu4v", "template_xvc7ycrl", templateParams)
                .then(response => {
                    alert("Mensaje enviado con éxito");
                    form.reset();
                })
                .catch(error => {
                    alert("Error al enviar el mensaje. Inténtalo nuevamente.");
                    console.error("Error en EmailJS:", error);
                });
        });
    }
});