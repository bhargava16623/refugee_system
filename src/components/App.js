import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import {Bank} from '../pages/Bank'
import {Home} from '../pages/Home'
import {Myprofile} from '../pages/Myprofile'
import Menu from './comps/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
         <Menu />
         <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/bank" element={<Bank />} />
          <Route path='/Myprofile' element = {<Myprofile />} />
        </Routes>
        </BrowserRouter>


      </div>
    );
  }
}

export default App;

//  +---------+------------------------------+----------------+
//  | Number  |      Contract Name           |    Status      |
//  |---------+------------------------------+----------------+
//  |  1      |        Nav Bar               |     Done ✅    |
//  |  2      |       Refugee Form           |     Done ✅    |
//  |  3      |        Home Page             |    pending ❌  |
//  |  4      |        Slider                |     Done ✅    |
//  |  5      |         Cards                |     Done ✅    |
//  |  6      |         Footer               |    pending ❌  |
//  |  7      |                              |    pending ❌  |
//  +---------+------------------------------+----------------+
//
//
//
//
//
//
//
//
//
//
//
//