let formulario = document.getElementById('form-register')
let inputs = document.querySelectorAll('.input-text')

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ-Z0-9\s]{5,40}$/, // Letras, numeros y espacios, pueden llevar acentos.
    descripcion: /^[a-zA-ZÀ-ÿ-Z0-9\s]{20,200}$/, // Letras, numeros y espacios, pueden llevar acentos.
}

let campos = {
    nombre: false,
    descripcion: false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'nombre':
            validarInput(expresiones.nombre, e.target, 'nombre');
        break;
        case 'descripcion':
            validarInput(expresiones.descripcion, e.target, 'descripcion');
        break;
    }

}

const validarInput = (expresion, input, inputId) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo-${inputId}`).classList.remove('group-register-incorrect');
        document.getElementById(`grupo-${inputId}`).classList.add('group-register-correct');
        document.querySelector(`#grupo-${inputId} p`).classList.remove('formularioInputError-activo');
        if(document.querySelector(`#grupo-${inputId} i`)){
            document.querySelector(`#grupo-${inputId} i`).classList.add('fa-circle-check');
            document.querySelector(`#grupo-${inputId} i`).classList.remove('fa-circle-xmark');
        }
        campos[inputId] = true;
    }else {
        document.getElementById(`grupo-${inputId}`).classList.add('group-register-incorrect');
        document.getElementById(`grupo-${inputId}`).classList.remove('group-register-correct');
        document.querySelector(`#grupo-${inputId} p`).classList.add('formularioInputError-activo');
        if(document.querySelector(`#grupo-${inputId} i`)){
            document.querySelector(`#grupo-${inputId} i`).classList.add('fa-circle-xmark');
            document.querySelector(`#grupo-${inputId} i`).classList.remove('fa-circle-check');
        }
        campos[inputId] = false;
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})


formulario.addEventListener('submit', (e) => {
e.preventDefault();

if (campos.nombre == true && campos.descripcion == true){

    document.getElementById('formularioMensaje').classList.remove('formularioMensaje-activo')
    formulario.submit();

}else {

    document.getElementById('formularioMensaje').classList.add('formularioMensaje-activo')

}

})
