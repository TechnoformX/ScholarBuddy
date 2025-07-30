import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App';
import ChatBot from './ChatBot.jsx';
import Results from './Results.jsx';



const Main1 = () => {
  return (
    <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/chatbot' element={<ChatBot />}/>

    <Route path="/results" element={<Results />} />

       
    </Routes>
  )
}

export default Main1