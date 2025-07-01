import "./App.css";
import { useState } from "react";
import { Button } from "./components/button/Button";
import { ZeroButton } from "./components/zeroButton/zeroButton";

function App() {
  const [numberOne, setNumberOne] = useState("");
  const [simbol, setSimbol] = useState("");
  const [numberTwo, setNumberTwo] = useState("");

  function addNumber(n) {
    let num = numberOne + n;
    setNumberOne(num);
  }

  function count(signal) {
    if(numberOne != "" && numberTwo != "") {
      if(simbol === "/") {
        setNumberTwo(parseFloat(numberTwo) / parseFloat(numberOne));
      } else if (simbol === "*") {
        setNumberTwo(parseFloat(numberTwo) * parseFloat(numberOne));
      } else if (simbol === "-") {
        setNumberTwo(parseFloat(numberTwo) - parseFloat(numberOne));
      } else if (simbol === "+") {
        setNumberTwo(parseFloat(numberTwo) + parseFloat(numberOne));
      }
      setSimbol(signal);
      setNumberOne("");
    } else {
      setSimbol(signal);
      setNumberTwo(numberOne);
      setNumberOne("");
    }
  }

  function result() {
    if(numberOne != "" && numberTwo != "" && simbol != "=") {
      if(simbol === "/") {
        setNumberOne(parseFloat(numberTwo) / parseFloat(numberOne));
      } else if (simbol === "*") {
        setNumberOne(parseFloat(numberTwo) * parseFloat(numberOne));
      } else if (simbol === "-") {
        setNumberOne(parseFloat(numberTwo) - parseFloat(numberOne));
      } else if (simbol === "+") {
        setNumberOne(parseFloat(numberTwo) + parseFloat(numberOne));
      }
      setNumberTwo("");
      setSimbol("=");
    }
  }

  function clear() {
    setNumberOne("");
  }

  function clearAll() {
    setNumberOne("");
    setNumberTwo("");
    setSimbol("");
  }

  function percentage() {
    let p = (parseFloat(numberOne) / 100) * parseFloat(numberTwo);
    setNumberOne(p);
  }

  function addPoint() {
    if (numberOne === "") {
      setNumberOne("0.");
    } else if (!numberOne.includes(".")) {
      let num = numberOne + ".";
      setNumberOne(num);
    }
  }

  return (
    <div className="content">
      <div className="calculator">
        <div className="calculatorHeader">
          <p className="equation">{numberTwo}</p>
          <p className="solution">
            {simbol} {numberOne}
          </p>
        </div>
        <div className="botoes">
          <div className="linhas">
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => clear()}
              text={"CE"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => clearAll()}
              text={"C"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => percentage()}
              text={"%"}
            />
            <Button
              color={"#339dff"}
              background={"#005db2"}
              onClick={() => count('/')}
              text={"/"}
            />
          </div>
          <div className="linhas">
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => addNumber(7)}
              text={"7"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => addNumber(8)}
              text={"8"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => addNumber(9)}
              text={"9"}
            />
            <Button
              color={"#339dff"}
              background={"#005db2"}
              onClick={() => count('*')}
              text={"X"}
            />
          </div>
          <div className="linhas">
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => addNumber(4)}
              text={"4"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => addNumber(5)}
              text={"5"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => addNumber(6)}
              text={"6"}
            />
            <Button
              color={"#339dff"}
              background={"#005db2"}
              onClick={() => count('-')}
              text={"-"}
            />
          </div>
          <div className="linhas">
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => addNumber(1)}
              text={"1"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => addNumber(2)}
              text={"2"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => addNumber(3)}
              text={"3"}
            />
            <Button
              color={"#339dff"}
              background={"#005db2"}
              onClick={() => count('+')}
              text={"+"}
            />
          </div>
          <div className="linhas">
            <ZeroButton 
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => addNumber(0)}
              text={"0"}
            />
            <Button
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => addPoint()}
              text={"."}
            />
            <Button
              color={"#339dff"}
              background={"#005db2"}
              onClick={() => result()}
              text={"="}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
