import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Getjewelry from './components/Getjewelry';
import Addjewelry from './components/Addjewelry';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Notfound from './components/Notfound';
import Navbar from './components/Navbar';
import Makepayment from './components/Makepayment';
import AboutUs from './components/Aboutus';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Chatbot from './components/Chatbot'; // Import the Chatbot component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Getjewelry />} />
          <Route path="/addjewelry" element={<Addjewelry />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/mpesapayment" element={<Makepayment />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;