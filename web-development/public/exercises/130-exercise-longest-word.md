# Exercise: Longest word

Write a function which takes a sentence as an argument and returns the longest word.

At this point in the course we have only looked at ES5 syntax, but I have also provided an alternative solution using `sort()` and ES6 syntax.

## Example

```js
longestWord("Vue Angular JavaScript React");

// -> 'JavaScript'
```

## Solution (ES5)

```js
function longestWord(sentence) {
  var word = "";
  var words = sentence.split(" ");

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > word.length) {
      word = words[i];
    }
  }

  return word;
}
```

## Explanation

We create a function by using the `function` keyword. In the example above we also provide an **argument**, which is what we use to pass data to the function.

```js
function longestWord(sentence) {
  // ...
}
```

The first thing we do in the function is create a variable where we want to store the longest word. We initiate this to an empty string.

```js
var word = "";
```

Split the sentence into an array of words. For this we use `split()`, which is a string method used to split a string into an array of substrings. The argument we provide is the separator, which it the character upon which we want to split the string.

The array is then saved to the varaible `words`

```js
var words = sentence.split(" ");
```

Then we set up a loop to loop through all of the words. `words.length` returns the number of items in the array `words`. In the case of `Vue Angular JavaScript React` it will return 4.

```js
for (var i = 0; i < words.length; i++) {
  // ...
}
```

We then check, using an if statement, if the length of the current word in the loop `words[i].length` is longer than the longest word which we have saved previously: `word.length`.

If that is the case, then we save this new word to the variable `word`.

```js
if (words[i].length > word.length) {
  word = words[i];
}
```

Finally we end the function by using the keyword `return` followed by the variable we want to return from the function, `word` in this case.

```js
return word;
```

## Solution (ES6)

An alternative solution would be to make use of the array method `sort()` which takes a sorting function as its argument.

```js
const longest = (sentence) => {
  const words = sentence.split(" ");
  words.sort((a, b) => b.length - a.length);

  return words[0];
};
```
