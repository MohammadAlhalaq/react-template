import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return createElement("div", {}, [
  //   createElement("h1", {}, "Adopt me!"),
  //   createElement(Pet, { name: "ahmed", age: 15, feild: "java" }),
  //   createElement(Pet, {
  //     name: "mohammad",
  //     age: 15,
  //     feild: "javascript"
  //   }),
  //   createElement(Pet, { name: "housin", age: 15, feild: "python" })
  // ]);

  // the same is that
  return (
    <div>
      <h1> Adopt me!</h1>
      <Pet name="mohammad" age={15} feild="java" />
      <Pet name="ahmed" age={15} feild="javascript" />
      <Pet name="hosain" age={15} feild="python" />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
