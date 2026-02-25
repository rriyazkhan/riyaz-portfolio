import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import vpnImage from '../assets/vpn.png';
import copeopleImage from '../assets/copeople.png';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/certifications' element={<Certifications/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
