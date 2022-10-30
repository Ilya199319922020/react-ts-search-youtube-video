import React from 'react';
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import Container from './components/Container';
import Favorites from './components/Favorites/Favorites';
import Header from './components/Header/Header';

function App() {
  return (<>
    <Routes>
      <Route path='/react-ts-search-youtube-video' element={<Navigate replace to="/login" />} />
      <Route path='/login' element={<AuthPage />} />
      <Route path='/' element={<Header />}>
        <Route path='search/*' element={<Container />} />
        <Route path='favorites' element={<Favorites />} />
      </Route>
    </Routes>
  </>
  );
}

export default App;
