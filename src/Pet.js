import React from "react";

export default function Pet({ name, age, feild }) {
  // return createElement("div", {}, [
  //   createElement("h1", {}, name),
  //   createElement("h2", {}, age),
  //   createElement("h3", {}, feild)
  // ]);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{feild}</h3>
    </div>
  );
}
