### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
We can use .then .catch, callbacks with setTimeout, and of course (and most usefully) axios await and async functionality.

- What is a Promise?
A promise is an as of yet unresolved request.  Javascript knows the information is coming but it has not pulled from the source API yet.  The promise will resolve to a request body which contains our data.

- What are the differences between an async function and a regular function?
Asnyc functions allow us to use the away keyword so we can wait for a promise to resolve before moving on, thus giving us access to the data.

- What is the difference between Node.js and Express.js?
Node.js is a backend server javascript environment outside of the browser, express.js is a framework for node.js to allow us to create webapps.

- What is the error-first callback pattern?
Process errors before proceeding into asynchronous code so that if we encounter an error we don't have to wait for frivolous promises to fail.

- What is middleware?
Middleware is the functionality we keep in a separate file that we can use throughout our webapp.  Some common uses are error handling, route functionality, server functionality, etc

- What does the `next` function do?
the 'next' function executes the next code in line within the app.  with our express webapps this will pass over the routes as there is no input and proceed to our next app.use function, these will commonly be for error handling and something you need to run for each request.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

We can have 1 await that waits for all promises to resolve instead of 3 individual awaited requests that all need to resolve before we can progress.  We can save the base URL in a variable to keep our code neater and save time.  Use a loop to pull from base url and an array of names.
