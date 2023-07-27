import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header'
import Home from './home/Home';
import UpperHome from './home/Upperhome/UpperHome';
import Footer from './components/fotter/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <UpperHome/>
    <Routes>
    <Route path="/" element={<Home/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
