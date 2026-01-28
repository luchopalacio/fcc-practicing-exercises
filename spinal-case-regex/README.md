# Exercise: Spinal Case Converter (Using Regular Expressions)

## Description

JavaScript exercise that uses regular expressions to detect whether a text contains an uppercase letter immediately after a lowercase letter, as well as spaces and underscores or hyphens between words.
The text is then converted to Spinal Case (a format where all words are lowercase and separated by hyphens).

### Examples
```javascript
console.log(spinalCase("HolaComoEstas"));   //hola-como-estas
console.log(spinalCase("Implementando funciones de_expresiones--regularesO   'regex'"));    //implementando-funciones-de-expresiones-regulares-o-'regex'
