import { useState, React } from "react";
// import { build } from "vite";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <div>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//       </div>
//     </div>
//   );
// }

// export default Counter;

function changeColour() {
  const [colour, setColour] = useState("white");

  const change=() => {
    setColour("black");
  }

  const resetColour = () => {
    setColour("white");
  }

  return (
    <div>
      <h1 style={{ color: colour  , backgroundColor: "white" }}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laborum, corporis aliquam, unde numquam ea molestiae voluptatibus eius possimus natus expedita deleniti blanditiis dignissimos delectus sapiente temporibus tempora porro architecto.</p></h1>
      <button onClick={change}>Change colour</button>
      <button onClick={resetColour}>Reset colour</button>
    </div>
  );
}

export default changeColour;
// Inside your App.jsx file:
