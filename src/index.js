import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const initialState = [
  {
    text: 'Reebok',
    done: false,
    id: Math.random().toString(18).substring(2, 9)
  },
  {
    text: 'Adidas',
    done: false,
    id: Math.random().toString(18).substring(2, 9)
  },
  {
    text: 'Puma',
    done: false,
    id: Math.random().toString(18).substring(2, 9)

  },
  {
    text: 'Noski',
    done: false,
    id: Math.random().toString(18).substring(2, 9)
  },
]
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'Add' : 
      return [...state, {text: action.payload, done: false, id: Math.random().toString(18).substring(2, 9)}]
    case 'delete' : 
      return [...state.filter(i => i.id !== action.payload)]
    case 'check' : 
      return [...state.map(i => i.id === action.payload ? {...i, done: !i.done} : {...i})]
  } 
  return state
}
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
