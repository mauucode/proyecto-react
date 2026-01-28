import React, { useState } from 'react';
import './App.css';
import './misEstilos.css';

function App() {

  //1. Definir el estado inicial
  const [cuenta, setCuenta] = useState(0);




  return (
    <div className="App">
      <header className="App-header">
        <h1> Mi App en react esta funcioando</h1>
        <p>Haz hecho clikc {cuenta} veces</p>

        <div>
          <button onClick={() => setCuenta(cuenta + 1)}>Aumentar</button>
          <button onClick={() => setCuenta(cuenta - 1)}>Disminuir</button>
        </div>
      </header>
    </div>
  );
}

export default App;
