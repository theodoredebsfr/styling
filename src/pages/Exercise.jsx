import { useState } from "react";
import "./Exercise.css";

const Exercise = () => {
  const [color, setColor] = useState("white");
  const yesHandler = () => setColor("green");
  const noHandler = () => setColor("red");
  return (
    <>
      <Text />
      <div id="exercise">
        <h1 className={`heading ${color}`}>CSS is great!</h1>
        <menu>
          <li>
            <button onClick={yesHandler}>Yes</button>
          </li>
          <li>
            <button onClick={noHandler}>No</button>
          </li>
        </menu>
      </div>
    </>
  );
};
export default Exercise;
const Text = () => (
  <code>
    <pre></pre>
  </code>
);
