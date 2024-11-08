import "./User.css";
function User(props) {
  let mousemove = (e) => {
    let ele = e.currentTarget;
    let rect = ele.getBoundingClientRect();
    let skX = e.clientX - rect.left;
    let skY = e.clientY - rect.top;
    let Y = (skX / rect.width - 0.5) * 20;
    let X = (skY / rect.height - 0.5) * -20;
    ele.style.transform = `rotateX(${X}deg) rotateY(${Y}deg)`;
  };

  let mouseleave = (e) => {
    let ele = e.currentTarget;
    ele.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };
  return (
    <div className="container">
      <div className="cards" onMouseMove={mousemove} onMouseLeave={mouseleave}>
        <img src={props.x.image} alt="" className="pic" />
        <img src={props.x.logo} alt="" className="logos" />
        <h3>{props.x.hea}</h3>
        <p>{props.x.desc}</p>
        <h4>Name - {props.x.name}</h4>
      </div>
    </div>
  );
}
export default User;
