/** 
 * use BEM naming convention
 * https://en.bem.info/methodology/naming-convention/
*/
import React from 'react';
import './App.css';
import Login from './Components/Login';

function App() {
  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
