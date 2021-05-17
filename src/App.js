import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet"



const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Nacho",
      animal: "Dog",
      breed: "Rottweiler",
    }),
    React.createElement(Pet, {
      name: "Wizard",
      animal: "Turtle",
      breed: "Painted",
    }),
    React.createElement(Pet, {
      name: "Nala",
      animal: "Dog",
      breed: "New Foundland",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
