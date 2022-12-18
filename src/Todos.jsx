import { useSelector, useDispatch } from "react-redux";
function Todos() {
const todo = useSelector(state => state);
const dispatch = useDispatch()
function handleClick(id){
  dispatch({
    type: 'delete',
    payload: id
  })
}
function checkedChange(id){
  dispatch({
    type: 'check',
    payload: id
  })
}
  return (
    <div className="Todos">   
          {todo.map(i => {
            return (
              <ul key={i.id} className="d-flex justify-content-between">
                <input type="checkbox" checked={i.done} onChange={() => checkedChange(i.id)}/>
                <li className = {i.done ? 'text-line' : ""} >
                  <div>{i.text}</div>                            
                </li>
                <button className="btn btn-danger" onClick={() => handleClick(i.id)}>X</button>
              </ul>
            )
          })}
    </div>
  );
}
export default Todos