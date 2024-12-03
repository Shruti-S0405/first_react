import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
console.log(<h1>Hello, World!</h1>)
root.render(
  <main>
    <img src="src/assets/react-logo.png" width="40px" alt="react-logo" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
)

// All the elements I render get put inside the div with the id of "root"
//(or whatever other element I might select when calling createRoot)

// You can only render 1 parent element at a time. That parent element can have
//as many children elements as you want.

// console.log(<h1>Hello world!</h1>)
// ```
// An object! Unlike creating an HTML element in vanilla DOM JS, what
// gets created from the JSX we have in our React code is a plain JS object
// that React will use to fill in the view.

// *Imperative* means we need to give specific step-by-step instructions on how to
// accomplish a task.
// *Declarative* means we can write our code to simply "describe" *what* should show up
// on the page and allow the rool (React, e.g.) to handle the details on *how* to 
// put those things on the page.

// composable: - We have small pieces that we can put together to make something
// larger or greater than the individual pieces themselves.
