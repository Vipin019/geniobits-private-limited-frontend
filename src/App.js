import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SigninForm from "./Components/Hrmlogin/SigninForm";
import Hrmdashboard from "./Components/Hrmdashboard/Hrmdashboard";

function App() {
  return (
    <div className="App">
      <SigninForm />
    </div>
  );
}

export default App;
