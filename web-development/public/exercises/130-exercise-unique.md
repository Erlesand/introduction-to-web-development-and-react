# Exercise: Unique

Write a function which removes all duplicate values from an array and then returns the new array.

At this point in the course we have only looked at ES5 syntax, but I have also provided a solution using ES6 where we use Set.

## Example

```js
unique([1, 2, 3, 2]);

// -> [1, 2, 3]
```

## Solution (ES5)

```js
function unique(data) {
  var unique = [];

  for (var value of data) {
    if (!unique.includes(value)) {
      unique.push(value);
    }
  }

  return unique;
}
```

## Explanation

We create a function by using the `function` keyword. In the example above we also provide an **argument**, which is what we use to pass data to the function.

```js
function unique(arr) {
  // ...
}
```

The first thing we do in the function is create a variable where we want to store the unique values. We initiate this to an empty array.

```js
var unique = [];
```

The next thing we need to do is to loop through the values of the data array. In this case we are using a `for of` loop. It is a simplified kind of loop which is used to loop through arrays.

```js
for (var value of data) {
  // ...
}
```

With the help of an if statement we can check if `value` exists in our array of unique values. If it does not, we push the value to the array.

```js
if (!unique.includes(value)) {
  unique.push(value);
}
```

Finally we end the function by returning the array of unique values.

```js
return unique;
```

## Solution (ES6)

Sets are a new object type which was introduced in ES6, which allows us to create collection of unique values.

```js
var unique = (data) => [...new Set(data)];
```
