/* Ejemplo de ciclo "for" aka "for loop" */
/* Puedes intentar modificar el número 5 por 10 o 200 para probar */
for (let index = 0; index < 5; index++) {
    const DOM_ELEMENT = document.createElement("h1");
    DOM_ELEMENT.innerText = `Element index: ${index}`;
    document.body.appendChild(DOM_ELEMENT);
}




/* Ejemplo de ciclo "while" */
let saludo = "Hola"

const DOM_ELEMENT_2 = document.createElement("p");
DOM_ELEMENT_2.innerText = saludo;
document.body.appendChild(DOM_ELEMENT_2);

const DOM_ELEMENT_3 = document.createElement("p");
DOM_ELEMENT_3.innerText = `saludo.length (o cantidad de caracteres): ${saludo.length}`;
document.body.appendChild(DOM_ELEMENT_3);

while (saludo.length < 20) {
    saludo += "a";
}
/* 
    Hay 2 cosas interesantes pasando aquí:
        1. la sintaxis saludo.length y
        2. el operador matemático o aritmético en una variable de texto y no númerica


    Sobre la sintaxis "saludo.length":
        Cada tipo de dato tiene funciones y propiedades incluidas por defecto, sin que nosotros se los agreguemos, y similar a la sintaxis de los objetos, podemos acceder a ellos por medio del punto "."

        En este caso, la propiedad "length" de un tipo de dato "texto" o "string" hace referencia a la cantidad de caracteres que tiene esa variable, "hola" tiene 4 caracteres, entonces lo que está ejecutando este "bloque" de código es agregarle la letra "a" al final del texto hasta que la condición de que la longitud de la cadena de texto sea menor a 20 se deje de cumplir.


    Sobre el operador matemático en una variable de texto:
        A este uso del operador con variables de texto se le llama "concatenación", que básicamente se trata de "unir" textos, y esta unión la realiza al final de la primer variable. En este ejemplo al concatenar "hola" + "a" resulta en "holaa".

        Para más información al respecto puedes leer la documentación al respecto aquí:
        https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Strings
        https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Strings#concatenando_cadenas
*/

const DOM_ELEMENT_4 = document.createElement("p");
DOM_ELEMENT_4.innerText = saludo;
document.body.appendChild(DOM_ELEMENT_4);

const DOM_ELEMENT_5 = document.createElement("p");
DOM_ELEMENT_5.innerText = `saludo.length (o cantidad de caracteres) después de modificarla en el ciclo while: ${saludo.length}`;
document.body.appendChild(DOM_ELEMENT_5);