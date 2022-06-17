import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
// import Button from './components/Button';
// import Input from './components/Input';

function App() {
  const [showDiv, setShowDiv] = useState(true);

  return (
    <div className="App">
      {/* <Input showDiv={showDiv} />
      <Button /> */}
      <Counter initialCount={0}/>
    </div>
  );
}

export default App;
