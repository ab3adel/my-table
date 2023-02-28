import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomizedSnackbars from './components/notification'
import AlertContext from './tools/context/alert-context/alert-context';
import Home from './pages/home';
function App() {
const {stateAlert,setAlertState}=useContext(AlertContext)
  return (
    <div className="App">
      <Home />

  
    </div>
  );
}

export default App;
