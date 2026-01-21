# Pig Latin Translator

funcion simple en JavaScript function que traduce palabras en ingles a "pig latin" (lenguaje secreto del inglés que modifica palabras: si empieza con consonante, se mueve al final y se añade "ay" (ej: "hello" -> "ellohay"), si empieza con vocal, se añade "way" al final (ej: "eat" -> "eatway").)  

## Ejemplos

```js
translatePigLatin("glove"); // "oveglay"
translatePigLatin("algorithm"); // "algorithmway"
translatePigLatin("rhythm"); // "rhythmay"