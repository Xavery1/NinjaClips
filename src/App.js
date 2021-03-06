import React from 'react';

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css'; 

const App = () => {
    return ( 
        <div classname = "App" >
        <div classname = "gradient__bg" >
            <Navbar />
            <Header />
        </div> 
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
};

export default App;