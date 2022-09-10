function validacion(){
    
    nom = $("#nombre").val()
    ape = $("#apellido1").val()
    email = $("#email").val()
    fijo = $("#telefonofijo").val()
    movil = $("#telefonomovil").val()

    if(nom == ""){
        $("#errornombre").slideDown()
    }else{
        $("#errornombre").hide()
    }

    if(ape == ""){
        $("#errorapellido").slideDown()
    }else{
        $("#errorapellido").hide()
    }

    if(! email.includes("@")){
        $("#erroremail").slideDown()
    }else{
        $("#erroremail").hide()
    }

    if(! $.isNumeric(fijo)){
        $("#errorfijo").slideDown()
    }else{
        $("#errorfijo").hide()
    }
    
    if(! $.isNumeric(movil)){
        $("#errormovil").slideDown()
    }else{
        $("#errormovil").hide()
    }

}
