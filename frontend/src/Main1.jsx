import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App';
import ChatBot from './ChatBot.jsx';

const Main1 = () => {
  return (
    <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/chatbot' element={<ChatBot />}/>
    </Routes>
  )
}

export default Main1