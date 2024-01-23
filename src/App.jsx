import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import City from "./components/city/City";
import Reservations from "./components/reservations/Reservations";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/city" element={<City/>}/>
        <Route path="/reservations" element={<Reservations/>}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
