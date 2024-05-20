window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoFile = urlParams.get('video');
    if (videoFile) {
        const videoSource = document.getElementById('videoSource');
        videoSource.src = `videos/${videoFile}`;
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.load();
    }
}

// ---------- VALIDACION DEL FORMULARIO ----------------

document.getElementById('miFormulario').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;

    if (!nombre || !email) {
        event.preventDefault(); 
        alert('Por favor, complete todos los campos.');
    }
});

//------------ LIMPIAR EL FORMULARIO------------

// ---------DATOS TEMPORALES EN EL LOCAL STORAGE -----------

document.addEventListener("DOMContentLoaded", function() {
    var nombreInput = document.getElementById('nombre');
    var emailInput = document.getElementById('email');
    var form = document.querySelector('form');
    var nombreUsuarioElement = document.getElementById('nombreUsuario');
    var mailUsuarioElement = document.getElementById('mailUsuario');


    // Cargar datos del localStorage si existen
    if (localStorage.getItem('usuario')) {
        var usuario = JSON.parse(localStorage.getItem('usuario'));
        nombreInput.value = usuario.nombre;
        emailInput.value = usuario.email;
        nombreUsuarioElement.textContent = usuario.nombre; // Mostrar el nombre
        mailUsuarioElement.textContent = usuario.email; // Mostrar el correo electrónico
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var nombre = nombreInput.value;
        var email = emailInput.value;

        localStorage.setItem('usuario', JSON.stringify({ nombre: nombre, email: email }));

        // Ocultar los campos de entrada
        nombreInput.style.display = 'none';
        emailInput.style.display = 'none';

        // Mostrar el nombre del usuario en el elemento h2
        nombreUsuarioElement.textContent = `Bienvenido, ${nombre}!`;
        nombreUsuarioElement.style.display = 'block'; // Mostrar el elemento h2

        // Mostrar el correo electrónico del usuario en el elemento h2
        mailUsuarioElement.textContent = `${email}`;
        mailUsuarioElement.style.display = 'block'; // Mostrar el elemento h2

        // Mostrar mensaje de éxito
        var successMessage = document.createElement('p');
        successMessage.textContent = '¡Cambios guardados correctamente!';
        form.appendChild(successMessage);
    });
});




