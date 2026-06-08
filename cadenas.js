let cadena1=" Hala Manda "
let largo=cadena1.length
console.log("el largo es :",largo);
console.log("Convertido a mayus : ",cadena1.toUpperCase())
console.log("Convertido a minus : ",cadena1.toLowerCase())
console.log("La cadena es :",cadena1)
let cadena2=cadena1.trim()
console.log("Elimino:",cadena2)
largo=cadena2.length
console.log("el largo es :",largo);
console.log("Buscando :",cadena1.includes("Hoo"))
console.log("Buscando :",cadena2.indexOf("o"))
console.log("Buscando :",cadena2.lastIndexOf("o"))
console.log("Buscando :",cadena2.charAt(6))
let aux=cadena2.slice(5,9)
console.log("resultado :",aux)
console.log("Nueva :", cadena2.replace("t","JS"))
console.log(cadena2.concat(" ",cadena2,"Fin"))
console.log(cadena1.split("a","l"))

let cancion = `En Argentina nací Tierra de Diego y Lionel 
De los pibes de Malvinas 
Que jamás olvidaré 
No te lo puedo explicar 
Porque no vas a entender 
Las finales que perdimos 
Cuántos años la lloré 
Pero eso se terminó 
Porque en el Maracaná 
La final con los brazucas 
La volvió a ganar papá 
Muchachos 
Ahora nos volvimo' a ilusionar 
Quiero ganar la tercera 
Quiero ser campeón mundial 
Y al Diego 
En el cielo lo podemos ver 
Con Don Diego y con La Tota 
Alentándolo a Lionel`;

console.log(cancion.replace("Diego","Nico"));
