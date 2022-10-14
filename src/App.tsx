import React from 'react';
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import Container from './components/Container';
import VideoList from './components/Video/VideoList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path='/login' element={<AuthPage />} />
      <Route path='/search' element={<Container />} />
      <Route path='/videoList' element={<VideoList />} />
    </Routes>
  );
}

export default App;
