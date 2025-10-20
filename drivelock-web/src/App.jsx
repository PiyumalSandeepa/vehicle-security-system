import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import './index.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* later: /gps, /alarm, /profile */}
          <Route path="*" element={<h3 className="notfound">Not Found</h3>} />
        </Routes>
      </main>
    </>
  )
}
