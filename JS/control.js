function validar() {

    let usuario = document.getElementById("usuario");
    let password = document.getElementById("password");
    
    let expresion = /@/
    console.log(usuario.value);

    if (usuario.value==="" || password.value==="") {
        alert("Todos los campos deben estar llenos");
        console.log("Todos los campos deben estar llenos");
}
    else if (!expresion.test(usuario.value)) {
        alert("Falta el arroba en el usuario");
        console.log("Falta el arroba en el usuario");
    }
}
