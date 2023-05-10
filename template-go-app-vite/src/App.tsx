import { FormEvent, useEffect, useState } from "react";
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
      setFruits(data.data);
    })();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post("http://localhost:8080", {
      // axiosならJSONデータをリテラルで書ける
      name: data.get("name"),
    });
  };

  return (
    <div>
      <h1>hello</h1>
      {fruits.map((fruit) => (
        <p key={fruit.id}>
          <span>{fruit.name}</span>
          <span>{fruit.icon}</span>
        </p>
      ))}
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">Name: </label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <input type="submit" defaultValue={"Submit"} />
      </form>
    </div>
  );
}

export default App;
