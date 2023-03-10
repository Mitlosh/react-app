import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ToDo from './pages/ToDo.js'
import Game from './pages/TicTac Toe/Game'
import Navbar from './Navbar';
import Movies from './pages/Movies/Movies.js';
import Watchlist from './pages/Movies/Watchlist.js';

function App() {
  
  return (
    <>
      <Navbar />
      <div className='container main-grid'>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='movies' element={<Movies />} />
          <Route path='watchlist' element={<Watchlist />} />
          <Route path='todo' element={<ToDo />} />
          <Route path='tictac' element={<Game />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
