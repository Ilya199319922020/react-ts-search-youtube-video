import React from 'react';
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import Container from './components/Container';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path='/login' element={<AuthPage />} />
      <Route path='/search' element={<Container />} />
    </Routes>
  );
}

export default App;
