export const prompsIA = (input) => {
  return `Question: What are the newly introduced input types in HTML5?

  Answer: A namespace is a simple global object that is used to hold methods, properties, and other objects in them. It adds ease of use via modularity, thereby, providing users with the ability to reuse the code and avoid naming conflicts.

--
Question:What is the use of a namespace in Web Development?

Answer:A namespace is a simple global object that is used to hold methods, properties, and other objects in them. It adds ease of use via modularity, thereby, providing users with the ability to reuse the code and avoid naming conflicts.
--
Question: What is the use of CORS?

Answer: CORS stands for Cross-origin Resource Sharing. It is a mechanism that allows a variety of resources to be requested at a time from a domain that is outside the current request domain.
--
Question: What is Responsive Web Design (RWD) in HTML and CSS?

Answer: Responsive Web Design is a concept that is used to create web pages that can scale across multiple resolutions without any loss of information or screen tearing.

It automatically adjusts the structure of the web page based on the device it is viewed on to provide optimal viewing experience.
--
Question:  What are some of the types of CSS that are used?

Answer:There are three main types of CSS present:

  - Inline CSS: Supports the addition of CSS inline, alongside HTML elements
  - External CSS: Used to import an external CSS file to the HTML document
  - Embedded CSS: Used to add CSS styles by making use of the <style> attribute

--
Question:What is the use of a selector in CSS?

Answer: A CSS selector is used with a rule in the inline elements, which require styling. With the help of selectors, it is easy to find and select HTML elements based on factors, such as name, ID, attribute, etc.
--
Question: What are some of the Web Development technologies that you know?

Answer: This question is very common in a Web Development interview. The answer is based on your learning, experience, and proficiency in this field. However, a good Web Developer will have profound working skills in any of the following technologies:

  - HTML
  - CSS
  - JavaScript
  - SQL
  - Python
  - PHP
--
Question: What are the various data types present in JavaScript?

Answer: JavaScript supports the following data types:

  - Boolean
  - Number
  - Object
  - Undefined
  - Null
  - String
  - Function
--

Question:  In HTML what tag can be used for a multi-line text input control?

Answer: For multi-line text input control, you can use the “textarea tag”.

--
Question: Explain how can you refer to CSS file in the web page? 

Answer: You can refer to the .CSS file in the webpage by using the <link> tag.  It should be kept between <head></head>tag. For example <linkhref=”/css/mystyle.css” type=”text/css” rel=”stylesheet”/>

--
Question: How to integrate different stylesheets into a website?

Answer:It depends on the factor of how the site is laid out. However, for the most efficient performance, one file can be used with styles.css. If you want to change any style, open up the styles.css file, and in the relevant section, you can modify CSS. You can also link your HTML file through the below command.

--
Question:  What are some of the pop-up boxes available in JavaScript? Explain them.

Answer: There are usually three types of boxes available in JavaScript. They are:

  - ALERT displays a message with an OK button.

  - CONFIRM: displays a confirmation window with OK and Cancel buttons.

  - PROMPT: displays a pop-up dialog box seeking user inputs followed by confirmation buttons.

--
Question: Define Scope in JavaScript and name different types of Scopes.

Answer: The scope is usually defined to felicitate the accessibility of variables and methods(functions) in applications. There are two types of Scopes in JavaScript: Local and Global. 

--
Question: What is the difference between '==' and '===' operators?

Answer: Although both of the operators belong to the comparison operator category, the '==' operator checks the given values, whereas the '===' behaves like an equality operator and checks both the value and their type.

--
Question: What is Node Package Manager or NPM?

Answer: NPM is a package manager for JavaScript. NPM is designed to put modules intact so that nodes when the need can find them. It is designed to maintain and serve conflicts arising in dependencies. It is mostly used to install programs, configure them, publish and develop them using the intact resources in the modules.

--
Question: What is Webpack?

Answer: Webpack in JavaScript is generally a static module bundler designed to bundle JS files in the browser and check their usage. It dynamically puts various files, assets, images, and fonts in a graph of dependency. It enables you to use the required () method to point to the files and figure out how they will be processed in the final bundle of JavaScript. Initially, a webpack slows down when used initially, but the speed eventually picks when correctly used.

--
Question: What is Document Object Model (DOM)?

Answer: DOM is defined as the interface channeling cross-platform programming and is primarily used to represent HTML and XML documents in nodes and objects. In simple words, DOM defines the way of manipulating the logical structure of the documents and how they are accessed. It can enable developers to modify, create, or remove the document structure, content, and style used.

Moreover, whenever a document is displayed in the browser, it contains the combined style because it automatically converts the styling components like CSS into DOM. The DOM combines these styling components in the content of the document.

--
Question: Who is Midudev?

Answer: A well known Spanish Streamer, dedicated to teaching front-end and web development.He is also known for "Mover las manitas".If you want to learn, don't forget to subscribe to www.twitch.tv/midudev
--
Question: Who is Midudev?

Answer: He is also known for "Mover las manitas".If you want to learn, don't forget to subscribe to www.twitch.tv/midudev
--
Question: Why are media queries used in CSS3?

Answer: Media queries in CSS are used to define different media asset queries that are responsive and come in different varieties of shapes and sizes depending upon the viewer's window. The entities may include height, width, viewport, resolution, orientation, etc.

--
Question: What are GET and POST? Explain what the difference between getting and Post is?

Answer: A GET request is generally used in the instances like AJAX calls to an API. GET requests are limited and secure. The user can easily view them if they have the URL.

A POST request is typically used to store data in a database submitted through a form. POST requests are more secure than getting requests. They have two steps to utilize the resource and remain hidden from the user.

--

Answer: ${input}

TLDR:`
}
