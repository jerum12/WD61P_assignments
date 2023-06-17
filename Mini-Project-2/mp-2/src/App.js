import Home from './Pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cats from './Pages/Cats';
import Dogs from './Pages/Dogs';
import Fishes from './Pages/Fishes';
import AboutUs from './Pages/AboutUs';
import ContactUs from "./Pages/ContactUs";
import Career from './Pages/Career';
import Merchants from './Pages/Merchants';
import Payment from './Pages/Payment';
import Returns from './Pages/Returns';
import PetCare from './Pages/PetCare';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cats" element={<Cats />} />
                    <Route path="/dogs" element={<Dogs />} />
                    <Route path="/fishes" element={<Fishes />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/careers" element={<Career />} />
                    <Route path="/merchants" element={<Merchants />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/returns" element={<Returns />} />
                    <Route path="/petcare" element={<PetCare />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
