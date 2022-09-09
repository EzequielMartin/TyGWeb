window.onload = function() {
    // Numero de enlaces de la pagina
    enlaces = document.getElementsByTagName("a")
    alert(enlaces.length)
    
    // Direccion del penultimo enlace
    alert(enlaces[enlaces.length-2])
    
    // Numero de enlaces que apuntan a http://prueba
    cont = 0
    for (i in enlaces) {
        if(enlaces[i] == "http://prueba/"){
            cont++
        }
    }
    alert(cont)
    
    // Numero de enlaces del tercer p􀀀rrafo
    parrafos = document.getElementsByTagName("p")
    enlacesEnParrafo3 = parrafos[2].getElementsByTagName("a").length
    alert(enlacesEnParrafo3)
}
