document.addEventListener("DOMContentLoaded", () => { //anonima ()
    const formulario = document.getElementById("formulario");
        formulario.addEventListener("submit", (event) => {
            event.preventDefault();
            const { correo, contrasenna } = obtenerDatosFormulario();
            const esValido = validarContrasenna(contrasenna) && validarCorreo(correo);

            esValido ? manejarExito() : manejarError();
        });
});

const obtenerDatosFormulario = () => { // con nombre
    const correo = document.getElementById("correo").value.trim(); // quita espacios al inicio y final
    const contrasenna = document.getElementById("contrasenna").value.trim();
    return { correo, contrasenna };
};

const validarContrasenna = (contrasenna) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(contrasenna);
};

const validarCorreo = (correo) => {
    return /[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
};

const manejarExito = () => {
    alert("Inicio de sesión exitoso");
    limpiarCamposTexto();
};

const manejarError = () => {
    alert("Datos no validos");
};

limpiarCamposTexto = () => {
    const campos = document.querySelectorAll('#formulario input[type="email"], #formulario input[type="password"]');
    campos.forEach((campo) => campo.value = "");
};