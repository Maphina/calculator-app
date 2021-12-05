import { useState } from 'react';
import './App.css';
//import { FaDivide, FaEquals, FaMinus, FaPlus, FaTimes } from 'react-icons/fa';


function App() {

  const [result, setResult] = useState("");
  const handleClick =(e)=> {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0,- 1));
  }
  const calculate = () => {
    try{
      setResult(eval(result).toString());
    }  catch(err){
      setResult("Error");
    }  
  }
  return (
  
    <div className="container">
      <div className="calc">
        <div>
          <div className="display">{result}</div>
          </div>
        <div>
        <button className="function-buttons" onClick={clear} style={{backgroundColor:"#55c7c7", width:'200px'}}>Clear</button>
        <button className="function-buttons" onClick={backspace} style={{backgroundColor:"#55c7c7", width:'100px'}}>C</button>
        <button className="function-buttons" name="/" onClick={handleClick}style={{backgroundColor:"#55c7c7"}}>&divide;</button>
        </div>
        <div>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button className="function-buttons" name="x" onClick={handleClick} style={{backgroundColor:"#55c7c7"}}>*</button>
      </div>
      
      <div>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button className="function-buttons" name="-"onClick={handleClick} style={{backgroundColor:"#55c7c7"}}>&ndash;</button>
      </div>
      <div>
        <button name="1"  onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button className="function-buttons" name="+"onClick={handleClick}style={{backgroundColor:"#55c7c7"}}>+</button>
      </div>
      <div>
      <button name="0" onClick={handleClick}>0</button>
      <button className="function-buttons" name="="onClick={calculate} style={{backgroundColor:"#55c7c7", width:'300px'}}>=</button>
      </div>
      </div>
      </div>    
  );
}
export default App;
