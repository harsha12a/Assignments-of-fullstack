import "./Navbar.css";
function Navbar() {
  return (
    <div className="head">
      <img
        src="https://img.freepik.com/free-vector/leaf-maple-icon-logo-design_474888-2154.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717470000&semt=sph"
        alt=""
        width="70px"
      />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Author</a>
        </li>
        <li>
          <a href="#">About this project</a>
        </li>
      </ul>
      <div className="logo">
        <a href="https://github.com/">
          <img
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            alt=""
            width="50px"
          />
        </a>
        <a href="https://gmail.com/">
          <img
            src="https://img.freepik.com/premium-vector/mail-simple-icon-white-mail-icon-black-circle-vector-illustration-stock-image_797523-1729.jpg?w=360"
            alt=""
            width="50px"
          />
        </a>
        <a href="https://www.instagram.com/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            alt=""
            width="40px"
          />
        </a>
        <a href="https://www.linkedin.com">
          <img
            src="https://banner2.cleanpng.com/20180417/ifw/kisspng-computer-icons-linkedin-social-media-5ad63de29fe542.6407539515239899866549.jpg"
            alt=""
            width="50px"
          />
        </a>
      </div>
    </div>
  );
}
export default Navbar;
