function muestraOculta(id) {
    
    contenido = document.getElementById("contenidos_"+id)
    enlace = document.getElementById("enlace_"+id)

    if(contenido.style.display == "" || contenido.style.display == "block"){
        contenido.style.display = "none"
        enlace.innerHTML = "Mostrar contenidos"
    }else{
        contenido.style.display = "block"
        enlace.innerHTML = "Ocultar contenidos"
    }
}