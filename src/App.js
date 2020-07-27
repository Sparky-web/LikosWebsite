import React from 'react';
import "./css/App.css"
import Footer from "./Components/Footer"
import ContactUs from "./Components/ContactUs"
import Reviews from "./Components/Reviews"
import Works from "./Components/Works"
import Navbar from "./Components/Navbar"
import Guarantees from "./Components/Guarantees"
import Headline from "./Components/Headline"
import Schema from "./Components/Schema"

function App(props) {
    return (
        <div className="App">
            <Navbar/>
            <Headline />
            <Guarantees />
            <Works />
            <Reviews />
            <Schema />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;
