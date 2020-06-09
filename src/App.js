import React, {useState} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import ColorfulBox from './components/ColorfulBox'
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, FormControl, InputGroup} from 'react-bootstrap'

function App() {
  let count = useSelector(state=>state.count) // ".count" comes from key in initialState object
  let dispatch = useDispatch()
  let [changeBackground,setChangeBackground] = useState(null)
  let [changeNumber,setChangeNumber] = useState(1)

  const increaseNum = () => {
    dispatch({type:"increment",payload:changeNumber}) // dispatch sends the action, and action is an object
  }

  const changeNum = (v) => {
    setChangeNumber(parseInt(v))
  }


  return (
    <div className="App">
      <div>
        <h1>Counter: {count}</h1>
      </div>
      <div className="buttons-field">
        <FormControl className="textfield-main" type="number" placeholder="Type a number here" onChange={(e)=>changeNum(e.target.value)} style={{width:"200px"}}/>
        
        <Button className="button" variant="success" onClick={()=>increaseNum()}>Increase</Button>
        
        {count == 0 ? <Button className="button" variant="secondary" disabled="true">Decrease Disabled</Button> : <Button className="button" variant="warning" onClick={()=>dispatch({type:"decrement",payload:changeNumber})}>Decrease</Button>}
        
        <Button className="button" variant="danger" onClick={()=>dispatch({type:"reset"})}>Reset</Button>
        
        <FormControl className="textfield-main" type="text" placeholder="Type a color here" onChange={(e)=>setChangeBackground(e.target.value)} style={{width:"200px"}}/>
        
      </div>
      {/* <ColorfulBox /> */}
      <div className="boxarea-main">
        {Array(count).fill("box").map(box => {
          return (
            <div className="boxarea-main-2" style={{width:"150px", height:"100px", backgroundColor:`${changeBackground}`, margin:"10px"}}><ColorfulBox /></div>
        )})}
      </div>
    </div>
  );
}

export default App;
