
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import WatchHistory from './Pages/Watchhistory'

function App() {
  

  return (
    <>
     <Header/>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/watchhistory' element={<WatchHistory/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
