function validacion(){
    
    nom = $("#nombre").val()
    ape = $("#apellido1").val()
    email = $("#email").val()
    fijo = $("#telefonofijo").val()
    movil = $("#telefonomovil").val()

    if(nom == ""){
        alert("Debe ingresar un nombre")
    }
    if(ape == ""){
        alert("Debe ingresar un apellido")
    }
    if(! email.includes("@")){
        alert("El email debe tener un @")
    }
    if(! $.isNumeric(fijo)){
        alert("El telefono fijo debe ser un numero")
    }
    if(! $.isNumeric(movil)){
        alert("El telefono movil debe ser un numero")
    }

}
