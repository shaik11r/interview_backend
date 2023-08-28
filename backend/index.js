const express = require("express");
const { default: mongoose } = require("mongoose");
const { connectToDb } = require("./src/config/dbConfig");
const cors = require("cors");
const JavaScriptQuestion = require("./src/models/javaScriptQuestion");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./src/routes/authrouter")(app);
require("./src/routes/questionRoutes")(app);
require("./src/routes/nodeRouter")(app);
require("./src/routes/javaScript")(app);
let data=[
  {
    "title": "What is JavaScript?",
    "answer": "JavaScript is a high-level, interpreted scripting language used for web development. It allows you to add interactivity, manipulate the Document Object Model (DOM), and handle user events in web applications. JavaScript is primarily used in the browser but can also be used on the server side with technologies like Node.js.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the difference between 'let', 'const', and 'var' in JavaScript?",
    "answer": "In JavaScript, 'let', 'const', and 'var' are used for variable declaration. 'var' is function-scoped, meaning it's available throughout the entire function where it's declared. 'let' and 'const' are block-scoped, which means they are limited to the block in which they are defined. 'let' allows reassignment of values, while 'const' is used for constants that cannot be reassigned. Using 'const' is recommended when you don't intend to change the variable's value.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the concept of closures in JavaScript.",
    "answer": "Closures are a fundamental concept in JavaScript. They occur when a function is defined inside another function and has access to its outer function's variables. This inner function 'closes over' the variables it references, even after the outer function has finished executing. Closures are often used for data encapsulation and creating private variables in JavaScript.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is event delegation in JavaScript?",
    "answer": "Event delegation is a technique in JavaScript where you attach a single event listener to a parent element rather than attaching individual event listeners to child elements. When an event occurs, it bubbles up from the child elements to the parent, and the parent's event listener handles it. This approach improves performance and makes it easier to manage events for dynamically generated content.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the 'this' keyword in JavaScript?",
    "answer": "In JavaScript, the 'this' keyword refers to the current execution context. Its value depends on how and where it's used. In a global scope, 'this' refers to the global object (e.g., 'window' in a browser). Inside a function, 'this' can vary based on how the function is called. It often points to the object that invokes the function. Arrow functions, however, don't have their own 'this' and inherit it from their containing scope.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the callback function in JavaScript.",
    "answer": "A callback function in JavaScript is a function that is passed as an argument to another function and is executed after the completion of that function. Callbacks are commonly used in asynchronous operations, such as handling AJAX requests or working with timers. They allow you to perform tasks once the operation is finished, ensuring that your code remains non-blocking and responsive.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the difference between 'null' and 'undefined' in JavaScript?",
    "answer": "In JavaScript, 'null' and 'undefined' are similar but have subtle differences. 'Undefined' means a variable has been declared but has not been assigned a value. 'Null' is an assignment value that represents no value or no object. It's often used to indicate the intentional absence of an object value. In practical terms, 'undefined' is the default value for function parameters, while 'null' needs to be explicitly assigned.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is a promise in JavaScript?",
    "answer": "A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. Promises are used to work with asynchronous code in a more structured and manageable way. They have three states: 'pending,' 'fulfilled,' or 'rejected.' Promises make it easier to handle asynchronous tasks like fetching data from a server or reading a file, and they provide methods like 'then()' and 'catch()' for handling success and errors.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the concept of hoisting in JavaScript.",
    "answer": "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation. This means you can use variables or call functions before they are declared in your code. However, only the declarations are hoisted, not the initializations. Variables initialized with 'var' are initialized with 'undefined,' while 'let' and 'const' are not initialized until their actual declaration is encountered in the code.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the difference between '=='' and '===' in JavaScript?",
    "answer": "In JavaScript, '==' is a loose equality operator, while '===' is a strict equality operator. '==' compares values for equality after converting them to the same type if they are of different types. '===' checks both the values and types for equality. It's recommended to use '===' for most comparisons to avoid unexpected type coercion issues.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "How can you handle errors in JavaScript?",
    "answer": "JavaScript provides mechanisms for error handling, primarily through 'try...catch' blocks. You can enclose code that might throw an exception in a 'try' block and provide a 'catch' block to handle the exception gracefully. Additionally, you can use 'finally' to specify code that runs regardless of whether an exception is thrown or not. Errors can also be thrown explicitly using the 'throw' statement.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the event loop in JavaScript, and how does it work?",
    "answer": "The event loop is a fundamental part of JavaScript's concurrency model. It handles the execution of code in a non-blocking manner. JavaScript is single-threaded, meaning it can only execute one task at a time. The event loop manages the execution of code, responding to events like user interactions or asynchronous operations. It ensures that tasks are executed efficiently without blocking the main thread, maintaining a responsive user interface.",
    "difficulty": "advanced",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the concept of prototypal inheritance in JavaScript.",
    "answer": "JavaScript uses prototypal inheritance, which means that objects can inherit properties and methods from other objects. Each object has a prototype, and if a property or method is not found on the object itself, JavaScript looks up the prototype chain to find it. This mechanism allows for code reusability and a flexible way to create and extend objects.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the purpose of the 'bind' method in JavaScript?",
    "answer": "The 'bind' method is used to create a new function with a specific 'this' value and, optionally, pre-set arguments. It's commonly used to ensure that a function is called with a specific context, particularly in event handlers or callback functions. 'bind' doesn't immediately execute the function but returns a new function with the specified context and arguments, which can be invoked later.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the 'localStorage' and 'sessionStorage' in JavaScript?",
    "answer": "Both 'localStorage' and 'sessionStorage' are web storage mechanisms in JavaScript. They allow you to store key-value pairs in a user's browser for persistence. The key difference is in their lifespan. 'localStorage' data persists across browser sessions and even system reboots, while 'sessionStorage' data is only available for the duration of a page session (until the tab or window is closed).",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the role of a callback function in asynchronous JavaScript?",
    "answer": "A callback function in asynchronous JavaScript is used to handle the result of an asynchronous operation once it's completed. Asynchronous operations, such as AJAX requests or reading files, take time to complete, and rather than blocking the main thread, JavaScript allows you to specify a callback function. This function is executed when the operation finishes, ensuring that the program remains responsive and can process the result when it's available.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the concept of a JavaScript closure with an example.",
    "answer": "A JavaScript closure is a function that has access to its own scope, the outer function's scope, and the global scope. This allows it to 'remember' variables even after the outer function has finished executing. Here's an example:\n\n```javascript\nfunction outer() {\n  let counter = 0;\n\n  function inner() {\n    counter++;\n    console.log(counter);\n  }\n\n  return inner;\n}\n\nconst closureFunction = outer();\nclosureFunction(); // Outputs 1\nclosureFunction(); // Outputs 2\n```\n\nIn this example, 'inner' is a closure because it still has access to the 'counter' variable from the 'outer' function even after 'outer' has completed.",
    "difficulty": "advanced",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the Event Bubbling and Event Capturing in JavaScript?",
    "answer": "Event Bubbling and Event Capturing are two phases of event propagation in the DOM. In Event Bubbling, the event starts from the target element and bubbles up to the root of the DOM tree. In Event Capturing, the event starts from the root and trickles down to the target element. You can choose whether to use Event Bubbling or Event Capturing by setting the 'useCapture' parameter when adding event listeners using 'addEventListener'.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the purpose of the 'map' function in JavaScript?",
    "answer": "The 'map' function is used to create a new array by applying a provided function to every element in an existing array. It doesn't modify the original array but returns a new one with the results of the function applied to each element. 'map' is often used for transformations and is a cleaner way to iterate through arrays compared to traditional loops.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the concept of event delegation and provide an example.",
    "answer": "Event delegation is a technique in JavaScript where you attach a single event listener to a parent element that handles events for all its child elements. This approach is useful when you have many child elements that should trigger the same event. Here's an example:\n\n```javascript\n// HTML\n<ul id='myList'>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>\n\n// JavaScript\nconst myList = document.getElementById('myList');\nmyList.addEventListener('click', function(event) {\n  if (event.target.tagName === 'LI') {\n    console.log('Clicked on', event.target.textContent);\n  }\n});\n```\n\nIn this example, the parent 'ul' element listens for clicks on its child 'li' elements and logs the clicked item.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the purpose of the JavaScript 'fetch' API?",
    "answer": "The 'fetch' API in JavaScript is used to make network requests and retrieve resources, typically from a web server. It provides a more modern and flexible way to perform HTTP requests compared to older techniques like 'XMLHttpRequest'. 'fetch' returns a Promise, allowing you to handle responses in a more concise and readable manner. It's commonly used for fetching data from APIs and performing AJAX requests.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "How does asynchronous programming work in JavaScript?",
    "answer": "Asynchronous programming in JavaScript is based on the event loop and callbacks. Instead of blocking the main thread for long-running tasks, JavaScript allows you to initiate tasks and specify callback functions to handle the results when they are ready. Promises and async/await are more recent additions that make asynchronous code more readable and maintainable.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the concept of a JavaScript closure with an external variable.",
    "answer": "A JavaScript closure can capture and retain access to variables from its outer scope, even if the outer function has finished executing. Here's an example with an external variable:\n\n```javascript\nfunction outer() {\n  let count = 0;\n\n  function increment() {\n    count++;\n    console.log(count);\n  }\n\n  return increment;\n}\n\nconst incrementFn = outer();\nincrementFn(); // Outputs 1\nincrementFn(); // Outputs 2\n```\n\nIn this example, 'increment' is a closure that still has access to the 'count' variable even after 'outer' has completed.",
    "difficulty": "advanced",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the JavaScript 'spread' operator, and how is it used?",
    "answer": "The 'spread' operator, represented as '...', is used for expanding elements from an iterable (e.g., an array or an object) into another iterable. It's commonly used for creating shallow copies of arrays, merging arrays, or passing function arguments dynamically. Here's an example:\n\n```javascript\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5];\nconsole.log(arr2); // Outputs [1, 2, 3, 4, 5]\n```\n\nIn this example, the 'spread' operator expands 'arr1' into 'arr2'.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the purpose of 'async' and 'await' in JavaScript?",
    "answer": "The 'async' and 'await' keywords are used to simplify asynchronous code in JavaScript. 'async' is used before a function declaration to indicate that it contains asynchronous code. 'await' is used within an 'async' function to pause its execution until a Promise is resolved. This allows you to write asynchronous code that looks more like synchronous code, making it easier to read and maintain.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is a callback hell (Pyramid of Doom) in JavaScript, and how can you avoid it?",
    "answer": "Callback hell, also known as the Pyramid of Doom, occurs when you have deeply nested callbacks in your code, making it hard to read and maintain. You can avoid it by using techniques like named functions, Promises, or async/await to flatten the structure of your asynchronous code and improve readability.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the differences between 'let', 'const', and 'var' in terms of scoping.",
    "answer": "In terms of scoping, 'let' and 'const' are block-scoped, meaning they are only accessible within the block or function where they are declared. 'var', on the other hand, is function-scoped, meaning it is accessible throughout the entire function where it is declared. Using 'let' or 'const' is often preferred to avoid unexpected variable hoisting and scope issues.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What are arrow functions in JavaScript, and how do they differ from regular functions?",
    "answer": "Arrow functions are a more concise way to write functions in JavaScript. They differ from regular functions in a few ways: they don't have their own 'this' context (they inherit 'this' from the surrounding code), they cannot be used as constructors, and they don't have their own 'arguments' object. Arrow functions are commonly used for short, one-liner functions.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the purpose of the 'reduce' function in JavaScript, and how does it work?",
    "answer": "The 'reduce' function is used to reduce an array to a single value by applying a specified function to each element of the array. It takes an accumulator and the current value as arguments, and the result is accumulated into the accumulator. This is often used for tasks like summing up numbers in an array or flattening nested arrays.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the purpose of the 'Promise.all' method in JavaScript?",
    "answer": "The 'Promise.all' method in JavaScript is used to handle multiple Promises concurrently and wait for all of them to resolve. It takes an iterable (e.g., an array of Promises) as input and returns a new Promise. This new Promise resolves with an array of all resolved values from the input Promises, in the same order as the original iterable. If any of the input Promises is rejected, the new Promise is also rejected.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the concept of object destructuring in JavaScript?",
    "answer": "Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a more concise and readable way. It is commonly used when working with functions that return objects or when extracting values from objects received as function parameters. Here's an example:\n\n```javascript\nconst person = { firstName: 'John', lastName: 'Doe' };\nconst { firstName, lastName } = person;\nconsole.log(firstName); // Outputs 'John'\nconsole.log(lastName); // Outputs 'Doe'\n```\n\nIn this example, object destructuring is used to extract 'firstName' and 'lastName' from the 'person' object.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the difference between 'nullish coalescing' (??) and 'logical OR' (||) in JavaScript?",
    "answer": "Both 'nullish coalescing' (??) and 'logical OR' (||) are used for handling default values, but they behave differently. 'Nullish coalescing' only returns the right-hand operand if the left-hand operand is 'null' or 'undefined'. 'Logical OR' returns the right-hand operand if the left-hand operand is 'falsy', which includes not only 'null' and 'undefined' but also empty strings, 'false', and '0'. Use 'nullish coalescing' when you specifically want to handle 'null' or 'undefined'.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the 'localStorage' and 'sessionStorage' in JavaScript?",
    "answer": "Both 'localStorage' and 'sessionStorage' are web storage mechanisms in JavaScript. They allow you to store key-value pairs in a user's browser for persistence. The key difference is in their lifespan. 'localStorage' data persists across browser sessions and even system reboots, while 'sessionStorage' data is only available for the duration of a page session (until the tab or window is closed).",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the JavaScript 'event.preventDefault()' method used for?",
    "answer": "The 'event.preventDefault()' method is used to prevent the default behavior of an event. In web development, many user interactions, such as clicking on links or submitting forms, trigger default actions by the browser. Calling 'event.preventDefault()' in an event handler prevents these default actions from taking place, allowing you to implement custom behavior or validation. For example, you can use it to prevent a form from submitting until certain conditions are met.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the difference between 'let' and 'const' when declaring variables?",
    "answer": "In JavaScript, 'let' and 'const' are used for variable declaration. 'let' allows variables to be reassigned, while 'const' is used for constants that cannot be reassigned after initialization. 'const' is recommended when you don't intend to change the variable's value, as it helps prevent accidental reassignment.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the concept of 'hoisting' in JavaScript.",
    "answer": "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation. This means you can use variables or call functions before they are declared in your code. However, only the declarations are hoisted, not the initializations. Variables initialized with 'var' are initialized with 'undefined,' while 'let' and 'const' are not initialized until their actual declaration is encountered in the code.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is 'type coercion' in JavaScript, and how does it work?",
    "answer": "Type coercion in JavaScript refers to the automatic conversion of data types when operators or functions expect values of a different type. JavaScript tries to make operations work even when the data types don't match. For example, when you use the '+' operator with a string and a number, JavaScript will convert the number to a string and perform string concatenation. While type coercion can be convenient, it can also lead to unexpected results, so it's essential to be aware of how it works.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is a 'Promise' in JavaScript, and how does it help with asynchronous programming?",
    "answer": "A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. Promises provide a clean and organized way to work with asynchronous code. They have three states: 'pending,' 'fulfilled,' or 'rejected.' Promises allow you to attach callbacks using 'then()' and 'catch()' to handle success and error cases. This makes asynchronous code more readable and maintainable.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is 'closure' in JavaScript, and why is it useful?",
    "answer": "A closure in JavaScript is a function that has access to its own scope, the outer function's scope, and the global scope. This allows it to 'remember' variables even after the outer function has finished executing. Closures are useful for data encapsulation, creating private variables, and implementing functions with persistent state. They are a powerful and essential concept in JavaScript.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the difference between 'null' and 'undefined' in JavaScript?",
    "answer": "In JavaScript, 'null' and 'undefined' are similar but have subtle differences. 'Undefined' means a variable has been declared but has not been assigned a value. 'Null' is an assignment value that represents no value or no object. It's often used to indicate the intentional absence of an object value. In practical terms, 'undefined' is the default value for function parameters, while 'null' needs to be explicitly assigned.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the 'this' keyword in JavaScript, and how does it work?",
    "answer": "In JavaScript, the 'this' keyword refers to the current execution context. Its value depends on how and where it's used. In a global scope, 'this' refers to the global object (e.g., 'window' in a browser). Inside a function, 'this' can vary based on how the function is called. It often points to the object that invokes the function. Arrow functions, however, don't have their own 'this' and inherit it from their containing scope.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the purpose of the 'map' function in JavaScript?",
    "answer": "The 'map' function is used to create a new array by applying a provided function to every element in an existing array. It doesn't modify the original array but returns a new one with the results of the function applied to each element. 'map' is often used for transformations and is a cleaner way to iterate through arrays compared to traditional loops.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the concept of 'lexical scope' in JavaScript.",
    "answer": "Lexical scope, also known as static scope, in JavaScript means that the scope of a variable is determined by its location within the source code. When a function is defined, it captures its surrounding scope, and this captured scope remains intact regardless of where the function is called. This behavior allows functions to access variables from their parent scopes, creating closures and enabling encapsulation and data privacy.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What are 'IIFE' (Immediately Invoked Function Expressions) in JavaScript?",
    "answer": "An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and invoked immediately after creation. It's wrapped in parentheses to prevent it from being treated as a function declaration. IIFEs are often used to create private scopes for variables, preventing them from polluting the global scope. They are also used in modular JavaScript patterns.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What are 'arrow functions' in JavaScript, and when are they commonly used?",
    "answer": "Arrow functions, introduced in ECMAScript 6, provide a more concise syntax for defining functions in JavaScript. They are commonly used for short, one-liner functions and for maintaining the lexical scope of 'this'. Arrow functions do not have their own 'this' context and inherit it from their containing scope, making them useful in situations where you want to preserve the 'this' value.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is 'destructuring' in JavaScript, and how does it work?",
    "answer": "Destructuring is a JavaScript feature that allows you to extract values from arrays or objects and assign them to variables in a concise and readable way. It simplifies working with complex data structures. For example, you can destructure arrays to extract specific elements or destructure objects to access their properties directly.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is 'async/await' in JavaScript, and how does it simplify asynchronous code?",
    "answer": "Async/await is a syntax introduced in ECMAScript 2017 for handling asynchronous code in a more synchronous-like manner. It allows you to write asynchronous code that looks similar to synchronous code, making it more readable and maintainable. The 'async' keyword is used to define asynchronous functions, and 'await' is used inside these functions to pause execution until a Promise is resolved, providing a clean way to handle asynchronous operations.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the 'fetch' API in JavaScript, and how is it used to make HTTP requests?",
    "answer": "The 'fetch' API is a modern JavaScript feature for making HTTP requests to servers or APIs. It returns a Promise that resolves to the response to that request, whether it is successful or not. 'fetch' is commonly used for retrieving data from a server and can handle various HTTP methods like GET, POST, PUT, and DELETE.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What are 'async' functions in JavaScript, and how do they work?",
    "answer": "An 'async' function is a special type of JavaScript function that always returns a Promise. Inside an 'async' function, you can use the 'await' keyword to pause the function's execution until a Promise is resolved, making it easy to work with asynchronous code in a more synchronous-like manner. 'async' functions provide a structured way to handle asynchronous operations and improve code readability.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the difference between '=='' and '===' operators in JavaScript?",
    "answer": "In JavaScript, '==' is the equality operator, which checks if the values on both sides are equal after performing type coercion if necessary. '===' is the strict equality operator, which checks if the values on both sides are equal without type coercion. It's recommended to use '===' to avoid unexpected type conversions and ensure a strict comparison.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is 'NaN' in JavaScript, and how can you check for it?",
    "answer": "'NaN' stands for 'Not-a-Number' in JavaScript. It is a special value that represents an unrepresentable or undefined value in the context of numeric operations. To check if a value is 'NaN', you can use the 'isNaN()' function, which returns 'true' if the value is 'NaN'. Additionally, you can use the 'Number.isNaN()' method for a more strict and accurate check.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is a JavaScript 'closure,' and what are its practical use cases?",
    "answer": "A JavaScript closure is a function that has access to its own scope, the outer function's scope, and the global scope. This allows it to 'remember' variables even after the outer function has finished executing. Closures are used in various practical scenarios, such as creating private variables, implementing data encapsulation, and managing asynchronous operations.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What are 'RESTful APIs' in the context of JavaScript and web development?",
    "answer": "RESTful APIs are a design architecture for creating web services that follow the principles of Representational State Transfer (REST). These APIs use HTTP methods (GET, POST, PUT, DELETE) to perform CRUD (Create, Read, Update, Delete) operations on resources, which are represented as URLs. RESTful APIs are commonly used for building web applications that communicate with server-side services.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the 'prototype' in JavaScript and its role in object inheritance.",
    "answer": "In JavaScript, the 'prototype' is an object that is associated with a constructor function. It contains properties and methods that are shared among all instances created from that constructor. The 'prototype' chain is used for object inheritance, allowing objects to inherit properties and methods from their constructor's prototype. This enables code reuse and helps establish the concept of classes and subclasses in JavaScript.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the purpose of the 'bind' method in JavaScript, and how is it used?",
    "answer": "The 'bind' method in JavaScript is used to create a new function that, when invoked, has a specified 'this' value and prepends any provided arguments to the function's arguments list. It's commonly used to set the context (the value of 'this') for a function explicitly, especially when passing functions as callbacks or event handlers.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is 'variable hoisting' in JavaScript, and how does it work?",
    "answer": "Variable hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation. While variable declarations with 'var' are hoisted and initialized with 'undefined,' 'let' and 'const' declarations are hoisted but not initialized until their actual declaration in the code is encountered. Function declarations are also hoisted, allowing you to call a function before its declaration in the code.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What are 'promises' in JavaScript, and how do they help with asynchronous programming?",
    "answer": "Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation. They provide a more structured way to handle asynchronous code, making it easier to work with asynchronous operations like data fetching and handling network requests. Promises have three states: 'pending,' 'fulfilled,' and 'rejected,' and they allow you to attach 'then()' and 'catch()' callbacks to handle success and error cases.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is 'function composition' in JavaScript, and how is it achieved?",
    "answer": "Function composition in JavaScript is a technique where you combine two or more functions to produce a new function. It involves chaining the output of one function as the input to another, creating a pipeline of operations. Function composition can be achieved manually by defining a new function that calls other functions in sequence or by using helper libraries like 'Ramda' or 'Lodash' that provide utilities for composing functions.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What are the benefits of using 'strict mode' in JavaScript?",
    "answer": "Strict mode is a feature in JavaScript that helps catch common coding mistakes and prevents the use of potentially problematic features. It enforces a more stringent set of rules and produces errors for actions that would otherwise be silent in non-strict mode. Benefits of strict mode include improved error handling, better security, and optimizations by the JavaScript engine.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the 'call' and 'apply' methods in JavaScript, and how are they used to invoke functions?",
    "answer": "The 'call' and 'apply' methods are used to invoke functions with a specified 'this' context and pass arguments to them. They allow you to control the value of 'this' within a function and pass arguments as an array or individually. 'call' takes the function's context as the first argument and the arguments as subsequent arguments. 'apply' takes the function's context as the first argument and an array of arguments as the second argument.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is 'JSON' in JavaScript, and how is it used for data interchange?",
    "answer": "JSON, which stands for JavaScript Object Notation, is a lightweight data interchange format. It is easy for humans to read and write and easy for machines to parse and generate. JSON is often used for data exchange between a server and a web application or between different parts of a program. In JavaScript, you can parse JSON strings into JavaScript objects using 'JSON.parse()' and stringify JavaScript objects into JSON using 'JSON.stringify()'.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the 'prototype chain' in JavaScript and how does it relate to inheritance?",
    "answer": "The prototype chain is a fundamental concept in JavaScript's object-oriented programming. Each object in JavaScript has a prototype, and this forms a chain of prototypes. When you access a property or method on an object, JavaScript searches for that property in the object itself. If it doesn't find it, it looks up the prototype chain. This chain allows objects to inherit properties and methods from their prototype objects, creating a mechanism for object-oriented inheritance in JavaScript.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the purpose of 'async/await' in JavaScript, and how do you handle errors with it?",
    "answer": "Async/await is a syntax introduced in ECMAScript 2017 for handling asynchronous code in a more synchronous-like manner. 'async' functions return Promises, and 'await' is used inside these functions to pause execution until a Promise is resolved. To handle errors with async/await, you can use try...catch blocks. If a Promise is rejected within an async function, it will throw an error that can be caught and handled using try...catch, providing a clean way to handle asynchronous errors.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the 'spread operator' (...) in JavaScript, and how is it used?",
    "answer": "The spread operator (...) in JavaScript is used to expand or spread the elements of an iterable (e.g., an array or object) into another array or object. It is commonly used for creating shallow copies of arrays, merging arrays, and passing multiple arguments to functions. The spread operator is versatile and simplifies various array and object manipulation tasks.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What are 'GET' and 'POST' requests in HTTP, and how are they commonly used in web development?",
    "answer": "GET and POST are two of the most common HTTP request methods used in web development. GET requests are used for retrieving data from a server, and they typically append data to the URL. POST requests, on the other hand, are used for sending data to a server, often used for submitting forms or making data updates. GET requests are idempotent (repeated requests have the same effect), while POST requests are not.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the 'querySelector' method in JavaScript, and how is it used to select HTML elements?",
    "answer": "The 'querySelector' method is a built-in JavaScript method that allows you to select HTML elements from the DOM using CSS-style selectors. It returns the first matching element found in the document. You can use it to select elements by tag name, class name, ID, or any other CSS selector. 'querySelector' is widely used in web development for manipulating and interacting with HTML elements.",
    "difficulty": "beginner",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the 'REST' architectural style, and how does it relate to web services?",
    "answer": "REST, which stands for Representational State Transfer, is an architectural style for designing networked applications. It uses a stateless, client-server communication model and leverages HTTP methods (GET, POST, PUT, DELETE) for performing CRUD (Create, Read, Update, Delete) operations on resources. RESTful web services adhere to the principles of REST, making them simple, scalable, and easy to understand and maintain.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is 'memoization' in JavaScript, and how is it used for optimizing function performance?",
    "answer": "Memoization is an optimization technique in JavaScript where the results of expensive function calls are cached and reused when the same inputs occur again. This can significantly improve the performance of functions that perform complex calculations or make time-consuming network requests. Memoization is often implemented using a cache (e.g., an object) to store the results of previous function calls.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is 'prototype-based inheritance' in JavaScript, and how does it differ from classical inheritance?",
    "answer": "Prototype-based inheritance is a fundamental concept in JavaScript's object-oriented programming. Objects inherit properties and methods directly from other objects, typically through the prototype chain. This differs from classical inheritance, as there are no classes involved. JavaScript's approach is more flexible, allowing objects to inherit from multiple sources and enabling dynamic behavior changes at runtime.",
    "difficulty": "intermediate",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the concept of 'memoization' in JavaScript and provide an example of how it can be implemented to optimize a recursive function.",
    "answer": "Memoization is an optimization technique that involves caching the results of expensive function calls and reusing them when the same inputs occur again. It can significantly improve the performance of recursive functions by storing previously computed results. Here's an example of memoization for a Fibonacci sequence calculation:\n\n```javascript\nfunction fibonacci(n, memo = {}) {\n  if (n in memo) return memo[n];\n  if (n <= 1) return n;\n  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);\n  return memo[n];\n}\n```\nThis memoized Fibonacci function stores computed values in the 'memo' object, reducing redundant calculations and improving performance.",
    "difficulty": "advanced",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is the 'prototype chain' in JavaScript, and how does it relate to inheritance?",
    "answer": "The prototype chain is a fundamental concept in JavaScript's object-oriented programming. Each object in JavaScript has a prototype, forming a chain of prototypes. When you access a property or method on an object, JavaScript searches for that property in the object itself and, if not found, looks up the prototype chain. This mechanism allows objects to inherit properties and methods from their prototypes, enabling a form of object-oriented inheritance in JavaScript.",
    "difficulty": "advanced",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain 'throttling' and 'debouncing' in the context of JavaScript event handling. Provide examples of when and how each technique is used.",
    "answer": "Throttling and debouncing are techniques used to control the rate at which a function is executed in response to events. Throttling ensures that a function is called at a regular interval, while debouncing ensures that a function is called after a delay once the event stops occurring. Throttling is useful for tasks like scroll event handlers where you want to limit the rate of execution. Debouncing is handy for tasks like search input fields where you want to wait for the user to stop typing before triggering an action.",
    "difficulty": "advanced",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the 'Proxy' object in JavaScript and provide an example of how it can be used to intercept and customize object operations.",
    "answer": "The 'Proxy' object in JavaScript allows you to intercept and customize fundamental operations on objects, such as property access, assignment, and function invocation. You can create a Proxy around an object and define 'traps' (handler functions) that intercept these operations. Here's an example of using a Proxy to create a read-only object:\n\n```javascript\nconst readOnlyHandler = {\n  get(target, prop) {\n    return target[prop];\n  },\n  set() {\n    throw new Error('This object is read-only');\n  },\n};\nconst data = { name: 'John', age: 30 };\nconst readOnlyData = new Proxy(data, readOnlyHandler);\nconsole.log(readOnlyData.name); // Access is allowed\nreadOnlyData.age = 31; // Throws an error\n```",
    "difficulty": "advanced",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What are 'Web Workers' in JavaScript, and how do they enable concurrent processing in web applications? Provide an example of their usage.",
    "answer": "Web Workers are a JavaScript feature that enables concurrent processing in web applications by allowing code to run in a separate background thread. This prevents long-running tasks from blocking the main UI thread, ensuring a responsive user experience. Web Workers are often used for tasks like data processing, calculations, or other computationally intensive operations. Here's an example of using a Web Worker:\n\n```javascript\n// main.js\nconst worker = new Worker('worker.js');\nworker.postMessage({ type: 'calculate', data: [1, 2, 3, 4, 5] });\nworker.onmessage = (e) => {\n  console.log('Result from worker:', e.data);\n};\n\n// worker.js\nself.addEventListener('message', (e) => {\n  if (e.data.type === 'calculate') {\n    const result = e.data.data.reduce((acc, val) => acc + val, 0);\n    self.postMessage(result);\n  }\n});\n```",
    "difficulty": "advanced",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain 'call stack' and 'event loop' in JavaScript's concurrency model. How do they work together to handle function calls and asynchronous tasks?",
    "answer": "The call stack is a data structure in JavaScript that records function calls and their execution context. When a function is called, it's pushed onto the call stack, and when it returns, it's popped off. The event loop is responsible for handling asynchronous tasks by continuously checking the call stack and message queue. If the call stack is empty, the event loop processes messages in the queue, invoking corresponding callback functions. This cooperative model allows JavaScript to handle both synchronous and asynchronous code effectively.",
    "difficulty": "advanced",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the concept of 'generators' in JavaScript and provide an example of how they can be used to control the flow of asynchronous operations.",
    "answer": "Generators are a special type of function in JavaScript that can be paused and resumed. They use the 'yield' keyword to yield control back to the caller while preserving their state. Generators are often used to control the flow of asynchronous operations by making it easier to work with complex asynchronous code. Here's an example of a generator function that fetches data from an API using 'yield':\n\n```javascript\nfunction* fetchData() {\n  try {\n    const response = yield fetch('https://api.example.com/data');\n    const data = yield response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n```\nGenerators allow you to write asynchronous code in a more sequential and readable manner.",
    "difficulty": "advanced",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "What is 'tail recursion' in JavaScript, and how does it differ from regular recursion? Provide an example of a tail-recursive function.",
    "answer": "Tail recursion is a type of recursion where the recursive call is the last operation in the function. In traditional recursion, each recursive call pushes a new frame onto the call stack, potentially leading to a stack overflow for large inputs. Tail recursion, however, can be optimized by some JavaScript engines, allowing it to have better memory efficiency. Here's an example of a tail-recursive function to calculate the factorial of a number:\n\n```javascript\nfunction factorial(n, accumulator = 1) {\n  if (n === 0) return accumulator;\n  return factorial(n - 1, n * accumulator);\n}\n```\nTail-recursive functions are a common pattern in functional programming.",
    "difficulty": "advanced",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the concept of 'currying' in JavaScript, and provide an example of how it can be used to transform a function with multiple arguments into a series of unary functions.",
    "answer": "Currying is a functional programming technique in JavaScript where a function that takes multiple arguments is transformed into a series of unary (single-argument) functions. Each function in the series takes one argument and returns another function that expects the next argument. This chaining of functions allows for partial application and more flexible function composition. Here's an example of currying a function that calculates the sum of three numbers:\n\n```javascript\nfunction curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn(...args);\n    } else {\n      return function (...moreArgs) {\n        return curried(...args, ...moreArgs);\n      };\n    }\n  };\n}\n\nfunction sum(a, b, c) {\n  return a + b + c;\n}\n\nconst curriedSum = curry(sum);\nconst add5 = curriedSum(5);\nconst add5and7 = add5(7);\nconsole.log(add5and7(3)); // Output: 15\n```\nCurrying enhances function flexibility and composability.",
    "difficulty": "advanced",
    "likes": 0,
    "dislikes": 0
  },
  {
    "title": "Explain the concept of 'functional programming' in JavaScript and provide examples of key functional programming concepts, such as immutability, higher-order functions, and map/reduce operations.",
    "answer": "Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. In JavaScript, functional programming is supported and encouraged. Key concepts include:\n\n1. Immutability: Data is not changed once created, which helps in preventing side effects.\n\n2. Higher-Order Functions: Functions that take other functions as arguments or return them. They enable code abstraction and reusability.\n\n3. Map/Reduce: 'map()' transforms data by applying a function to each element, and 'reduce()' combines data by applying an accumulator function. These operations are used for processing arrays or lists in a functional style.\n\nHere's an example of mapping and reducing an array of numbers:\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\n\n// Mapping: Multiply each number by 2\nconst doubledNumbers = numbers.map((num) => num * 2);\n\n// Reducing: Sum all the numbers\nconst sum = numbers.reduce((acc, num) => acc + num, 0);\n\nconsole.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]\nconsole.log(sum); // Output: 15\n```\nFunctional programming promotes code that is easier to reason about and test.",
    "difficulty": "advanced",
    "likes": 0,
    "dislikes": 0
  },{
  "title": "Explain the 'Proxy' object in JavaScript and provide an example of how it can be used to intercept and customize object operations.",
  "answer": "The 'Proxy' object in JavaScript is a powerful mechanism that allows you to intercept and customize fundamental operations on objects, such as property access, assignment, and function invocation. It provides fine-grained control over an object's behavior, making it suitable for implementing features like validation, security, and data transformation.",
  "difficulty": "advanced",
  "likes": 0,
  "dislikes": 0
}

]
JavaScriptQuestion.insertMany(data);
app.get("/", (req, res) => {
  res.send("hi from the server");
});

app.listen(process.env.PORT, async () => {
  console.log(`Server started on Port ${process.env.PORT}`);
  try {
    await connectToDb();
    console.log("sucessfully connected to mongodb");
  } catch (err) {
    console.log("unable to connect to mongodb", err);
  }
});
