import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'

//Pages
import Home from './Pages/Home/Home'
import Characters from './Pages/Characters/Characters'
import Details from './Pages/Details/Details'
import Filtrado from './Pages/Filtrado/Filtrado'
import Error from './Pages/Error/Error'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/filtrado" element={<Filtrado />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
