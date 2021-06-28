import React from 'react';
import "../css/App.css"
import Footer from "../components/Footer"
import ContactUs from "../components/ContactUs"
import Works from "../components/Works"
import Navbar from "../components/Navbar"
import Guarantees from "../components/Guarantees"
import Headline from "../components/Headline"
import Schema from "../components/Schema"
import AboutUs from "../components/AboutUs"
import Services from "../components/Services"

import {Helmet} from "react-helmet";

function IndexPage(props) {
    return (
        <div className="App">

            <Helmet>
                <title>Ликос | Щитовая сборка в Екатеринбурге</title>
            </Helmet>
            <Navbar/>
            <Headline/>
            <Services/>
            <Guarantees/>
            <Works/>
            <Schema/>
            <ContactUs/>
            <AboutUs/>
            <Footer/>
        </div>
    );
}

export default IndexPage;
