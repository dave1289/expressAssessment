### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
We can use manual callbacks with setTimeout, .then & .catch, or using async and await

- What is a Promise?
A promise is what javascript creates when we begin to execute asynchronous code, represents the eventual completiong or faulure.

- What are the differences between an async function and a regular function?
Async functions are created to be asynchronous and use await to help route us through async code.

- What is the difference between Node.js and Express.js?
Node.js is a backend javascript language for outside of the browser
Express.js is a framework for creating routes like flask is to python

- What is the error-first callback pattern?
Error handling function which takes error and data as arguments, if error is passed it displays error

- What is middleware?
Middleware is the name for functions that operate in and around our routes and are kept separately but used throughout.

- What does the `next` function do?
The next function goes to the next code that would run in your file.  Routes are not included in this so usually next will bring you to your next App.use statement.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

We should create a function to pull users and have that function be awaited, having 3 await statements is a waste of time.
