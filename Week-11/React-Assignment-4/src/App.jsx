import React from "react";
import { useState } from "react";
import User from "./Userlist/User";
import "./App.css";

function App() {
  const [arr, setarr] = useState([]);
  const [cnt, setcnt] = useState(0);
  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setarr(data);
  }
  fetchData();
  return (
    <div className="App">
      <h1>Users Count - {cnt}</h1>
      <div>
        <User x={{ arr, cnt, setcnt }} />
      </div>
    </div>
  );
}

export default App;
