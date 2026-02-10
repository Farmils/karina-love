import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Memories from './pages/Memories.jsx'
import Surprise from './pages/Surprise.jsx'

function App() {
  return (
    <div className="app">
      <div className="hearts-bg" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, index) => (
          <span key={index} className="heart" />
        ))}
      </div>

      <header className="header">
        <div className="logo-title">
          <span className="logo-heart">♥</span>
          <div>
            <h1 className="site-title">Karina Love</h1>
            <p className="site-subtitle">
              Волшебный сайт для Карины ко Дню всех влюблённых
            </p>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" end>
            Домашняя
          </NavLink>
          <NavLink to="/gallery">Галерея чувств</NavLink>
          <NavLink to="/memories">Наши воспоминания</NavLink>
          <NavLink to="/surprise">Страница‑сюрприз</NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/surprise" element={<Surprise />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>
          Сайт создан с любовью специально для Карины · День всех влюблённых
        </p>
      </footer>
    </div>
  )
}

export default App
