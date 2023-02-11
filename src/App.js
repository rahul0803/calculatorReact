import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [msg, setMsg] = useState("");
  const [message, successMessage] = useState("");

  const addNum = () => {
    if (!number || !number2) {
      setMsg("Error: Input fields can't be empty");
      successMessage("");
      setResult("");
      document.getElementById("result").style.display = "none";
    }
    if (number && number2) {
      if (isNaN(number) || isNaN(number2)) {
        setNumber("");
        setNumber2("");
        successMessage("");
        setMsg("");
        document.getElementById("result").style.display = "none";
      }
    }
    if (number && number2) {
      if (!isNaN(number) && !isNaN(number2)) {
        successMessage("Success: Your result is shown above!");
        setMsg("");
        setResult(+number + +number2);
        document.getElementById("result").style.display = "block";
      }
    }
  }

  const subNum = () => {
    if (!number || !number2) {
      setMsg("Error: Input fields can't be empty");
      successMessage("");
      setResult("");
      document.getElementById("result").style.display = "none";
    }
    if (number && number2) {
      if (isNaN(number) || isNaN(number2)) {
        setNumber("");
        setNumber2("");
        successMessage("");
        setMsg("");
        document.getElementById("result").style.display = "none";
      }
    }
    if (number && number2) {
      if (!isNaN(number) && !isNaN(number2)) {
        successMessage("Success: Your result is shown above!");
        setMsg("");
        setResult(+number - +number2);
        document.getElementById("result").style.display = "block";
      }
    }
  }

  const mulNum = () => {
    if (!number || !number2) {
      setMsg("Error: Input fields can't be empty");
      successMessage("");
      setResult("");
      document.getElementById("result").style.display = "none";
    }
    if (number && number2) {
      if (isNaN(number) || isNaN(number2)) {
        setNumber("");
        setNumber2("");
        successMessage("");
        setMsg("");
        document.getElementById("result").style.display = "none";
      }
    }
    if (number && number2) {
      if (!isNaN(number) && !isNaN(number2)) {
        successMessage("Success: Your result is shown above!");
        setMsg("");
        setResult(+number * +number2);
        document.getElementById("result").style.display = "block";
      }
    }
  }

  const divNum = () => {
    if (!number || !number2) {
      setMsg("Error: Input fields can't be empty");
      successMessage("");
      setResult("");
      document.getElementById("result").style.display = "none";
    }
    if (number && number2) {
      if (isNaN(number) || isNaN(number2)) {
        setNumber("");
        setNumber2("");
        successMessage("");
        setMsg("");
        document.getElementById("result").style.display = "none";
      }
    }
    if (number && number2) {
      if (!isNaN(number) && !isNaN(number2)) {
        successMessage("Success: Your result is shown above!");
        setMsg("");
        setResult(+number / +number2);
        document.getElementById("result").style.display = "block";
      }
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">React Calculator</h1>

        <input type="text" placeholder="Num 1" className="box1" value={number} onChange={(e) => {
          setNumber(e.target.value);
        }}></input>
        <input type="text" placeholder="Num 2" className="box2" value={number2} onChange={(e) => {
          setNumber2(e.target.value);
        }}></input>

        <button id='add' onClick={addNum}>+</button>
        <button id='sub' onClick={subNum}>-</button>
        <button id='mul' onClick={mulNum}>*</button>
        <button id='div' onClick={divNum}>/</button>

        <p id='result'>Result={result}</p>
        <p id='outputMsg'>{msg}</p>
        <p id='successMsg'>{message}</p>

      </div>
    </div>
  );
}

export default App;
