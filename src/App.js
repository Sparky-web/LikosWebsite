import React from 'react';
import "./css/App.css"
import Footer from "./Components/Footer"
import ContactUs from "./Components/ContactUs"
import Works from "./Components/Works"
import Navbar from "./Components/Navbar"
import Guarantees from "./Components/Guarantees"
import Headline from "./Components/Headline"
import Schema from "./Components/Schema"
import AboutUs from "./Components/AboutUs"
import Services from "./Components/Services"

function App(props) {
    return (
        <div className="App">
            <Navbar/>
            <Headline />
            <AboutUs />
            <Guarantees />
            <Works />
            <Services />
            <Schema />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;
