import "./App.css";
import { Button } from "./components/button/Button";

function App() {
  return (
    <div className="content">
      <div className="calculator">
        <div className="calculatorHeader">
          <p className="equation"></p>
          <p className="solution"></p>
        </div>
        <div className="botoes">
          <div className="linhas">
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick
              text={"CE"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick
              text={"C"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick
              text={"%"}
            />
            <Button
              color={"#339dff"}
              background={"#005db2"}
              onClick
              text={"/"}
            />
          </div>
          <div className="linhas"></div>
          <div className="linhas"></div>
          <div className="linhas"></div>
          <div className="linhas"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
