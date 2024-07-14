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
        "https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 1,
      name: "John",
      age: 21,
      image:
        "https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
