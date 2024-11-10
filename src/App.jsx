import { useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState("");

  const handleClick = (e) => {
    setTotal(total.concat(e.target.name));
    console.log(e);
    console.log(e.target);
  };

  const clear = () => {
    setTotal("");
  };

  const handleDel = () => {
    setTotal(total.slice(0, -1));
  };

  const calculate = () => {
    try {
      setTotal(eval(total).toString());
    } catch {
      setTotal("ERROR");
    }
  };
  return (
    <>
      <div className="app">
        <h1>MY CALCULATOR</h1>

        <div className="container">
          <form>
            <input type="text" value={total} readOnly />
          </form>
          <div className="btns">
            <button name="1" onClick={handleClick}>
              1
            </button>
            <button name="2" onClick={handleClick}>
              2
            </button>
            <button name="3" onClick={handleClick}>
              3
            </button>
            <button name="+" onClick={handleClick} className="specialBtn">
              +
            </button>
            <button name="4" onClick={handleClick}>
              4
            </button>
            <button name="5" onClick={handleClick}>
              5
            </button>
            <button name="6" onClick={handleClick}>
              6
            </button>
            <button name="-" onClick={handleClick} className="specialBtn">
              -
            </button>
            <button name="7" onClick={handleClick}>
              7
            </button>
            <button name="8" onClick={handleClick}>
              8
            </button>
            <button name="9" onClick={handleClick}>
              9
            </button>
            <button name="*" onClick={handleClick} className="specialBtn">
              &times;
            </button>
            <button name="." onClick={handleClick}>
              .
            </button>
            <button name="0" onClick={handleClick}>
              0
            </button>
            <button onClick={handleDel} className="specialBtn">
              DEL
            </button>
            <button name="/" onClick={handleClick} className="specialBtn">
              &divide;
            </button>
            <button onClick={clear} id="clear" className="specialBtn">
              AC
            </button>
            <button onClick={calculate} id="equal">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
