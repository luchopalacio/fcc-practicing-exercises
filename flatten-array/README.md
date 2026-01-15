## Ejercicio: "Aplanar" un array

### Descripción
Dado un array, expresarlo como un array "plano", es decir, si se ingresa un array que contiene otros arrays (a cualquier profundidad) se busca devolver un nuevo array unidimensional, manteniendo el orden original de los elementos y sin modificar los valores que no sean arrays.

### Versión V1
Resuelto de forma recursiva:
1- Se recorre el array recibido como argumento.
2- Para cada elemento:
    Si es un array, se vuelve a aplicar la misma función sobre ese elemento.
    Si no es un array, se agrega directamente al resultado.
3- El resultado de cada llamada recursiva se integra al array final.
Este proceso se repite hasta que ya no queden arrays anidados.

### Ejemplos
```javascript
console.log( steamrollArray( [1, [2], [3, [[4]]]]) ); // [1, 2, 3, 4]
console.log( steamrollArray([1, {}, [2, [3]], "hola"]) );// [1, {}, 2, 3, "hola"]