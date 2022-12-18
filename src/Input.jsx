import { useState } from "react";
import { useDispatch} from "react-redux";

function Input() {
  const [text, setText] = useState('');
  const dispatch = useDispatch()
  function handleChange(e){
    setText(e.target.value)
  }
  function fun(e){
    if(e.key === 'Enter'){
      handleClick()
    }
  }
  function handleClick(){
    dispatch({
      type: 'Add',
      payload: text
    })
    setText('')
  }
  return (
    <div className="Input">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" onClick={handleClick}>fsddsfsdfdsf</button>
        </div>
        <input 
          className="form-control"
          type="text"
          value={text}
          onChange={handleChange}
          onKeyDown={fun}/>
      </div>
    </div>
  );
}
export default Input