
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Aboutstart from './components/Aboutstart';
import Category from './components/Category';
import Connect from './components/Connect';
import Client from './components/Client';
import Property from './components/Property';
import { BrowserRouter , Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>

     </BrowserRouter>
     <Aboutstart/>
     <Client/>
     <Connect/>
     <Property/>
     <Category/>
     
     <Contact/>
<Footer/>
    </div>
  );
}

export default App;
