document.addEventListener("DOMContentLoaded", () => { //anonima ()
    const formularioRegistro = document.getElementById("formularioRegistro");
    formularioRegistro.addEventListener("submit", (event) => {
        event.preventDefault();
        const { cedula, nombreCompleto, fechaNacimiento, telefono, contrasennaConfirmacion, correo, contrasenna } = obtenerDatosFormularioRegistro();
        const esValido = validarCedula(cedula) && validarNombreCompleto(nombreCompleto) && validarFechaNacimiento(fechaNacimiento) && validarTelefono(telefono)
            && confirmarContrasenna(contrasenna, contrasennaConfirmacion) && validarCorreo(correo);

        esValido ? manejarExito() : manejarError();
    });
});

const obtenerDatosFormularioRegistro = () => {
    const cedula = document.getElementById("cedula").value.trim();
    const nombreCompleto = document.getElementById("nombreCompleto").value.trim();
    const fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const contrasennaConfirmacion = document.getElementById("contrasennaConfirmacion").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contrasenna = document.getElementById("contrasenna").value.trim();
    return { cedula, nombreCompleto, fechaNacimiento, telefono, contrasennaConfirmacion, correo, contrasenna };
};

const validarContrasenna = (contrasenna) => { // Pasword123!
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(contrasenna);
};

const validarCorreo = (correo) => {
    return /[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
};

const validarCedula = (cedula) => { // 9 digitos
    return /^\d{9}$/.test(cedula);
}

const validarNombreCompleto = (nombreCompleto) => {
    return /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+)*$/.test(nombreCompleto);
}

const validarFechaNacimiento = (fechaNacimiento) => { //menor a 2024 y fechas validas
    console.log(fechaNacimiento);
    return /^(19\d{2}|20[0-1][0-9]|202[0-4])-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(fechaNacimiento);
}

const validarTelefono = (telefono) => { //formato costarrisense
    return /^(\d{3}\s?|(\d{3}-)?\d{4}-?)\d{4}$/.test(telefono);
}

const confirmarContrasenna = (contrasenna, contrasennaConfirmacion) => { // confirmar contraseña
    if ((contrasenna === contrasennaConfirmacion) && validarContrasenna(contrasenna)){
        return true;
    }
    else {
        document.getElementById("contra").innerHTML+="*";
    }

}

const marcarError=(idLabel)=>{ // manejar con active/hiden
    document.getElementById("idLabel").innerHTML+="*";
}

const manejarExito = () => {
    alert("Inicio de sesión exitoso");
    limpiarCamposTexto();
};

const manejarError = () => {
//  esValidaCedula ? hiden : active
// esValidaContra ? 
    alert("Datos no validos");
};

limpiarCamposTexto = () => {
    const campos = document.querySelectorAll('#formulario input[type="email"], #formulario input[type="password"]');
    campos.forEach((campo) => campo.value = "");
};