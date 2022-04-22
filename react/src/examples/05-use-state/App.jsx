import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("PhD");

  const input = {
    padding: "1rem",
    width: "500px",
    display: "block",
    marginBottom: "1rem",
  };

  const label = {
    display: "block",
    paddingBottom: "0.25rem",
  };

  const handleChange = (event) => {
    console.log(event);
    setTitle(event.target.value);
  };

  return (
    <div style={{ margin: "1rem" }}>
      <form>
        <div
          style={{
            border: "1px solid #EEE",
            width: "500px",
            marginBottom: "1rem",
            padding: "1rem",
            background: "#4089A5",
            color: "white",
          }}
        >
          <div style={{ paddingBottom: "1rem" }}>
            <label>Uncontrolled input</label>
          </div>

          <code>{"<input />"}</code>
        </div>

        <input style={input} />

        <div
          style={{
            border: "1px solid #EEE",
            width: "500px",
            marginBottom: "1rem",
            padding: "1rem",
            background: "#4EA6BF",
            color: "white",
          }}
        >
          <div style={{ paddingBottom: "1rem" }}>
            <label>Controlled input with value</label>
          </div>

          <code>{"<input value={title} />"}</code>
        </div>

        <input style={input} value={title} />

        <div
          style={{
            border: "1px solid #EEE",
            width: "500px",
            marginBottom: "1rem",
            padding: "1rem",
            background: "#73C6D2",
            color: "white",
          }}
        >
          <div style={{ paddingBottom: "1rem" }}>
            <label>Controlled input with value and event handler</label>
          </div>
          <code style={label}>{"<input value={title} onChange={handleChange} />"}</code>
        </div>
        <input style={input} value={title} onChange={handleChange} />
      </form>
    </div>
  );
};

export default App;
