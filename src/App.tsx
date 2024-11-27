import "../src/App.css";
import { Routes, Route } from "react-router";
import Expense from "./Pages/Expense";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/expense' element={<Expense/>} />
       </Routes>
    </div>
  );
}

export default App;
