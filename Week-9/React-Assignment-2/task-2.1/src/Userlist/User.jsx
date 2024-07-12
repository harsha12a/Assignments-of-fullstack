import "./User.css";
function User(props) {
  return (
    <div className="card">
      <h2>ID - {props.x.id}</h2>
      <h1>Name - {props.x.name}</h1>
      <img src={props.x.image} alt="" width="300px" />
      <h2>Age - {props.x.age}</h2>
      <button>Profile</button>
    </div>
  );
}
export default User;
