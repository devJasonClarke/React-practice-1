import "../card.css";
function Person(props) {
  return (
    <div className="card">
      <h1>{props.firstName}</h1>
      <h2>{props.lastName}</h2>
      <p>is great</p>
    </div>
  );
}

export default Person;
