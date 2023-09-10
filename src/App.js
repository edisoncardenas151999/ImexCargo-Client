import "./index.css";
import Navbar from "./Components/Navbar.js";
import HomePage from "./Components/HomePage";
import Tracking from "./Components/Tracking";
import { Route, Routes } from "react-router-dom";
import ItemDetails from "./Components/ItemDetails";
import ItemCard from "./Components/ItemCard";
import NoResult from "./Components/NoResult";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />
    
      <div>
        <Routes>
    <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/itemDetails" element={<ItemDetails />} />
          <Route path="/noResult" element={<NoResult />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
