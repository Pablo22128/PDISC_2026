let cadena1=" Hola Mundo ya me quiero ir a mi casa  "
let largo=cadena1.length;
console.log("El largo es : ",largo)
let cadena2;
console.log("MAyus :",cadena1=cadena1.toUpperCase())
console.log("Minus :",cadena2=cadena1.toLowerCase())
console.log("Cadena :",cadena2)
console.log("Sin espacios :",cadena1=cadena1.trim())
largo=cadena1.length;
console.log("El largo es : ",largo)

console.log(cadena1.includes(" MUN"))

console.log("Buscando :", cadena1.indexOf("O"))
console.log("Buscando :", cadena1.lastIndexOf("O"))

console.log("La letra es : ",cadena1.charAt(6))

console.log("Cortado es :",cadena1.slice(1,3))
console.log(cadena1.replace("MUNDO","JS"))
console.log(cadena1)
console.log("HOL".concat("a"))
console.log(cadena1.split(" "))


