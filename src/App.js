import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Nacho" animal="dog" breed="Rottweiler" />
      <Pet name="Wizard" animal="turtle" breed="Painted" />
      <Pet name="Nala" animal="dog" breed="New Foundland" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
