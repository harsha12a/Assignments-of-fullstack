import { useState } from "react";
import "./User.css";
function User(props) {
  const { arr, cnt, setcnt } = props.x;
  const [a, seta] = useState([]);
  const [c, setc] = useState(0);
  function Add() {
    if (c < arr.length) {
      setc(c + 1);
      seta([...a, arr[c]]);
      setcnt(cnt + 1);
    }
  }
  return (
    <div>
      <h3>
        Click here -<button onClick={Add}>Add User</button>
      </h3>
      <div className="box1">
        {a.map((r) => {
          return (
            <div key={r.id} className="box">
              <h2>Name - {r.name}</h2>
              <p>Username - {r.username}</p>
              <p>Email - {r.email}</p>
              <p>Phone - {r.phone}</p>
              <p>Website - {r.website}</p>
              <button onClick={Add}>Add User</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default User;
