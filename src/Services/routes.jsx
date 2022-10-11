import React from "react";
import Header from "../Components/Header/index";
import {About, Contact, Home, NotFound, Projects} from "../Pages";
import Footer from "../Components/Footer/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function routes(){
    return(
        <>
        <Router>
            <ScrollToTop />  
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </Router> 
        </>
    );
};