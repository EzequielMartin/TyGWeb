var valores = [true, 5, false, "hola", "adios", 2]

//a)
if (valores[3].length > valores[4].length) {
    alert("La palabra "+valores[3]+" tiene mas caracteres que "+valores[4])
}else{
    alert("La palabra "+valores[4]+" tiene mas caracteres que "+valores[3])
}

//b)
alert(valores[0]||valores[2])
alert(valores[0]&&valores[2])

//c)
alert(valores[1]+valores[5])
alert(valores[1]-valores[5])
alert(valores[1]*valores[5])
alert(valores[1]/valores[5])
