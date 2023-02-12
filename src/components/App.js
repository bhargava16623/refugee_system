import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import {Bank} from '../pages/Bank'
import {Myprofile} from '../pages/Myprofile'
import Menu from './comps/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Web3 from 'web3';
//import Refugeeabi from '../abis/Refugee.json';
import Home from '../pages/Home'
import Weeb3 from './comps/weeb3';
import { createUser } from './comps/weeb3';

let userCreated;
class App extends Component {

  async componentDidMount(){
   // await this.loadWeb3()
   // await this.loadblockchaindata()
    Weeb3()
    createUser().then(tx=>{
      console.log(tx)
      this.state.userCreated = true;

    }).catch(err => {
      console.log(err);
  })
  }

  // async loadWeb3(){
  //   if(window.etherum){
  //     window.web3 = new Web3(window.etherum)
  //     await window.etherum.enable()
  //   }else if(window.web3){
  //     window.web3 = new Web3(window.web3.currentProvider)
  //   }else{
  //     window.alert('Non etherum browser detected. You should consider trying Metamask.');
  //   }
  // }

  // async loadblockchaindata(){
  //   const web3 = window.web3

  //   //Used to get Account address
  //   const accounts = await web3.eth.getAccounts()
  //   console.log(accounts)

  //   //Retrieve Network id from, if network id may change or dynamic.
  //   const networkId = await web3.eth.getId()

  //   //used to retrieve network data
  //   const networkData = Refugeeabi.networks[networkId]

  //   //Store abi data in to abi variable
  //   const abi = Refugeeabi.abi

  //   //store address of the deployed contract.
  //   const address = Refugeeabi.networks[networkId].address

  //   //checking weather the contract is deployed or not.
  //   //The networkdata have value only if the smart contract is deployed.
  //   if(networkData){
  //     const Refugee = web3.eth.Contract(abi,address)
  //   }else{
  //     window.alert('Refugee contract is not deployed to detected network')
  //   }

  // }

  constructor(){
    super()
    this.state={
      userCreated : false
    }
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
        {!userCreated ? <button onClick={()=>createUser()}>createUser</button>:
        <p>User is Created</p>}
        {/* <Weeb3 /> */}
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