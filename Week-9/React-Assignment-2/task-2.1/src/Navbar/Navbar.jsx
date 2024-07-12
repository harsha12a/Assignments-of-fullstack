import "./Navbar.css";
function Navbar() {
  return (
    <div className="head">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Logos.svg/800px-Logos.svg.png"
        alt=""
        width="100px"
      />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
