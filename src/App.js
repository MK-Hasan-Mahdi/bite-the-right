import './App.css';
import Navbar from './component/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import { createContext, useEffect, useState } from 'react';

const produtsDataContext = createContext();
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const valueObj = {
    products
  }

  return (
    <div>
      <produtsDataContext.Provider value={valueObj}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </produtsDataContext.Provider>
    </div>
  );
}

export default App;
export { produtsDataContext };