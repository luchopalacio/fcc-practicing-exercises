# Exercise: Pig Latin Translator

Simple JavaScript function that translates English words into Pig Latin: a secret english language transformation: If a word starts with a consonant, the consonant (or consonant cluster) is moved to the end and "ay" is added (e.g: "hello" → "ellohay"), If a word starts with a vowel, "way" is added to the end (e.g: "eat" -> "eatway")

## Examples

```js
translatePigLatin("glove"); // "oveglay"
translatePigLatin("algorithm"); // "algorithmway"
translatePigLatin("rhythm"); // "rhythmay"
