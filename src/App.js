import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";

import Eyeglasses from "./components/onclick/Eyeglasses";
import Computerglasses from "./components/onclick/Computerglasses";
import Kidsglasses from "./components/onclick/Kidsglasses";
import Sunglasses from "./components/onclick/Sunglasses";
import GlassesComponent from "./components/onclick/GlassesComponent";
import HomeeyetestComponent from "./components/onclick/HomeeyetestComponent";
import Storelocator from "./components/onclick/Storelocator";
import Hover from "./components/Hover";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
              {/* <Route path="/" element={<Navbar />} /> */}
              {/* <Route path="/insta" element={<Dashboardinsta />} /> */}
              <Route path="/" element={<Navbar />} />
              
              <Route path="/eyeglasses" element={<Eyeglasses />} />
              <Route path="/Computerglasses" element={<Computerglasses />} />
              <Route path="/Kidsglasses" element={<Kidsglasses />} />
              <Route path="/Sunglasses" element={<Sunglasses />} />
              <Route path="/Hover" element={<Hover />} />
              <Route path="/GlassesComponent" element={<GlassesComponent />} />
              <Route path="/HomeeyetestComponent" element={<HomeeyetestComponent />} />
              <Route path="/Storelocator" element={<Storelocator />} />

              {/* <Route exact path="/glasses" component={GlassesComponent} /> */}
      </Routes>
    </div>
  );
}

export default App;

