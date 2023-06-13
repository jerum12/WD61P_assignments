import './App.css';
import Home from './Pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cats from './Pages/Cats';
import Dogs from './Pages/Dogs';
import Fishes from './Pages/Fishes';
import AboutUs from './Pages/AboutUs';
import ContactUs from "./Pages/ContactUs";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cats" element={<Cats/>}/>
                    <Route path="/dogs" element={<Dogs/>}/>
                    <Route path="/fishes" element={<Fishes/>}/>
                    <Route path="/aboutus" element={<AboutUs/>}/>
                    <Route path="/contactus" element={<ContactUs/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
