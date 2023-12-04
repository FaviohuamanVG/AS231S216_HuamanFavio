// Función de validación de contraseña
function validarContrasena(contrasena) {
    const regexContrasena = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regexContrasena.test(contrasena);
}

// Función para alternar la visibilidad de la contraseña
function togglePassword() {
    const contrasenaInput = document.getElementById('contrasena');
    const tipoInput = contrasenaInput.type === 'password' ? 'text' : 'password';
    contrasenaInput.type = tipoInput;
}

function habilitarBoton() {
    const checkboxAcepto = document.getElementById('aceptoTerminos');
    const btnCrear = document.getElementById('btnCrear');

    // Habilitar el botón si el checkbox está marcado, de lo contrario, deshabilitarlo
    btnCrear.disabled = !checkboxAcepto.checked;
}