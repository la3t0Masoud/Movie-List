import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './css/App.css'
import Home from './pages/Home'
import {Routes , Route} from 'react-router-dom'
import { MovieProvider } from './context/MovieContext'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import './css/App.css'




function App() {
  return (
    <MovieProvider>
        <NavBar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
        </main>
    </MovieProvider>
  );
}
export default App
