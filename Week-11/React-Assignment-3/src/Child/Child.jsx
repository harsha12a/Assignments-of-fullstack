import "./Child.css";
function Child(props) {
  const { cnt, setCnt } = props.x;
  function Increment() {
    setCnt(cnt + 1);
  }
  function Decrement() {
    setCnt(cnt - 1);
  }
  return (
    <div className="btns">
      <div className="box1">
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
      <h1>Child</h1>
    </div>
  );
}
export default Child;
