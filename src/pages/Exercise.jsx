import { useState } from "react";
import classes from "./Exercise.module.css";

const Exercise = () => {
  const [color, setColor] = useState("white");
  const yesHandler = () => setColor("green");
  const noHandler = () => setColor("red");
  return (
    <>
      <Text />
      <div className={classes.exercise}>
        <h1 className={`${classes.heading} ${classes?.[color]}`}>
          CSS is great!
        </h1>
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
    <pre>using css modules</pre>
  </code>
);
