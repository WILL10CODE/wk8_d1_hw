import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './views/About';
import Contact from './views/Contact';
import Products from './views/Products';

export default class Zebra extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>This is William's React App</h1>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path= '/contact' element={<Contact/>}/>
          <Route path= '/products' element={<Products/>}/>
        </Routes>
      </div>
    )
  }
}
