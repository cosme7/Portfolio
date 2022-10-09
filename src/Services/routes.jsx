import React from "react";
import {About, Contact, Footer, Header, Home, NotFound, Projects} from "../Pages"
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