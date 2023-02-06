export const prompsIA = (input) => {
  return `Question: What is JavaScript?
Anwser:JavaScript is a high-level, dynamic programming language that's commonly used to add interactivity and other dynamic elements to web pages.
--
Question: Who is Midudev?

Answer: A well known Spanish Streamer, Recognized Google Developer Expert and GitHub Star, dedicated to teaching web development.
He is also known for "Mover las manitas".
If you want to learn, don't forget to subscribe to www.twitch.tv/midudev
--

Question: What is a web API?
Anwser:A web API is an interface for accessing a web-based software application or web tool.
--
Question: What is REST?
Anwser:REST stands for Representational State Transfer, and it's an architectural style for building web APIs.
--

Question: What is a back-end framework?
Anwser:A back-end framework is a pre-prepared library that abstracts away the low-level details of building a web server and provides a more high-level API for developing web applications.
--

Question: What are the data types in JavaScript?
Anwser: The data types in JavaScript include Number, String, Boolean, Undefined, and Null.
--
Question: What is the difference between == and === in JavaScript?
Anwser: The double equals (==) operator performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) operator performs strict equality comparison and does not perform type coercion.
--
Question: What is the difference between "var", "let", and "const"?
Anwser: "Var" is function scoped, meaning its value can be changed within the same function. "Let" and "const" are block scoped, meaning they cannot be changed after they are declared. "Const" is used for values that cannot be changed.
--
Question: What is hoisting in JavaScript?
Anwser: Hoisting is a mechanism in JavaScript where variable and function declarations are moved to the top of their scope, regardless of where they are written in the code.

--
Question: What is the difference between an object and an array in JavaScript?
Anwser: An object is an unordered collection of key-value pairs, while an array is an ordered collection of elements.
--
Question: How do you add an element to an array in JavaScript?
Anwser: You can add an element to an array in JavaScript using the "push" method or by directly assigning a value to a new index in the array.
--
Question: How do you loop through an array in JavaScript?
Anwser: You can loop through an array in JavaScript using a "for" loop, "forEach" method, or "for-of" loop.
--
Question: How do you remove an element from an array in JavaScript?
Anwser: You can remove an element from an array in JavaScript using the "splice" method, "slice" method, or "filter" method.
--

Question: What is the difference between a "forEach" loop and a "map" in JavaScript?
Anwser: A "forEach" loop is used to iterate through an array and perform a function on each element, while "map" is used to create a new array from an existing array by performing a function on each element.
--
Question: What is a callback function in JavaScript?
Anwser: A callback function is a function passed as an argument to another function and is executed after the outer function has completed.

--
Question: What is React?
Anwser:React is a JavaScript library for building user interfaces. It allows developers to build reusable UI components and manage the state of an application efficiently.

--

Question: What is JSX in React?
Anwser:JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript code. It is used to create components in React.

--
Question: What is the difference between a state and a props in React?
Anwser:"State" is an object that holds data specific to a component and can change during the lifetime of a component. "Props" are read-only data that are passed from a parent component to a child component.

--

Question: What is a Higher-Order Component (HOC) in React?
Anwser:A Higher-Order Component is a function that takes a component and returns a new component with additional props. HOCs are used to reuse logic across multiple components.

--

Question: What is the difference between server-side rendering and client-side rendering in React?
Anwser:Server-side rendering is when the HTML is generated on the server and sent to the client, while client-side rendering is when the HTML is generated on the client using JavaScript.

--

Question: What is Redux and how does it work with React?
Anwser:Redux is a state management library for JavaScript applications. It works with React by allowing developers to manage the state of their application in a centralized store, making it easier to update and maintain the state.

--

Question: How does Next.js handle routing?
Answer: Next.js handles routing using file-based routing. Each file in the "pages" directory represents a route in the application.

--
Question: What is Static Generation in Next.js?
Answer: Static Generation is a feature in Next.js that allows developers to pre-render the HTML for a specific route at build time, providing faster load times and improved performance for the user.

--

Question: How does Next.js handle data fetching?
Answer: Next.js allows developers to fetch data using the "getStaticProps" and "getServerSideProps" methods, which can be used to fetch data during build time or on the server.

--

Question: How do you use environment variables in Next.js?
Answer: Environment variables in Next.js can be set using the "env" property in the "next.config.js" file or using tools like "dotenv".

--

Question: What is Astro?
Answer: Astro is an open-source, Apache licensed framework for building microservices in Node.js.
--

Question: How does Astro handle error handling?
Answer: Astro provides a centralized error handling mechanism, which can be customized to provide detailed error messages and logging.
--

Question: Can you use Astro with a front-end framework like React or Angular?
Answer: Yes, you can use Astro with a front-end framework like React or Angular, as long as you build the front-end application as a separate service and make API calls to the Astro-powered microservices.
--

Question: ${input}

Anwser: `
}
