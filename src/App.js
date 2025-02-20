import Square from './Square';
import Input from './Input';
import { useState } from 'react'

function App() {
  const [colorName, setColorName] = useState('');
  return (
    <div className="App">
      <Square 
      colorName = {colorName}
      />
      <Input
      colorName = {colorName}
      setColorName ={setColorName}
      />
    </div>
  );
}

export default App;
