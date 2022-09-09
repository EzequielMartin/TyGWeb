function mayus(palabra){
    if(palabra == palabra.toUpperCase()){
        alert("La palabra "+palabra+" esta toda en mayusculas")
    }else if(palabra == palabra.toLowerCase()){
        alert("La palabra "+palabra+" esta toda en minusculas")
    }else{
        alert("La palabra "+palabra+" tiene mayusculas y minusculas")
    }
}

mayus("hola")
mayus("HOLA")
mayus("Hola")