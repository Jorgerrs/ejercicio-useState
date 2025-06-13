import React, {useState} from 'react';
import './App.css'

function App() {
 //Aquí tu código
 const [name, setName] = useState('Sofía');

 return (
    <div>
        <h2>Teache Name: {name}</h2>
        <ul>
        <li onClick={() => setName('Data')}>Data</li>
        <li onClick={() => setName('Reyes')}>Reyes</li>
        <li onClick={() => setName('Yolanda')}>Yolanda</li>
      </ul>
    </div>
 )

}

export default App
