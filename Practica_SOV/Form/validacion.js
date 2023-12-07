document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".custom-form");
    const nombresInput = document.getElementById("nombres");
    const apellidosInput = document.getElementById("apellidos");
    const emailInput = document.getElementById("email");
    const contrasenaInput = document.getElementById("contrasena");
    const aceptoTerminosCheckbox = document.getElementById("aceptoTerminos");
    const btnEnviar = document.getElementById("btnCrear");
    const togglePasswordBtn = document.getElementById("togglePassword");

    nombresInput.addEventListener("input", validarCampo);
    apellidosInput.addEventListener("input", validarCampo);
    emailInput.addEventListener("input", validarCampo);
    contrasenaInput.addEventListener("input", validarCampo);
    aceptoTerminosCheckbox.addEventListener("change", validarCampo);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!validarNombres() || !validarApellidos() || !validarEmail() || !validarContrasena() || !aceptoTerminosCheckbox.checked) {
            return;
        }

        // Agrega más validaciones según sea necesario

        form.submit();
    });

    function validarCampo() {
        if (!validarNombres() || !validarApellidos() || !validarEmail() || !validarContrasena() || !aceptoTerminosCheckbox.checked) {
            btnEnviar.disabled = true;
        } else {
            btnEnviar.disabled = false;
        }
    }

    function validarNombres() {
        const nombresValue = nombresInput.value.trim();
        const nombresError = document.getElementById("nombres-error");
    
        if (nombresValue === "" || /\d/.test(nombresValue)) {
            nombresError.innerHTML = '<span class="error-message">Por favor, ingresa tus nombres sin números.</span>';
            return false;
        } else {
            nombresError.innerHTML = ''; // Limpiar mensaje de error si es válido
        }
    
        return true;
    }

    function validarApellidos() {
        const apellidosValue = apellidosInput.value.trim();
        const apellidosError = document.getElementById("apellidos-error");
    
        if (apellidosValue === "" || /\d/.test(apellidosValue)) {
            apellidosError.innerHTML = '<span class="error-message">Por favor, ingresa tus apellidos sin números.</span>';
            return false;
        } else {
            apellidosError.innerHTML = ''; // Limpiar mensaje de error si es válido
        }
    
        return true;
    }

    function validarEmail() {
        const emailValue = emailInput.value.trim();
        const emailError = document.getElementById("email-error");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const dominioInstitucional = /@vallegrande\.edu\.pe$/;
    
        if (emailValue === "") {
            emailError.innerHTML = '<span class="error-message">Por favor, ingresa tu correo electrónico.</span>';
            return false;
        } else {
            emailError.innerHTML = ''; // Limpiar mensaje de error si es válido
        }
    
        if (!emailRegex.test(emailValue)) {
            emailError.innerHTML = '<span class="error-message">Por favor, ingresa un correo electrónico válido.</span>';
            return false;
        } else {
            emailError.innerHTML = ''; // Limpiar mensaje de error si es válido
        }
    
        if (!dominioInstitucional.test(emailValue)) {
            emailError.innerHTML = '<span class="error-message">Por favor, ingresa un correo institucional válido (ejemplo: usuario@vallegrande.edu.pe).</span>';
            return false;
        } else {
            emailError.innerHTML = ''; // Limpiar mensaje de error si es válido
        }
    
        return true;
    }

    function validarContrasena() {
        const contrasenaValue = contrasenaInput.value.trim();
        const contrasenaError = document.getElementById("contrasena-error");
    
        if (contrasenaValue.length < 6 || !/(?=.*[A-Za-z])(?=.*\d)/.test(contrasenaValue)) {
            contrasenaError.innerHTML = '<span class="error-message">La contraseña debe tener al menos 6 caracteres y contener letras y números.</span>';
            return false;
        } else {
            contrasenaError.innerHTML = ''; // Limpiar mensaje de error si es válido
        }
    
        return true;
    }
    
    function togglePassword() {
        const type = contrasenaInput.type === "password" ? "text" : "password";
        contrasenaInput.type = type;
    }
    
});