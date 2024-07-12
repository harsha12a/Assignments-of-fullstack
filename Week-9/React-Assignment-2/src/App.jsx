import "./App.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import User from "./Userlist/User";
function App() {
  const arr = [
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://i.insider.com/565b1cf6dd08955b3f8b4594?width=960&format=jpeg",
    },
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://i.insider.com/565b1cf6dd08955b3f8b4594?width=960&format=jpeg",
    },
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://i.insider.com/565b1cf6dd08955b3f8b4594?width=960&format=jpeg",
    },
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://i.insider.com/565b1cf6dd08955b3f8b4594?width=960&format=jpeg",
    },
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://i.insider.com/565b1cf6dd08955b3f8b4594?width=960&format=jpeg",
    },
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://i.insider.com/565b1cf6dd08955b3f8b4594?width=960&format=jpeg",
    },
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://i.insider.com/565b1cf6dd08955b3f8b4594?width=960&format=jpeg",
    },
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://i.insider.com/565b1cf6dd08955b3f8b4594?width=960&format=jpeg",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="container">
        {arr.map((i) => (
          <User key={i.id} x={i} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default App;
