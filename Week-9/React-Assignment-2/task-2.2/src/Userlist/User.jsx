import "./User.css";
function User(props) {
  return (
    <div className="cards">
      <img src={props.x.image} alt="" className="pic" />
      <img src={props.x.logo} alt="" className="logos" />
      <h3>{props.x.hea}</h3>
      <p>{props.x.desc}</p>
      <h4>Name - {props.x.name}</h4>
    </div>
  );
}
export default User;
