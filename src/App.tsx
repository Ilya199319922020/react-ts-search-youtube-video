import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import SearchPage from './components/Search/SearchPage';
import VideoList from './components/Video/VideoList';


function App() {
  return (
    <Routes>
      <Route path='/login' element={<AuthPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/videoList' element={<VideoList />} />
    </Routes>
  );
}

export default App;
