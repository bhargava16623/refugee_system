import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import {Bank} from '../pages/Bank'
import {Home} from '../pages/Home'
import {Myprofile} from '../pages/Myprofile'
import Menu from './comps/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Web3 from 'web3';
import Refugeeabi from '../abis/Refugee.json';



class App extends Component {

  async componentDidMount(){
    await this.loadWeb3()
    await this.loadblockchaindata()
  }

  async loadWeb3(){
    if(window.etherum){
      window.web3 = new Web3(window.etherum)
      await window.etherum.enable()
    }else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }else{
      window.alert('Non etherum browser detected. You should consider trying Metamask.');
    }
  }

  async loadblockchaindata(){
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    const networkId = await web3.eth.getId()
    console.log(Refugeeabi.abi, Refugeeabi.networks[networkId].address)
    const abi = Refugeeabi.abi
    const address = Refugeeabi.networks[5777].address

    const Refugee = web3.eth.Contract(abi,address)
  }
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
//To get Contract pass abi and address of the contract with web3.eth.Contract function.
//
//
//
//
//
//
//
//