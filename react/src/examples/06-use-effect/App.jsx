import { useEffect, useRef, useState } from "react";

//
// PART 1
//
//
//
// const App = () => {
//   const [count, setCount] = useState(0);

//   const log = () => {
//     setTimeout(() => {
//       console.log("Count: " + count);
//     }, 3000);
//   };

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={log}>Log</button>
//     </>
//   );
// };

//
// PART 2
//
//
//
// const App = () => {
//   const [count, setCount] = useState(0);

//   const currentCount = useRef();

//   currentCount.current = count; // currentCount = { current: 0 }

//   const log = () => {
//     setTimeout(() => {
//       console.log("Count: " + currentCount.current);
//     }, 3000);
//   };

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={log}>Log</button>
//     </>
//   );
// };

//
// PART 3
//
//
//

// // this example demonstrates a problem that may occur when using a state variable as a dependency to useEffect.
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(handle);
  }, [count]);

  return <>`Count: ${count}`</>;
}

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(true)}>Show Counter</button>
      <button onClick={() => setShow(false)}>Hide Counter</button>
      {show && <Counter />}
    </>
  );
};

// //
// // PART 4
// //
// //
// //
// // this examples solves the problem in setInterval_1 by calling setCount with a callback.
// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const handle = setInterval(() => {
//       // use the callback version of setCount; the callback returns a new count based on the previous count
//       // that is passed to it.
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);

//     return () => clearInterval(handle);
//   }, []);
//   // empty dependency array because the effect does not depend on the count variable any more.
//   // The timer is therefore only created once.

//   return <>`Count: ${count}`</>;
// }

// const App = () => {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       <button onClick={() => setShow(true)}>Show Counter</button>
//       <button onClick={() => setShow(false)}>Hide Counter</button>
//       {show && <Counter />}
//     </>
//   );
// };

export default App;
