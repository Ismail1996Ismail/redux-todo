import './App.css';

import Todos from './Todos';
import Input from './Input';

function App() {
  return (
    <div className="container-sm">
        <div className="grey">
          <Input/>
          <Todos/>
        </div>
    </div>
  );
}

export default App;
