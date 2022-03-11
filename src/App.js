import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
//import { Button, ButtonGroup } from '@chakra-ui/react';



export default function App() {

  const [text, setText] = useState('Hello');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <h1>{text}</h1>
         <Button text="Button" onClick={() => setText('Good buy')}/>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

  // <Button colorScheme='teal' size='lg' text="Button"/>
