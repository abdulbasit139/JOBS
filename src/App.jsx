import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './Pages/Home'
import Jobs from './Pages/Jobs'
import Contact from './Pages/Contact'


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/jobs' Component={Jobs}></Route>
          <Route path='/contact' Component={Contact}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App