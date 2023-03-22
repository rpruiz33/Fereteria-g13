let formulario = document.getElementById('form-register')
let inputs = document.querySelectorAll('.input-text')

const expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    contrasenia: /^.{8,20}$/ // 8 a 20 digitos.
}

let campos = {
    email: false,
    contrasenia: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'email':
            validarInput(expresiones.email, e.target, 'email');
        break;
        case 'contrasenia':
            validarInput(expresiones.contrasenia, e.target, 'contrasenia');
        break;
    }
}

const validarInput = (expresion, input, inputId) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo-${inputId}`).classList.remove('group-register-incorrect');
        document.getElementById(`grupo-${inputId}`).classList.add('group-register-correct');
        document.querySelector(`#grupo-${inputId} i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo-${inputId} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo-${inputId} p`).classList.remove('formularioInputError-activo');
        campos[inputId] = true;
    }else {
        document.getElementById(`grupo-${inputId}`).classList.add('group-register-incorrect');
        document.getElementById(`grupo-${inputId}`).classList.remove('group-register-correct');
        document.querySelector(`#grupo-${inputId} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo-${inputId} i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo-${inputId} p`).classList.add('formularioInputError-activo');
        campos[inputId] = false;
    }
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.email == true && campos.contrasenia == true){

        document.getElementById('formularioMensaje').classList.remove('formularioMensaje-activo')
        formulario.submit();

    }else {

        document.getElementById('formularioMensaje').classList.add('formularioMensaje-activo')

    }

})

inputs.forEach(input => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

