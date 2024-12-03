import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
console.log(<h1>Hello, World!</h1>)
root.render(
  // <TemporaryComponent />
  <PageComponent/>
)

function PageComponent(){
  return (
    <main>
      <h1>Why do I like React? </h1>
      <ul>
        <li>The most popular Javascript Library</li>
        <li>I am more likely to get a job as a front end developer
        if I know Reac</li>
        <li>It is declarative and composable</li>
        <li>It is cool and crazy</li>
      </ul>
    </main>
  )
}

// function TemporaryComponent() {
//   return (
//     <main>
//       <img src="src/assets/react-logo.png" width="40px" alt="react-logo" />
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on GitHub</li>
//         <li>Is maintained by Meta</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//   </main>
//   )
// }
