function registro (){
    let nombre = $('#nombre').val();
    let tipoDocumento = $('#tipoDocumento').val();
    let email = $('#email').val();
    let direccion = $('#direccion').val();
    let password = $('#password').val();
    let apellido = $('#apellido').val();
    let documento =$('#documento').val();
    let telefono =$('#telefono').val();
    let genero =$('#genero').val();
    let Ciudad = 1
    // console.log('abuela');
    // console.log(nombre + tipoDocumento + email + direccion + password + apellido + documento + telefono + genero + confirmarContraseña);

    if (nombre == null || nombre == undefined || nombre == ''){
        alert("Ingrese el Nombre");
    }
    if (tipoDocumento == null || tipoDocumento == undefined || tipoDocumento == ''){
        alert("Ingrese su tipo de documento");
    }
    if (email == null || email == undefined || email == ''){
        alert("Ingrese su Correo Electronico");
    }
    if (direccion == null || direccion == undefined || direccion == ''){
        alert("Ingrese la Dirección");
    }
    if (password == null || password == undefined || password == ''){
        alert("Ingrese una Contraseña");
    }
    if (apellido == null || apellido == undefined || apellido == ''){
        alert("Ingrese Apellidos");
    }
    if (telefono == null || telefono == undefined || telefono == ''){
        alert("Ingrese Teléfono");
    }
    if (genero == null || genero == undefined || genero ==''){
        alert("Seleccione Género");
    }
    if (documento == null || documento == undefined || documento == ''){
        alert("Seleccione el tipo de Documento");
    }
    $.ajax({
        url: `../app/registro.php?email=${email}&password=${password}&nombre=${nombre}&tipoDocumento=${tipoDocumento}&direccion=${direccion}&password=${password}&apellido=${apellido}&documento=${documento}&telefono=${telefono}&genero=${genero}&Ciudad=${ciudad}`,
    
        dataType: 'text',
        success: function (json) {       
            console.log('registro exitosamente');
            $('#titulo').text('Correo ya registrado');              
            location.href = '../vistas/login.html';
        },
        error: function (xhr, status) {
            // console.log('Disculpe, existió un problema');
            // $('#titulo').html('Correo Registrado Correctamente');
            // location.href = '../vistas/login.html';
    
    
        },
        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log('Consulta hecha');
            }
        });
}

