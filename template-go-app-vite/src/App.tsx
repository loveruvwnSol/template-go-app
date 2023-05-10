import { useEffect, useState } from "react";
// import "./App.css";
import axios from "axios";

type Fruit = {
  id: number;
  name: string;
  icon: string;
};

function App() {
  const [fruits, setFruits] = useState<Fruit[]>([
    { id: 0, name: "", icon: "" },
  ]);

  useEffect(() => {
    (async () => {
      const data = await axios.get("http://localhost:8080");
      console.log(data.data);
      console.log(data.data[0]);
      setFruits(data.data);
    })();
  }, []);

  return (
    <div>
      <h1>hello</h1>
      {fruits.map((fruit) => (
        <p key={fruit.id}>
          <span>{fruit.name}</span>
          <span>{fruit.icon}</span>
        </p>
      ))}
    </div>
  );
}
// <>
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src={viteLogo} className="logo" alt="Vite logo" />
//     </a>
//     <a href="https://react.dev" target="_blank">
//       <img src={reactLogo} className="logo react" alt="React logo" />
//     </a>
//   </div>
//   <h1>Vite + React</h1>
//   <div className="card">
//     <button onClick={() => setCount((count) => count + 1)}>
//       count is {count}
//     </button>
//     <p>
//       Edit <code>src/App.tsx</code> and save to test HMR
//     </p>
//   </div>
//   <p className="read-the-docs">
//     Click on the Vite and React logos to learn more
//   </p>
// </>

export default App;
