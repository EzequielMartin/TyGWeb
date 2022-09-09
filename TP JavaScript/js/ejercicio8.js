function muestraOculta(id) {

    contenido = $("#contenidos_" + id)
    enlace = $("#enlace_" + id)
    
    if($(contenido).css("display") == "" || $(contenido).css("display") == "block"){
        $(contenido).hide()
        $(enlace).html("Mostrar contenidos")
    }else{
        $(contenido).show()
        $(enlace).html("Ocultar contenidos")
    }

}
