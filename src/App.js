import './App.css';
import Navbar from './component/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import { createContext, useEffect, useState } from 'react';

const produtDataContext = createContext();
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
