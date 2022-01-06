import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './views/About';
import Contact from './views/Contact';
import Products from './views/Products';
import News from './views/News';

export default class Zebra extends Component {
  constructor() {
    super();
    this.state = {
      items: ["basketballs","basketball shoes","shorts","therma-shirts"],
      origin: "Africa"

    }
}

  render() {
    return (
      <div>
        <Navbar />
        <h1>This is William's React App</h1>
        <Routes>
          <Route path='/about' element={<About items = {this.state.items} />}/>
          <Route path= '/contact' element={<Contact/>}/>
          <Route path= '/products' element={<Products items = {this.state.items} />}/>
          <Route path= '/news' element={<News/>}/>
        </Routes>
      </div>
    )
  }
}
