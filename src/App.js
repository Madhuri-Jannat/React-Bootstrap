import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Event from './pages/Event';
import Forms from './pages/Forms';
import Display_data from './pages/Display_data';

function App() {
  return (
   <>

   <BrowserRouter>
   <Nav></Nav>
   <Header></Header>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/event' element={<Event />}/>
    <Route path='/forms' element={<Forms/>}/>
    <Route path='/Display_data' element={<Display_data/>}/>

    
   </Routes>
   <Footer></Footer>
   </BrowserRouter>
   </>
  );
}

export default App;
