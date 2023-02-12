//import { useEffect } from "react";
import Web3 from "web3";
//import React from "react";
import Refugeeabi from  '../../abis/Refugee.json';
let selectedAccount;
let Refugeecont;
let isInitialized = false;
const  Weeb3 = async ()=> {

    let provider = window.ethereum;

    //const providerURL = process.env.PROVIDERURL || "http://localhost:8545";

    

    // used to connect Metamask with our App
    if(typeof provider !== 'undefined'){
        provider.request({method:'eth_requestAccounts'}).then(accounts =>{
            selectedAccount = accounts[0];
            console.log(accounts);
    })
    .catch((err) =>{
        console.log(err);
        return;
        })
    }

    window.ethereum.on('accountschanged', function(accounts){
        selectedAccount = accounts[0];
        console.log(`Select Account is changed to ${selectedAccount}`);
    });

    const web3 = new Web3(provider);

    const networkId = await web3.eth.net.getId();

    const contractaddr =  Refugeeabi.networks[networkId].address;

     Refugeecont = new web3.eth.Contract(Refugeeabi.abi,contractaddr);
     
     isInitialized = true;




};

export default Weeb3;

//Calling  createUser  function from solidity code.
export const createUser = async()=>{
    if(!isInitialized){
        await Weeb3();
    }
    return Refugeecont.methods.createUser(
        'gowtham0210',
        'Gowtham',
        'S',
        '9080980256',
        '02-10-2002',
         20,
         'Indian',
         'M'
    ).send({ from: selectedAccount })
}