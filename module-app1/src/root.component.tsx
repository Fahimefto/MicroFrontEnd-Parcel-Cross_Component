export default function Root(props) {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>Module 1 from app1</h1>
      <button onClick={() => alert("app1")}>click me </button>
    </div>
  );
}
