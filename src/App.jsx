import "./App.css";
import { Button } from "./components/button/Button";
import { ZeroButton } from "./components/zeroButton/zeroButton";

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
          <div className="linhas">
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick
              text={"7"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick
              text={"8"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick
              text={"9"}
            />
            <Button
              color={"#339dff"}
              background={"#005db2"}
              onClick
              text={"X"}
            />
          </div>
          <div className="linhas">
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick
              text={"4"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick
              text={"5"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick
              text={"6"}
            />
            <Button
              color={"#339dff"}
              background={"#005db2"}
              onClick
              text={"-"}
            />
          </div>
          <div className="linhas">
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick
              text={"1"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick
              text={"2"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick
              text={"3"}
            />
            <Button
              color={"#339dff"}
              background={"#005db2"}
              onClick
              text={"+"}
            />
          </div>
          <div className="linhas">
            <ZeroButton 
              color={"#a5a5a5"}
              background={"#616161"}
              onClick
              text={"0"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick
              text={"."}
            />
            <Button
              color={"#339dff"}
              background={"#005db2"}
              onClick
              text={"="}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
