
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About';
import Home from './Components/Home'
import NavBar from './Components/NavBar';
import Page404 from './Components/Page404';
import User from './Components/User';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          {/* <Route path="/*" element={<Page404 />}/> */}
          <Route path="/*" element={<Navigate to="/"/>}/>
          <Route path="/user/:name" element={<User />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
