    let formulario = document.getElementById('form-register')
    let inputs = document.querySelectorAll('.input-text')

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
        apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
        direccion: /^[a-zA-ZÀ-ÿ-Z0-9\s]{2,40}$/, // Letras, numeros y espacios, pueden llevar acentos.
        localidad: /^[a-zA-ZÀ-ÿ-Z0-9\s]{2,40}$/, // Letras, numeros y espacios, pueden llevar acentos.
        pais: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        usuario: /^[a-zA-Z0-9\_\-]{8,20}$/, // Letras, numeros, guion y guion_bajo.
        contrasenia: /^.{8,20}$/, // 8 a 20 digitos.
    }

    let campos = {
        nombre: false,
        apellido: false,
        direccion: false,
        localidad: false,
        pais: false,
        edad: false,
        email: false,
        usuario: false,
        contrasenia: false,
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case 'nombre':
                validarInput(expresiones.nombre, e.target, 'nombre');
            break;
            case 'apellido':
                validarInput(expresiones.apellido, e.target, 'apellido');
            break;
            case 'direccion':
                validarInput(expresiones.direccion, e.target, 'direccion');
            break;
            case 'localidad':
                validarInput(expresiones.localidad, e.target, 'localidad');
            break;
            case 'pais':
                validarInput(expresiones.pais, e.target, 'pais');
            break;
            case 'edad':
                validarEdad(e.target, 'edad');
            break;
            case 'email':
                validarInput(expresiones.email, e.target, 'email');
            break;
            case 'usuario':
                validarInput(expresiones.usuario, e.target, 'usuario');
            break;
            case 'contrasenia':
                validarInput(expresiones.contrasenia, e.target, 'contrasenia');
                validarContraseña2();
            break;
            case 'repetirContrasenia':
                validarContraseña2();
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

    const validarContraseña2 = () => {
        const inputPassword1 = document.getElementById('contrasenia');
        const inputPassword2 = document.getElementById('repetirContrasenia');
    
        if(inputPassword1.value !== inputPassword2.value){
            document.getElementById(`grupo-repetirContrasenia`).classList.add('group-register-incorrect');
            document.getElementById(`grupo-repetirContrasenia`).classList.remove('group-register-correct');
            document.querySelector(`#grupo-repetirContrasenia i`).classList.add('fa-circle-xmark');
            document.querySelector(`#grupo-repetirContrasenia i`).classList.remove('fa-circle-check');
            document.querySelector(`#grupo-repetirContrasenia p`).classList.add('formularioInputError-activo');
            campos['contrasenia'] = false;
        } else {
            document.getElementById(`grupo-repetirContrasenia`).classList.remove('group-register-incorrect');
            document.getElementById(`grupo-repetirContrasenia`).classList.add('group-register-correct');
            document.querySelector(`#grupo-repetirContrasenia i`).classList.remove('fa-circle-xmark');
            document.querySelector(`#grupo-repetirContrasenia i`).classList.add('fa-circle-check');
            document.querySelector(`#grupo-repetirContrasenia p`).classList.remove('formularioInputError-activo');
            campos['contrasenia'] = true;
        }
    }

    const validarEdad = (input, inputId) => {
        if(input.value >= 18 && input.value <= 99){
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

    inputs.forEach(input => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    })


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.nombre == true && campos.apellido == true && campos.direccion == true && campos.localidad == true && 
        campos.pais == true && campos.edad == true && campos.email == true && campos.usuario == true && campos.contrasenia == true){

        document.getElementById('formularioMensaje').classList.remove('formularioMensaje-activo')
        formulario.submit();

    }else {

        document.getElementById('formularioMensaje').classList.add('formularioMensaje-activo')

    }

})





